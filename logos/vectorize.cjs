const sharp = require('sharp');
const fs = require('fs');
const ImageTracer = require('imagetracerjs');

const inputPath = 'logos/logo-original.jpeg';

async function traceWithThreshold(thresholdFn, blurPre, blurPost, scale, pathOmit) {
    const { data: rawData, info: rawInfo } = await sharp(inputPath)
        .resize(179 * scale, 196 * scale, { kernel: 'lanczos3' })
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });
    
    // Pre-blur
    const preBlurred = await sharp(rawData, {
        raw: { width: rawInfo.width, height: rawInfo.height, channels: 4 }
    })
    .blur(blurPre)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
    
    // Threshold
    const threshData = Buffer.alloc(preBlurred.data.length);
    for (let i = 0; i < preBlurred.data.length; i += 4) {
        const r = preBlurred.data[i], g = preBlurred.data[i+1], b = preBlurred.data[i+2];
        const result = thresholdFn(r, g, b);
        threshData[i] = result[0]; threshData[i+1] = result[1]; threshData[i+2] = result[2]; threshData[i+3] = 255;
    }
    
    // Post-blur
    const postBlurred = await sharp(threshData, {
        raw: { width: preBlurred.info.width, height: preBlurred.info.height, channels: 4 }
    })
    .blur(blurPost)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
    
    // Re-threshold
    const finalData = Buffer.alloc(postBlurred.data.length);
    for (let i = 0; i < postBlurred.data.length; i += 4) {
        const r = postBlurred.data[i], g = postBlurred.data[i+1], b = postBlurred.data[i+2];
        const result = thresholdFn(r, g, b);
        finalData[i] = result[0]; finalData[i+1] = result[1]; finalData[i+2] = result[2]; finalData[i+3] = 255;
    }
    
    const imgd = {
        width: postBlurred.info.width,
        height: postBlurred.info.height,
        data: new Uint8ClampedArray(finalData)
    };
    
    return ImageTracer.imagedataToSVG(imgd, {
        colorsampling: 2,
        numberofcolors: 4,
        mincolorratio: 0,
        colorquantcycles: 8,
        ltres: 0.001,
        qtres: 0.001,
        pathomit: pathOmit,
        rightangleenhance: false,
        blurradius: 0,
        blurdelta: 20,
        roundcoords: 1,
    });
}

function extractPaths(svgstr, filterFn) {
    const pathRegex = /<path\s+fill="([^"]+)"[^>]*d="([^"]+)"/g;
    let match;
    const paths = [];
    while ((match = pathRegex.exec(svgstr)) !== null) {
        const color = match[1];
        const d = match[2];
        const m = color.match(/rgb\((\d+),(\d+),(\d+)\)/);
        if (!m) continue;
        const [r, g, b] = [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])];
        if (filterFn(r, g, b)) paths.push(d);
    }
    return paths;
}

async function main() {
    const SCALE = 12;
    const W = 179 * SCALE;
    const H = 196 * SCALE;
    
    // Trace 1: All blue elements (body + details)
    console.log('Tracing all blue elements...');
    const svg1 = await traceWithThreshold(
        (r, g, b) => {
            if (b > 100 && b > r * 1.15) return [46, 69, 181]; // blue
            return [255, 255, 255]; // white
        },
        2, 1.5, SCALE, 60
    );
    const allBluePaths = extractPaths(svg1, (r, g, b) => !(r > 200 && g > 200 && b > 200));
    console.log(`  Got ${allBluePaths.length} paths`);
    
    // Trace 2: Only dark navy elements (node + bridge line)
    console.log('Tracing navy elements...');
    const svg2 = await traceWithThreshold(
        (r, g, b) => {
            if (r < 60 && g < 70 && b > 80 && b < 180) return [13, 27, 126]; // navy
            return [255, 255, 255]; // white
        },
        1.5, 1, SCALE, 40
    );
    const navyPaths = extractPaths(svg2, (r, g, b) => !(r > 200 && g > 200 && b > 200));
    console.log(`  Got ${navyPaths.length} paths`);
    
    // Combine: royal blue body + navy details on top
    const output = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" fill="none">
  <path fill="#2E45B5" d="${allBluePaths.join(' ')}" />
${navyPaths.length > 0 ? `  <path fill="#0D1B7E" d="${navyPaths.join(' ')}" />` : ''}
</svg>`;
    
    fs.writeFileSync('logos/grupo-etarp-icon.svg', output);
    console.log(`\nFinal SVG: ${output.length} chars`);
}

main().catch(console.error);

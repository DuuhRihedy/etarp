const ImageTracer = require('imagetracerjs');
const fs = require('fs');

const inputPath = 'logos/logo-original.jpeg';
const outputPath = 'logos/grupo-etarp-icon-traced.svg';

console.log('Loading image...');

ImageTracer.imageToSVG(
    inputPath,
    function(svgstr) {
        fs.writeFileSync(outputPath, svgstr);
        console.log(`SUCCESS! SVG saved to ${outputPath} (${svgstr.length} chars)`);
    },
    {
        // High quality color tracing
        colorsampling: 2,       // deterministic color sampling
        numberofcolors: 16,     // number of color palette entries
        mincolorratio: 0,
        colorquantcycles: 3,
        ltres: 1,               // line tracing threshold
        qtres: 1,               // quadratic spline threshold
        pathomit: 8,            // discard paths shorter than this
        rightangleenhance: true, // enhance right-angle corners
        blurradius: 0,
        blurdelta: 20,
    }
);

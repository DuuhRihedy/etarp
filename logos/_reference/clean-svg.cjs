const fs = require('fs');

const input = fs.readFileSync('logos/grupo-etarp-icon-traced.svg', 'utf-8');

const pathRegex = /<path\s+fill="([^"]+)"[^>]*d="([^"]+)"/g;
let match;
const colorGroups = {};

while ((match = pathRegex.exec(input)) !== null) {
    const color = match[1];
    const d = match[2];
    if (!colorGroups[color]) colorGroups[color] = [];
    colorGroups[color].push(d);
}

// Keep only the actual logo colors (blue tones), skip all whites/near-whites
const isLogoColor = (rgb) => {
    const m = rgb.match(/rgb\((\d+),(\d+),(\d+)\)/);
    if (!m) return false;
    const [r, g, b] = [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])];
    // Skip if all channels are > 230 (white/near-white backgrounds)
    if (r > 230 && g > 230 && b > 230) return false;
    return true;
};

// Map similar colors to cleaner hex values
const mapColor = (rgb) => {
    const m = rgb.match(/rgb\((\d+),(\d+),(\d+)\)/);
    const [r, g, b] = [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])];
    
    // Dark navy (node, bridge): r<30, g<30, b<140
    if (r < 30 && g < 30 && b < 140) return '#0D1B7E';
    // Mid blue (main hexagon): r<60, g<90, b<200
    if (r < 60 && g < 90 && b < 200) return '#2E45B5';
    // Brighter blue: r<50, g<90, b>200
    if (r < 50 && g < 90 && b > 200) return '#2650E0';
    // Light blue (anti-alias mid): r<120, g<140, b<210
    if (r < 120 && g < 140 && b < 210) return '#617AC3';
    // Lighter blue (anti-alias): r<180, g<200, b<240
    if (r < 180 && g < 200 && b < 240) return '#A4B5E3';
    // Very light blue (anti-alias outer): r<230, g<240, b<255
    if (r < 230 && g < 240 && b < 255) return '#D9E6FA';
    
    return rgb;
};

const logoColors = Object.entries(colorGroups)
    .filter(([color]) => isLogoColor(color));

console.log('Logo colors:');
logoColors.forEach(([color, paths]) => {
    console.log(`  ${color} -> ${mapColor(color)} (${paths.length} paths)`);
});

// Group by mapped color
const mapped = {};
logoColors.forEach(([color, paths]) => {
    const hex = mapColor(color);
    if (!mapped[hex]) mapped[hex] = [];
    mapped[hex].push(...paths);
});

const output = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 716 784" width="100%" height="100%">
${Object.entries(mapped)
    .map(([color, paths]) => `  <path fill="${color}" d="${paths.join(' ')}" />`)
    .join('\n')}
</svg>`;

fs.writeFileSync('logos/grupo-etarp-icon.svg', output);
console.log(`\nClean icon SVG saved: logos/grupo-etarp-icon.svg (${output.length} chars)`);

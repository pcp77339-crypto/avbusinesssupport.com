const fs = require('fs');
const path = require('path');

const sampleDir = 'c:\\Users\\ved prakash dubey\\Downloads\\portfolio 2\\MAIN WEB\\all web sections\\manue\\SAMPLE';
const frontBackDir = path.join(sampleDir, 'front and back');
const htmlFile = 'c:\\Users\\ved prakash dubey\\Downloads\\portfolio 2\\MAIN WEB\\all web sections\\manue\\new\\manue\\code.html';

const menuFiles = fs.readdirSync(sampleDir).filter(f => fs.statSync(path.join(sampleDir, f)).isFile());
const coverFiles = fs.readdirSync(frontBackDir).filter(f => fs.statSync(path.join(frontBackDir, f)).isFile());

let htmlContent = [];
let idx = 1;

for (const f of coverFiles) {
    htmlContent.push(`    <img src="../../SAMPLE/front and back/${f}" class="gallery-img gallery-item w-full h-auto object-contain rounded-xl cursor-pointer hover:scale-[1.02] transition-transform shadow-lg border border-white/10" data-category="cover" style="view-transition-name: img-${idx};">`);
    idx++;
}
for (const f of menuFiles) {
    htmlContent.push(`    <img src="../../SAMPLE/${f}" class="gallery-img gallery-item w-full h-auto object-contain rounded-xl cursor-pointer hover:scale-[1.02] transition-transform shadow-lg border border-white/10" data-category="menu" style="view-transition-name: img-${idx};">`);
    idx++;
}

let lines = fs.readFileSync(htmlFile, 'utf8').split('\n');
let startIdx = -1;
let endIdx = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('id="gallery-grid"')) {
        startIdx = i + 1;
    }
    if (startIdx !== -1 && i > startIdx && lines[i].includes('</div>')) {
        endIdx = i;
        break;
    }
}

if (startIdx !== -1 && endIdx !== -1) {
    const newLines = [...lines.slice(0, startIdx), ...htmlContent.map(l => l + '\r'), ...lines.slice(endIdx)];
    fs.writeFileSync(htmlFile, newLines.join('\n'), 'utf8');
    console.log('Updated html successfully');
} else {
    console.log('Could not find gallery-grid section');
}

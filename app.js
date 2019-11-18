const Jimp = require("jimp");
const fs = require("fs");
const path = require("path");

const inputDir = "input";
const outputDir = "output";

async function asyncForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        await callback(array[i], i, array);
    }
}

asyncForEach(fs.readdirSync(inputDir), async filename => {
    const file = path.resolve(inputDir, filename);
    const fileOut = path.resolve(outputDir, filename);

    if (!fs.statSync(file).isFile()) return;
    if (!path.extname(file) === "png") return;
    if (filename.startsWith(".")) return;

    const background = await Jimp.read(file);
    const foreground = background.clone();

    background.resize(825, 1125);
    background.composite(foreground, 0, 0, {
        // foreground is placed overtop background
        mode: Jimp.BLEND_SOURCE_OVER
    });

    background.write(fileOut);
});

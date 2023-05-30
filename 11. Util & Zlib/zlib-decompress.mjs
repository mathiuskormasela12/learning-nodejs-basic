import fs from 'fs';
import zlib from 'zlib';

const compressedFile = fs.readFileSync('util.mjs.txt');

// Decompress file
const normalFile = zlib.gunzipSync(compressedFile);
console.log(normalFile.toString());
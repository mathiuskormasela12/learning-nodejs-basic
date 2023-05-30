/*
	========== Zlib ==========
	
	Zlib merupakan Javascript standard library
	yang dapat digunakan untuk membantu
	kita untuk melakukna compressi dan decompresi
	file guna untuk memperkecil ukuran filenya.
*/
import zlib from 'zlib';
import fs from 'fs';

const utilFile = fs.readFileSync('util.mjs'); 

// Compressi file util.mjs (hanya menerima buffer)
const compressedFile = zlib.gzipSync(utilFile);

// Simpan file hasil kompresi
fs.writeFileSync('util.mjs.txt', compressedFile);
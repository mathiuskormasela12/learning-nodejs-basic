// path berfungsi untuk mendapatkan informasi semengenai sebuah file atau folder
import path from 'path';

const file = '/Users/mathius/code/index.js';

console.log('1. Informasi nama file =>', path.basename(file));
console.log('2. Informasi nama folder =>', path.dirname(file));
console.log('3. Informasi separator file os kita =>', path.sep);
console.log('4. Informasi ekstensi file =>', path.extname(file));
console.log('5. Menampilkan sebuah object yg berisi detail informasi dari sebuah file/folder { root: "/", dir: "/Users/mathius/code", base: "index.js", ext: ".js", name: "index" }  =>', path.parse(file))
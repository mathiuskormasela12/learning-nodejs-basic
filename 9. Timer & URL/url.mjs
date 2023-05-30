/*
	========== URL ==========

	Module URL berfungsi untuk parsing
	URL guna mendapatkan informasi-informasi
	mengenai URL tersebut dan juga dapat
	digunakan untuk memanipulasi URL nya.
*/
import {URL} from 'url';

const link = 'http://www.programmer.zaman.now.com/belajar-node-js?page=1';

const url = new URL(link);

console.log('1. Menampilkan Full URL', url.href);
console.log('2. Menampilkan Full URL', url.toString());
console.log('3. Menampilkan protocol',  url.protocol);
console.log('4. Menamilkan host name (tanpa port)', url.hostname);
console.log('5. Menampilkan host (dengan port)', url.host);
console.log('6. Menampilkan pathname', url.pathname);
console.log('7. Menampilkan query string sebagai string', url.search);
console.log('8. Menampilkan query string sebagai object', url.searchParams);

// Mengubah hostname
url.hostname = 'localhost';
url.port = 3000;

console.log('9. Untuk menampilkan port', url.port)

// Dengan Port
console.log(url.host);

// Tanpa Port
console.log(url.hostname);

// Menambahkan query string
url.searchParams.append('keyword', 'kawaii');

console.log(url.href)
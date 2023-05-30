/*
	========== Readline ==========

	Readline merupakans sebuah module di Node Js
	yang berfungsi untuk membuat aplikasi command line.
	Dimana kita dapat membuat Node Js untuk meminta inputan
	dari user menggunakan command line.

	Cara penggunaan :
	1. Dengan Non-Blocking Callback
	2. Dengan Non-Blokcing Promise
*/
// Dengan Non-Blocking Callback
import readline from 'readline';
import process from 'process';

const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

input.question("What's your name ? ", (answer) => {
	console.log(`Hello ${answer}`);
	// Untuk menutup input (kalau tidak di close, command line nya bakal tetep muncul, tdk akan exit)
	input.close();
});
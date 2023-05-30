/*
	========== File System ==========

	File System adalah sebuah module dalam node js
	yang berguna untuk melakukan organize file & folder.
	Seperti membuat file dan folder, menulis file dll.

	Untuk menggunakan File System ada 3 cara :
	1. Blocking File System
	2. Non-Blokcing File System with Callback
	3. Non-Blocking FIle System with Promise
*/
// Blocking
import fs from 'fs';

// Membuat File
try {
	fs.writeFileSync('hello.txt', 'This file is created by writeFileSync function');
	console.log('Created');
} catch (err) {
	console.error(err);
}

// Membaca File
try {
	const result = fs.readFileSync('hello.txt');
	console.log(result.toString());
} catch (err) {
	console.error(err);
}

// Update File
try {
	fs.appendFileSync('hello.txt', ' update');
	console.log('Updated');
} catch (err) {
	console.error(err);
}

// Delete File
try {
	fs.unlinkSync('hello.txt');
	console.log('Deleted');
} catch (err) {
	console.error(err);
}
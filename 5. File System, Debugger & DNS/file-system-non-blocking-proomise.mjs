import fs from 'fs/promises';

// Menulis File
try {
	await fs.writeFile('hello3.txt', 'Hello World');
	console.log('Written');
} catch (err) {
	console.error(err);
}

// Update File
try {
	await fs.appendFile('hello3.txt', ' Updated');
	console.log('Updated');
} catch (err) {
	console.error(err);
}

// Membaca File
try {
	const result = await fs.readFile('hello3.txt');
	console.log(result.toString());
} catch (err) {
	console.error(err);
}

// Menghapus File
try {
	await fs.unlink('hello3.txt');
	console.log('Deleted');
} catch (err) {
	console.error(err);
}
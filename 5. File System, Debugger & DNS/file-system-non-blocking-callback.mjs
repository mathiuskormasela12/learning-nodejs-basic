import fs from 'fs';

// Menulis
fs.writeFile('hello2.txt', 'Hello World', (err) => {
	if(err) throw err;
	console.log('Created');
});

// Membaca File
fs.readFile('hello2.txt', (err, result) => {
	if(err) throw err;
	console.log(result.toString());
})

// Update File
fs.appendFile('hello2.txt', ' Update', (err) => {
	if(err) throw err;
	console.log('Updated');
});

// Delete File
fs.unlink('hello2.txt', (err) => {
	if(err) throw err;
	console.log('Deleted');
})
// Dengan Non-Blocking Promise
import readline from 'readline/promises';
import process from 'process';

const input = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const nilai = await input.question('Masukain Nilai mu : ');
console.log('Nilai anda adalah :', nilai);
input.close();
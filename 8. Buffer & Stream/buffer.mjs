/*
	========== Buffer ==========

	Buffer merupakan sebuah object yang merupakan 
	turunan dari tipe data Uint8Attay yang berisikan
	urutan byte dengan panjang yang tetap.
*/

// Convert string to buffer
const buffer = Buffer.from('Mathius Kormasela');

// Print Buffer
console.log(buffer);

// Convert buffer to string
console.log(buffer.toString());

// Reverse Buffer
buffer.reverse();
console.log(buffer.toString());
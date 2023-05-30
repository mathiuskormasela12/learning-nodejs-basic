import fs from 'fs';

/*
	Stream merupakan standard library
	untuk kontrak aliran data di Node Js.
	Node Js punya banyak sekali stream object,
	dan stream bisa jadi object yg bisa dibaca atau
	bisa di tulis dan bahkan bisa di baca dan bisa ditulis.
	Stream juga merupakan object turunan dari event emitter.
*/

// Membuat file dengan stream (cara kerja nya seperti writeFile bukan appendFile)
const writer = fs.createWriteStream('temp.txt');

writer.write('Hi \n');
writer.write('This \n');
writer.write('created \n');
writer.write('by \n');
writer.write('stream \n');
writer.end();

// Membaca file dengan stream
const reader = fs.createReadStream('temp.txt');

reader.addListener('data', (data) => {
	// parameyter data ini akan me return Buffer, oleh sebab itu mesti di convert menjadi string
	console.log(data.toString());
})
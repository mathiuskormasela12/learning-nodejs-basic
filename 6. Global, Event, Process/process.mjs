/*
	========== Process ==========

	Process merupakan sebuah global module yang sebenarnya
	tidak perlu kita import secara manual, namun lebih di sarankan
	untuk mengimport module nya.

	Module process berfungsi untuk mendapatkan informasi
	prosess Node js yang sedang berjalan. Process merupakan
	sebuah instance dari EventEmitter sehingga kita bisa menambhakan listener kedalam process.

	Berikut beberapa method yg bisa di gunakan:
	beforeExit => akan di jalankna sebelm prosess node js kita exit
	exit => akan di jalankan untuk menghentikan process exit
*/
import process from 'process';

// Ini akna di jalanakn jika process node js nya exit
process.addListener('exit', (exitCode) => {
	console.info('Node Js exit with code', exitCode);
});

// Mendapatkan versi node js kita
console.log(process.version);

/*
	Untuk mendapatkan argument dari node js kita.
	Bentuk datanya itu adalah array. Dimana di index ke 0
	akan berisi lokasi node js kita dan index ke 1 bersii file
	aplikasi node js kita ini, yaitu dalam case ini adlaah file proces.mjs.

	contoh data:
	[
		// File Node Js kita
		'/Users/mathius/.nvm/versions/node/v18.16.0/bin/node',

		// File yg sedang di eksekusi node js
		'/Users/mathius/code/learning-nodejs-basic/6. Global, Event, Process/process.mjs',

		// Disini nanti tempat-tempat jikalau kita menambahkan argument saat menjalankan file node js kita
	]

	contoh jika kita menulis perintah ini di terminal :
	node process.mjs Mathius Kormasela

	maka result nya adalah
	[
		'/Users/mathius/.nvm/versions/node/v18.16.0/bin/node',
		'/Users/mathius/code/learning-nodejs-basic/6. Global, Event, Process/process.mjs',
		// Agument2 yg kita kirim
		'Mathius',
		'Kormasela'
	]
*/
console.log(process.argv);

// Menampilakn report
console.log(process.report);

// Menampulkan list env os kita
console.table(process.env);

// Setiap code yg kita tulis setelah function ini, akan di abaikan (tidak di eksekusi)
process.exit(1);


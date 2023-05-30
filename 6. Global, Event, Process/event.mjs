/*
	========== Event Emitter ==========

	Event Emitter merupakan sebuah class
	yang berfungsi untuk membuat event listener di
	node js. Event ini bisa di listen lebih dari sekali
	dan setiap event nya akan di jalankna semua.Jadi
	tidak akan menimpa meskipun nama event nya sama.

	rumus membuat event :

	const emitter = new EventEmitter();

	emitter.addListener('nama-event-nya', (parameter event atau data yang di kirim ketika event nya dijalankan (bisa lebih dari satu)) => {
		statement
	})

	atau bisa gini juga

	emitter.on('nama-event-nya', (parameter event atau data yang di kirim ketika event nya dijalankan (bisa lebih dari satu)) => {
		statement
	})

	Untuk menjalankan event nya kita bisa melakukan emitt
	emitter.emit('nama-event-yg-mau-dijalankan', data1, data2 dst)

*/
import {EventEmitter} from 'events';

const emiter = new EventEmitter();

// Untuk menentukan berapa kali sih eventnya boleh di listen (default nya 111)
// Kalau tidak kita set 11, maka akan error, karena event test akan di jalankan 11 kali, dan itu sudah melebihni jumlah maksimal maxListener dari Eventnya (default 10)
emiter.setMaxListeners(11);

// Membuat event beranama test (1)
emiter.addListener('test', (firstName, lastName) => {
	console.log(`Hi my name is ${firstName} ${lastName}`);
});

// Membuat event beranama test (2)
emiter.addListener('test', (firsName, lastName) => {
	console.log(`Watashi wa ${firsName} ${lastName} desu`);
});

// Membuat event beranama test (3)
emiter.addListener('test', (firstName, lastName) => {
	console.log(`Hi my name is ${firstName} ${lastName}`);
});

// Membuat event beranama test (4)
emiter.addListener('test', (firsName, lastName) => {
	console.log(`Watashi wa ${firsName} ${lastName} desu`);
});

// Membuat event beranama test (5)
emiter.addListener('test', (firstName, lastName) => {
	console.log(`Hi my name is ${firstName} ${lastName}`);
});

// Membuat event beranama test (6)
emiter.addListener('test', (firsName, lastName) => {
	console.log(`Watashi wa ${firsName} ${lastName} desu`);
});

// Membuat event beranama test (7)
emiter.addListener('test', (firstName, lastName) => {
	console.log(`Hi my name is ${firstName} ${lastName}`);
});

// Membuat event beranama test (8)
emiter.addListener('test', (firsName, lastName) => {
	console.log(`Watashi wa ${firsName} ${lastName} desu`);
});

// Membuat event beranama test (9)
emiter.addListener('test', (firsName, lastName) => {
	console.log(`Watashi wa ${firsName} ${lastName} desu`);
});

// Membuat event beranama test (10)
emiter.addListener('test', (firsName, lastName) => {
	console.log(`Watashi wa ${firsName} ${lastName} desu`);
});

// Membuat event beranama test (11)
emiter.addListener('test', (firsName, lastName) => {
	console.log(`Watashi wa ${firsName} ${lastName} desu`);
});

// Menjalankan event test dan mengirimkan parameter
emiter.emit('test', 'Mathius', 'Kormasela');

// Nemapilakn jumlah maksimal listener
console.log(emiter.getMaxListeners())

// Menampilkan list event yg sudah di buat
console.log(emiter.eventNames())


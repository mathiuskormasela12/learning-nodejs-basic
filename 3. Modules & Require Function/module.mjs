/*
  ========== Module ==========

	Node Js memiliki standard library yang dapat
	kita gunakan untuk membuat aplikasi. Salah satunya
	adalah library os yang berguna untuk mengecek
	sistem operasi dan cpu apa yang kita gunakan.

	Node Js akan memperlakukan setiap standard library nya
	itu seperti module (ES Module). Oleh sebab itu untuk
	dapat menggunakan standard library tersebut kita harus
	mengimport nya menggunakan keyword import (ES Moule).
	Namun untuk dapat melakukannya kita harus mengubah
	ekstensi file kita menjadi .mjs dari .js
	Karena dengan menggunaakn ekstensi file .mjs kita
	memberi tahu node js bahwa kita mengguakan Es Module.

	Sebenarnya sebelum Es Module di release,
	Node Js menggunakan Common Js (function require ) untuk 
	mengimport module. Baik module local atau pun
	module third-party. Namun untuk sekarang lebih di sarankan
	untuk menggunakan Es Module (function import) dari pada
	Common Js (function require) untuk melakukan import module.
	Ketika kita menggunakan Common Js (function require) kita
	tidak perlu mengubah ekstensi file kita menjadi .mjs
	
*/
// Import module os menggunakan Es Module (Lebih di rekomendasikan)
import os from 'os';

// Menampilkan os kita (misal "darwin" untuk Mac Os)
console.info(os.platform());
// Menampilkan jumalh cpu kita
console.table(os.cpus());
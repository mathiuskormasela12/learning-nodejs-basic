
/*
	========== Debugger ==========

	Dalam Node Js untuk melakukan debugging kita
	bisa menggunakan fitur debugger di Node Js.
	Fitur debugger ini akan mempermudah kita
	untuk melakukan debugging di node js.

	Untuk menggunakan fitur debugger di Node Js,
	kita tidak bisa menjalankan file hanya dengan
	perintah node namaFile.mjs namun harus menggunakan
	perintah node inspect naamFile.mjs.

	Ketika melakukan debugging dengan debugger di Node Js
	kita harus mendefisinikan breakpoint nya menggunakan perintah
	debugger. Perintah debugger ini berguna untuk menghentikan
	pengeksekusiin kode program kita dan ketika kita ingin
	node js melanjutkan proses eksekusinya kita bisa menulis perintah
	cont atau c (continue) di terminal setelah menjalankan perinah 
	node inpsect namaFile.mjs.

	Ketika kita ingin mengecek value dari sebuah variable ketika
	melakukan debugging kita bisa menuliskan perintah
	watch("nama variable") di dalam terminal.

	Perintah-Perintah Debugger :
	1. cont, c => continue mengeksekusian code (sampai kode terakhir atau sampai ketemu keyword debugger selanjutnya)
	2. next, n => continue pengeksesuaian code line per line
	3. step, s => masuk kedalam function
	4. out, o => keluar dari dalam function
	5. pause => Pause running code
*/
function sayHello(name) {
	// Untuk menghentikan pengexekusian code programm untuk proses debugging
	debugger
	return `Hi my name is ${name}`;
}

const name = 'Mathius';
// Untuk menghentikan pengexekusian code programm untuk proses debugging
debugger
console.log(sayHello(name));
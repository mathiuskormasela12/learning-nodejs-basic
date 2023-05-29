/*
	========== Global Async ==========

	Ketika kita membuat file node js dengan menggunakan
	ekstensi .mjs ini memungkinkan kita untuk menjalankan
	sebuah promise dengan async await tanpa menggunakan keyword
	async. Hal ini dikarenakan jika file kita di buat
	dengan menggunakan .mjs, maka node js akan mendefinisikan 
	keyword async secara default sebagai global code.
	Oleh sebab itu, hal ini memungkinkan kita untuk memanggil
	promise tanpa keyword async. Hal ini di kenal juga sebagai
	top level await.
*/
const janji = new Promise((resolve) => resolve('Janji ditepati'));

const msg = await janji;
console.log(msg);
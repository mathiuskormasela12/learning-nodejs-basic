/*
	========= Cluster =========

	Cluster merupakan standard library node js
	yang dapat digunakan untuk menjalankan
	lebih dari satu process untuk aplikasi kita.
	Biasanya jumlah process nya akan sama dengan
	jumlah logical core dari komputer kita. 
	Ini sangat cocok ketika kita menggunakan cpu
	yg multi code, sehigga kita bisa mengutilitas  
	semua core dengan baik yaitu dimana kita
	akan menjalankan aplikasi node js kita sejumlah
	core cpu kita.

	Perbedaan Cluster dengan worker-thread adalah 
	jika kita menggunakan worker-thread kita hanya membuat
	aplikasi kita dalam hal ini beberapa file untuk
	di handle oleh lebih dari satu thread secara pararel
	namun tetap di dalam satu process, dimana akan cukup
	bermasalah jika process nya itu exit atau bermasalah maka
	aplikasi kita akan down. Sedangkan dengan cluster
	kita dapat menjalankan aplikasi node js kita (process)
	sejumlah cpu core komputer kita. Dan jika ada process
	yang exit maka kita dapat create process dengna mudah.
	Bahkan ketika process kita tidak exit, maka node js 
	akan secara pintat untuk berpindah-pindah process. 
	Jadi ketika kite mengakses aplkiaksi kita berkali-kali, 
	bisa saja itu di handle oleh process yg berbeda.

	Di dalam Cluster terdapat 2 jenis aplikasi yaitu :
	1. Primary
		 Aplikasi yang akan bertindak sebagai manager untuk para worker kita
	2. Worker
	   Aplikasi yang akan menjalankan tugas-tugas kita. Disini kode utama
		 aplikasi kita.
*/
import cluster from 'cluster';
import process from 'process';
import http from 'http';
import os from 'os';
import util from 'util';

// Ini Cluster Primary
if(cluster.isPrimary) {
	// Membuat cluster berdasarkan jumlah logical core cpu kita
	for(let index = 0; index < os.cpus().length; index++) {
		cluster.fork();
	}

	cluster.addListener('exit', (worker) => {
		console.log(util.format('Worker-%d is exit', worker.id));
		// Membuat worker lain ketiaka worker nya sudah exit
		// cluster.fork();
	})
}

// Ini Cluster Worker
// Karena kita sudah membuat beberapa cluster, otomatis node js akan
// secara bergantian menggunakan worker nya, jdi jika ada worker yg sibuk, maka 
// node js akan menggunaakn worker yg lain
if(cluster.isWorker) {
	const server = http.createServer((request, response) => {
		response.write(`This is from process ${process.pid}`);
		response.end();

		// Mematikan worker
		process.exit();
	});

	server.listen(3000);
}


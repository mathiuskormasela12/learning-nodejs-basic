/*
	========== Worker Threads ==========

	Worker Threads merupakan Node Js Standard Library
	untuk menggunakan thread ketike ingin mengeksekusi
	Javascript secara pararel. Worker Threads sangat cocok
	kita gunakna ketika kita membuat kode program yg membutuhkan
	proses CPU yg intensif, misal nye seperti proses enrkipsi
	atau kompresi yang berat.
*/
import {Worker, threadId} from 'worker_threads';

// Mendefinsikan 2 threads, dimana file worker.mjs akan di handle oleh 2 threads
const worker1 = new Worker('./worker.mjs');
const worker2 = new Worker('./worker.mjs');

// Listen message yang di kirim child worker 1
worker1.addListener('message', (message) => {
	console.info(`Thread-${threadId} received from worker 1 ${message}`);
});

// Listen message yang di kirim child worker 2
worker2.addListener('message', (message) => {
	console.log(`Thread-${threadId} received from worker 2 ${message}`);
});

// Mengirim message ke worker 1
worker1.postMessage(2);

// Mengirim message ke worker 2
worker2.postMessage(2);
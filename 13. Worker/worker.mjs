import {threadId, parentPort} from 'worker_threads';

// Meneambil message yg di kirim dari parent worker
parentPort.addListener('message', (message) => {
	for(let index = 0; index < message; index++) {
		console.info(`Thread-${threadId} send message : ${index}`);

		// Mengirim message ke parent worker
		parentPort.postMessage(index);
	}

	// Menuutup koneksi worker karena sudah selesai
	parentPort.close();
})
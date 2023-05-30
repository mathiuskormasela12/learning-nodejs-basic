/*
	========== DNS ==========

	DNS merupaakn module Node Js
	yang berguna untuk mendapatkan informasi
	mengenai DNS seperti IP address.

	Untuk menggunakan module dns ada 3 cara:
	1. Menggunakan Synchronous Process
	2. Menggunakan Asyncchronos Process (Callback)
	3. Menggunakan Asyncchronos Process (Promise)
*/

// Menggunaan Asynchronouse Callback
import dns from 'dns';

const url = 'https://sekolahkoding.com';

// Mendapatkan ip address suatu website
dns.lookup(url, (error, address, family) => {
	if(error) throw error;
	console.log('IP Address =', address);
	console.log('IP Family =', family);
})

// Menggunakan Promise
import dns2 from 'dns/promises';

const url2 = 'https://sekolahkoding.com';

// Mendapatkan ip address suatu website
const result = await dns2.lookup(url2);
console.log('IP Address =', result.address);
console.log('IP Family =', result.family);




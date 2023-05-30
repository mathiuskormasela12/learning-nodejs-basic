/*
	========== Net ==========

	Net merupakan Node Js Standard library
	yang beguna untuk membuat aplikasi client-server.
	Net ini merupakan turuan dari Event Emitter
	sehingga kita dapat melakukan listner. Selain
	itu Net juga merupaakn sebuah module yg menggunakan
	stream yang dapat read dan juga write
*/

// Membuat Server
import net from 'net';

const server = net.createServer((client) => {
	console.log('Client Connected');

	client.addListener('data', (data) => {
		console.log('Received data from client :', data.toString());
		// Return data dari client
		client.write(`Hello ${data.toString()}`);
	});
});

server.listen(3000, 'localhost');
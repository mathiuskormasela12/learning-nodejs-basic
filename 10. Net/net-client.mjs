import net from 'net';
// Membuat Client

const client = net.createConnection({
	port: 3000,
	host: 'localhost'
});

client.addListener('data', (data) => {
	// Menampilkna data dari server
	console.log('Received data from server', data.toString());
});

setInterval(() => {
	// Return data ke server
	client.write('Mathius\n\t')
}, 2000);
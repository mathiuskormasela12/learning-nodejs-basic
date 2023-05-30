/*
	========== HTTP Server ==========
	
	Dalam Standard Library Node Js ada terdapat
	module bernama HTTP yang dapat digunakan untuk
	membuat HTTP server. Dengan menggunakan HTTP server
	ini memungkinakan kita untuk membuat RESTful API dan 
	Website dengan Node Js. Namun untuk website dan RESTful API
	yg kompleks lebih di sarankan untuk menggunakan Framework
	atau Library seperti Express Js.
*/
import http from 'http';

// Membuat Http server
const server = http.createServer((request, response) => {

	if(request.url === '/api') {
		// Menampilkan method yg di gunakan (GET, POST, PUT, dst)
		console.log(request.method);
		// Menampilkan url
		console.log(request.url);

		if(request.method === 'POST') {
			// Menerima Request Body
			request.addListener('data', (data) => {
				// Set header
				response.setHeader('Content-Type', 'application/json');
				// Menulis response body
				response.write(data);
				// Mengirim response body
				response.end();
			})
		} else {
			// Set header
			response.setHeader('Content-Type', 'application/json');
			// Menulis response body
			response.write('Hello API');
				// Mengirim response body
			response.end();
		}
	} else {
		response.setHeader('Content-Type', 'application/json');
		response.write('Not Found');
		response.end();
	}
});

// Setting agar http servernya aktif di port 3000
server.listen(3000);
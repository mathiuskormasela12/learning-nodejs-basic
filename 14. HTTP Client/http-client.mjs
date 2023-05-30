/*
	========== HTTP Client ==========

	HTTP merupakan sebuah Node Js Starndard Library
	untuk melakukan HTTP. Salah satu fitur dari module HTTP
	adalah HTTP client yang dapat kita gunakan untuk 
	melakukan simulasi HTTP Request.
*/
import https from 'https';

const endpoint = 'https://eot4kdy22crdpoi.m.pipedream.net';

const request = https.request(endpoint, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
}, (response) => {
	// Untuk menerima response data
	response.addListener('data', (data) => {
		console.log('API Response : ', data.toString())
	})
});

const body = {
	"test": "event"
}

// Mengirim response body
request.write(JSON.stringify(body));
request.end();
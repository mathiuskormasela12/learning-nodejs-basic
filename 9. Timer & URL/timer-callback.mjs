/*
	Timer merupakan standard library di Node Js
	untuk mengimplementasi setTimeout, setInterval 
	& setImediate
*/

setTimeout(() => {
	console.log('It will be executed after 5 seconds');
}, 5000);

setInterval(() => {
	console.log(new Date());
}, 1000);

setImmediate(() => {
	console.log("It will be executed automatically");	
})
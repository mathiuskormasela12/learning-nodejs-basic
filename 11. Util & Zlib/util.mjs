/*
	========== Util ==========

	Util merupakan Node Js Standard Library
	yang berisi function-function utility.
	Salah satunya adalah function untuk parsing
	string atau untuk melakukan interpolasi.
*/
import util from 'util';

const fistName = 'Mathius';
const lastName = 'Kormasela';
const age = 20;

// Interpolasi String dan number (render string menggunakan %s dan render number menggunakan %d)
console.log(util.format('Hi my name is %s %s and %d years old', fistName, lastName, age));

const person = { fistName, lastName, age }

// Interpolasi object/json (render object/json menggunakan %j)
console.log(util.format('Person object : %j', person));
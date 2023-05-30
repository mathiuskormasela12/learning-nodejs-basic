import {setTimeout, setInterval, setImmediate} from 'timers/promises';

try {
	const result = await setTimeout(5000, '5 seconds');
	console.log('It will be printed after', result);
} catch (err) {
	console.error(err);
}

try {
	const result = await setImmediate('It will be executed automatically');
	console.log(result);
} catch(err) {
	console.error(err);
}

try {
	for await(const _ of setInterval(1000, '')) {
		console.log(new Date());
	}
} catch(err) {
	console.error(err);
}

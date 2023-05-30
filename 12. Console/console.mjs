/*
	========== Console ==========

	Console merupakan Global Javascript Standard Library
	yang sudah sangat sering kita gunakan. Namun
	kita dapat memodifikasi message yang akan di tampilkan
	bukannua di tampillkan di terminal namun juga di file.
*/
import {Console} from 'console';
import fs from 'fs';

const file = fs.createWriteStream('app.log');

const log = new Console({
	stdout: file,
	stderr: file
});

log.info('Hello world');
log.table({
 username: 'admin',
 password: 'admin'
})
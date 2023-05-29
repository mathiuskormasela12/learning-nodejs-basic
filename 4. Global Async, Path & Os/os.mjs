/*
	========== Os ==========

	Module os berguna untuk mendapatkan informasi 
	mengenai os yang sedang kita gunakan. 
	(komputer yang menajalankna file node js)
*/
import os from 'os';

// Informasi mengenai platform system operasi kita (contoh "darwin" maksudnya adalah Mac Os)
console.log('Platform sistem operasi kita =>', os.platform());

// Informasi mengenai jumlah sisah ram laptop kita di dalam byte
console.log('Free Ram kita di dalam byte =>', os.freemem());

// Infomrasi mengenai jumlah ram laptop kita dalam byte
console.log('Total Ram kita di dalam byte =>', os.totalmem());

// Informasi mengenai arsitektur OS kita misal x64 atau x86
console.log('Arsitektur os kita =>', os.arch());

// Informasi mengenai sudah berapa detik os/laptop kita aktif
console.log('Up time laptop kita =>', os.uptime());

// Informasi mengenai network interfaces kita
console.table(os.networkInterfaces())

// Informasi mengenai cpu/process kita
console.table(os.cpus())

// Informasi mengenai home directory os kita
console.log('Home Directory Os kita =>', os.homedir());

// Informasi mengenai host name os kita
console.log('Host Name os kita =>', os.hostname())
import process from 'process';

/*
	========== Report ==========

	Report merupakan sebuah fitur dalam node js
	yang berguna untuk mengenerate error report
	ketika terjadi sesuatu error pada aplikasi node js.

	Ada 2 cara untuk membuat report :
	1. Dengan menambahkan argument saat menjalakan file node js
	   contoh : 
		 node --report-uncaught-exception --report-on-signal \ --report-on-fatalerror namaFile.mjs
	2. Dengan menambahkan setup di code kita
		 contoh :
		 process.report.reportOnFatalError = true; 
		 process.report.reportOnSignal = true;
		 process.report.reportOnUncaughtException = true;
		 process.report.filename = 'error-report.json';
*/

// Set agar jika ada fatal error maka harus di report (defaultnya false)
process.report.reportOnFatalError = true; 

// Set agar jika ada on signal error hrus di report (defaultnya false)
process.report.reportOnSignal = true;

// Set agar jika ada exceptoin yg gk ke tangkap maka harus di repeort (defaultnya false)
process.report.reportOnUncaughtException = true;

// Set nama file reportnya
process.report.filename = 'error-report.json';

function sampleError() {
	throw new Error('Ups');
}

sampleError();
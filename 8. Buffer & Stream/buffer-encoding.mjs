/*
	Buffer dalam Node Js juga memungkinkan kita
	untuk melakukan encoding dari data yang sudah pernah
	di encode menjadi encoding lain. Contohnya
	misal kita punya sebuah string utf8 yg sudah di convert  
	string menjadi base64. Dengan Buffer kita dapat mengconvert 
	stringnya menjadi encoding lain, misal menjadi encoding hex.
*/

// Convert string dan mendefinisikan stringnya ini encodingnya adalah utf8
const bufferedText = Buffer.from('Belajar Node Js', 'utf8');

// Convert buffer menjadi string base64
console.log(bufferedText.toString('base64'));

// Convert buffer menjadi string hex
console.log(bufferedText.toString('hex'));

// Convert buffer tanpe mendefinisikan encoding nya 
// (otomatis akan memakai encoding yg kita definisikan 
// ketika kira converting string nya menjadi buffer, 
// dalam hal ini pada line 11)
console.log(bufferedText.toString());
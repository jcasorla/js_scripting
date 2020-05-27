require('shelljs/global');

let files = ls('../fileManipulation/*.js');

for(let i=0; i<files.length; i++){
	console.log(files[i]);
}

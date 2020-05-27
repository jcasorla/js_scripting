
let arg = process.argv.slice('2');
require('shelljs/global');
const fs = require('fs');

//this is one way
if(test('-d', arg[0])){
	echo('directory exists');
}

//this is another way

console.log(arg);
if(fs.existsSync(arg[0])){
	echo('dir exists again');
}else{
	echo('does not');
}

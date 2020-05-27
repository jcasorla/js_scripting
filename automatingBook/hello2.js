
const args = process.argv.slice(2);
const [name] = args;

if(!name){
	console.error('Please enter a name!');
	process.exit(0);
}

console.log('Good day to you, ' + name);

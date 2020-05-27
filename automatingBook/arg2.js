const args = process.argv.slice(2);
const [name] = args;

if(!name){
	console.error('please enter name as argument');
	process.exit(0);
}

console.log('buenos dias ' + name);


process.stdout.write('Type something hit enter: \n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', ()=>{
	const chunk = process.stdin.read();
	
	if(chunk){
		process.stdout.write('you wrote ' + chunk);
		process.exit(0);
	}
});

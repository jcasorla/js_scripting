const program = require('commander');

program
  .option('-p, --print', 'print')
  .option('-q, --quit', 'quit')
  .option('-s, --size <integer>', 'size')
	.parse(process.argv);
 
let print = program.print;
let quit = program.quit;
let size = parseInt(program.size);

if(!print){
	console.error('print argument is required');
	program.help();
}

if(quit){
	process.exit(0);
}

console.log(size);

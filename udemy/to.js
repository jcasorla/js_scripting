require('shelljs/global');

let file =cat('test.txt');

echo(file);

cat('test.txt').to('test2.txt'); 

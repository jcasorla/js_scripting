require('shelljs/global');

let version = exec('node --version', {silent:true}).stdout;
echo(version);
exit(0);

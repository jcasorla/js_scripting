const fs =  require('fs');

let arg = process.argv.slice(2);

let file= arg[0];

if(!fs.existsSync(file)){
        console.error("file does not exist " + xmlfile);
        process.exit(1);
}

let filep = fs.readFileSync(file, 'utf8');

let count =  filep.length;

console.log(count);


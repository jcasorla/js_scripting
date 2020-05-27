const fs =  require('fs');
const path = require('path');
const prettyData = require('pretty-data').pd;

let arg = process.argv.slice(2);
//console.log(arg);

let xmlfile= path.join(process.env.PWD, arg[0]);
//console.log(xmlfile);

if(!fs.existsSync(xmlfile)){
	console.error("file does not exist " + xmlfile);
	process.exit(1);
}

let xml = fs.readFileSync(xmlfile, 'utf8');

let prettyxml =  prettyData.xml(xml);

console.log(prettyxml);

const fs =  require('fs');
const prettyData = require('pretty-data').pd;

let arg = process.argv.slice(2);

let xmlfile= arg[0];

if(!fs.existsSync(xmlfile)){
	console.error("file does not exist " + xmlfile);
	process.exit(1);
}

let xml = fs.readFileSync(xmlfile, 'utf8');

let prettyxml =  prettyData.xml(xml);

console.log(prettyxml);

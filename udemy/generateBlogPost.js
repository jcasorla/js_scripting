const moment = require("moment");
const userName = process.env.USER;
const fs = require('fs');

let date = moment().format("YYYY-MM-DD-HH-mm");

let header ='--Date ' + date + ' --User ' + userName + ' --Title:';


let fileName =date + '.txt';
if(fs.existsSync(fileName)){
	console.error('Error - file exists!');
	process.exit(1);
}else{

	fs.writeFile(fileName, header, function (err){
        if(err){
                console.log('error');
		process.exit(1);
        }
        console.log('saved');
	});

}


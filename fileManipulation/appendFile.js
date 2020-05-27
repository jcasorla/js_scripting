const fs = require('fs');

fs.appendFile('test.txt', 'hello again', function (err){
	if(err){
		console.log('error');
	}
	console.log('updated');
});

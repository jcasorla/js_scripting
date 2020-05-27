const fs = require('fs');

fs.writeFile('test.txt', 'hello', function (err){
	if(err){
		console.log('error');
	}
	console.log('saved');
});

var fs = require('fs');

fs.rename('test.txt', 'myrenamedfile.txt', function (err) {
  if (err) console.log('error ' + err);
  console.log('File Renamed!');
}); 

require('shelljs/global');

var csvData = cat('tabla.csv');
let rows = csvData.split('\n').slice(1);

let sum=0;
rows.forEach(row=>{
	let arr=row.split(',');
	//echo(parseFloat(arr[4]));
	sum+=parseFloat(arr[4]);
	
});
let count = rows.length;
echo ('Average: '+ (sum/count));

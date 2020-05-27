
function reverseNum(n){
	let str = n.toString();
	let arr =str.split('')
	for(let i=0; i<arr.length/2; i++){
		let temp = arr[i];
		arr[i] = arr[arr.length - i -1];
		arr[arr.length -i - 1] = temp;
	}
	return arr.join('');
}

console.log(reverseNum(1234));

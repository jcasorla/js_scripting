const prompt = require('prompt');

prompt.start();

prompt.get(['value'], function (err, result) {
    if (err) { return onErr(err); }
	let arr =[1,2,3,4,5,6,7];
	console.log(binarySearch(result.value,arr));
});

function onErr(err) {
    console.log(err);
    return 1;
}

function binarySearch(value,arr){

    let high = arr.length -1;
    let low =0;
    let mid =0;

    while(low <=high){
        mid = Math.floor((high + low) / 2);

        if(arr[mid] == value){
            return arr[mid]
        }
        else if(value > arr[mid]){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return false;
}


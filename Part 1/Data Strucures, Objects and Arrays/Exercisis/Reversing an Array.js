function reverseArray(arr){
    var invArr = [];
    for(var i =arr.length-1;i>=0;i=i-1)
        invArr.push(arr[i]);
    return invArr;
}

function reverseArrayInPlace(arr){
    var temp = 0;
    for(var i = 0;i<Math.floor(arr.length/2);i++){
        temp = arr[arr.length-(i + 1)];
        arr[arr.length-(i + 1)] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

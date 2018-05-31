function range(start,end,step){
    var arr = [];
    if(arguments.length == 3)
        switch(step > 0){
            case true:
                for(var i = start;i<=end;i+=step)
                    arr.push(i);
                break;
            case false:
                for(var i = start;i>=end;i+=step)
                    arr.push(i);
                break;
            default:
                return "Can not increment by 0";
        }    
    else
        for(var i = start;i<=end;i++)
            arr.push(i);    
    return arr;
}

function sum(arr){
    var sum = 0;
    for(var i = 0; i<arr.length;i++)
        sum += arr[i];
    return sum;
}

console.log(sum(range(1,10)));
console.log(range(1,10,2));
console.log(range(5,2,-1));
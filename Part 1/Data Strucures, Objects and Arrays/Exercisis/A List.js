function arrayToList(arr){
    var list = null;
    for(i=arr.length-1;i>=0;i--){
        list = {
            value: arr[i],
            rest: list
        }
    }
    return list;
}

function listToArray(lis){
    var arr = [];
    var incRest = lis;
    while(incRest!=null){
        arr.push(incRest.value)
        incRest=incRest.rest;
    }
    return arr;
}

var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

function flatten(array){
    return array.reduce(function(accumulator,currentValue){
        if(currentValue instanceof Array)
            return accumulator.concat(flatten(currentValue));
        else
            return accumulator.concat(currentValue);
    },[]);
}

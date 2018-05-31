function countProperties(obj){
    var i =0;
    for(var prop in obj){
        if(obj.hasOwnProperty(prop))
            i++
    }
    return i;
}

function isArrayEqual(x,y){
    if(Array.isArray(x) && Array.isArray(y)){
        if(x.length === y.length){
            for(var i = 0;i<x.length;i++){
                if(!deepEqual(x[i],y[i]))
                    return false;
            }
            return true;
        }
        else
            return false;
    }
    else
        return false;
}

function isNull(x,y){
    if(x===null && y ===null){
        return true;
    }
    else 
        return false;
}

function isObject(x,y){
    if(typeof x === "object" && typeof y === "object"){
        if(isNull(x,y)){
            return true;
        }
        else if(isArrayEqual(x,y)){
            return true;
        }
        else if(countProperties(x)===countProperties(y)){
            if(JSON.stringify(x)===JSON.stringify(y))
                return true;
            else
                return false;
        }
        else
            return false;
    }
    else 
        return false;
}

function deepEqual(x,y){
    if(isObject(x,y)){
        return true;
    }
    else if(x===y)
        return true;
    else 
        return false;
}

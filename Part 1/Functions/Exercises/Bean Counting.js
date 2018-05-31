function countBs(str){
    return countChar(str,'B');
}

function countChar(str,ch){
    var j=0;
    for(var i=0;i<str.length;i++)
        if(str.charAt(i)==ch)
            j++;
    return j;
}

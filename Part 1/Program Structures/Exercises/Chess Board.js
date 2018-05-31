var size = 8;
var str = new String();
for(var i = 0;i < size;i++){
    for(var j =0;j < size;j++)
        switch(i%2){
            case 0:
                if(j%2==0)
                    str = str + "#";
                else
                    str = str + " ";
                break;
            case 1:
                if(j%2==0)
                    str = str + " ";
                else
                    str = str + "#";
                break;
        }
    str = str + '\n';
}
console.log(str);

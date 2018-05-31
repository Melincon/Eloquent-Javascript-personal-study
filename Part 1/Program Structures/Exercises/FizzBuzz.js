for(var i =1;i<=100;i++){
    switch(i%3){
        case 0:
            if(i%5==0)
                console.log("FizzBuzz");
            else
                console.log("Fizz");
            break;
        default:
            if(i%5 == 0)
                console.log("Buzz");
            else   
                console.log(i);
    }    
}


    //Defining a Funciton

var square = function(x){
    return x*x;
};
console.log(square(12));    //144

var makeNoise = function() {
    console.log("Pling!");
};

makeNoise();    //"Ping!"

var power = function(base, exponant){
    var result = 1;
    for (var count = 0; count < exponant; count++)
        result *= base;
    return result;
};

console.log(power(2,10));   //1024

    //Parameters and Scopes

var x = "outside";

var f1 = function(){
    var x = "inside f1";
};
f1();
console.log(x);     //outside

var f2 = function() {
    x = "inside f2";
};
f2();
console.log(x);     //inside f2

    //nested scopes

var landscape = function(){
    var result = "";
    var flat = function(size){
        for (var count = 0; count < size; count++)
            result += "_";
};
var mountain = function(size){
    result += "/";
    for(var count = 0; count < size; count++)
        result += "'";
    result += "\\";
};

flat(3);
mountain(4);
flat(6);
mountain(1);
flat(1);
return result;
};

console.log(landscape());

var somehting = 1;
{
    var somehting = 2;
    //do stuff with variable somehting...
}
//outisde o fth block again

    //functions as values

var launchMissiles = function(value){
    missileSystem.launch("now");
};
if(safemode)
    launchMissiles = function(value) {/* do nothing */};

    //Declaration Notation

function square(x){
    return x*x;
}

console.log("The future says:", future());

function future(){
    return "We STILL have no flying cars.";
}

function example(){
    function a() {} //okay
    if (something) {
        function b() {} //Danger!
    }
}

    //The Call Stack

function greet(who){
    console.log("Hello " + who);
}
greet("Harry");
console.log("bye");

function chicken(){
    return egg();
}
function egg(){
    return chicken();
}
console.log(chicken() + "came first");

    //Optional Arguments

alert("Hello","Good Evening","How do you do?");

function power(base,exponant){
    if(exponant == undefined)
        exponant =2;
    var result = 1;
    for(var count = 0;count < exponant; count++)
        result *=base;
        return result;
}

console.log(power(4));  //16
console.log(power(4,3));    //64

console.log("R",2,"D",2);

    //Closure

function wrapvalue(n){
    var localVariable = n;
    return function() {return localVariable;};
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
Console.log(wrap1());   //1
console.log(wrap2());   //2

function multiplier(factor){
    return function(number){
        return number + factor;
    };
}

var twice = multiplier(2);
console.log(twice(5));  //10

    //Recursion

function power(base, exponant){
    if(exponent == 0)
        return 1;
    else
        return base * power(base,exponant-1);
}

console.log(power(2,3));

function findSolution(target){
    function find(start,history){
        if(start == target)
            return history;
        else if (start > target)
            return null;
        else return find(start + 5, "(" + history + " + 5)") ||
                    find(start * 3, "(" + history + " * 3)");
    }
    return find(1,"1");
}

console.log(findSolution(24));  //(((1 * 3) +5) * 3)

    //Growing Functions

function printFarmInventory(cows, chickens){
    var cowString = String(cows);
    while(cowString,length <3)
        cowString = "0" + cowString;
    console.log(cowString + " Cows");
    var chickenString = String(chickens);
    while (chickenString.length < 3)
        chickenString = "0" + chickenString;
    console.log(chickenString + " Chickens");
}
printFarmInventory(7,11);

function printZeroPaddedWithLabel(number, label) {
    var numberString = String(number);
    while (numberString.length < 3)
        numberString = "0" +numberString;
    console.log(numberString + " " + label);
}
function printFarmInventory(cows, chickens, pigs){
    printZeroPaddedWithLabel(cows,"Cows");
    printZeroPaddedWithLabel(chickens,"chickens");
    printZeroPaddedWithLabel(pigs,"Pigs");
}

printFarmInventory(7,11,13);

function zeroPad(number, width){
    var string = String(number);
    while (string.length < width)
        string = "0" + string;
    return string;
}

function printFarmInventory(cows,chickens,pigs){
    console.log(zeroPad(cows,3) + " Cows");
    console.log(zeroPad(chickens, 3) + " Chickens");
    console.log(zeroPad(pigs, 3 ) + " Pigs");
}

printFarmInventory(7,16,3);

var f = function(a){
    console.log(a + 2);
};

function g(a,b){
    return a*b*3.5;
}
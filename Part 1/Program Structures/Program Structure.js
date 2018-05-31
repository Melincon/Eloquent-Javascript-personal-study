    //Variables

var caught = 5 * 5;

var ten = 10;
console.log(ten * ten);     //100

var mood = "light";
console.log(mood);  //light

mood = "dark";
console.log(mood);  //dark

var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);    //105

var one = 1, two = 2;
console.log(one + two);     //3

alert("Good Morning!");

var x = 30;
console.log("the value of x is", x);    //the value of x is 30

console.log(Math.max(2,4)); //4

console.log(Math.min(2,4)+100); //102

confirm("shall we, then?");

prompt("Tell me everuthing you know.", "...");

var theNumber = Number(prompt("Pick a number", ""));
alert("your number is the square root of " + theNumber * theNumber);

var theNumber = prompt("Pick a number", "");
if(!isNaN(theNumber))
    alert("Your number is the square root of " + theNumber * theNumber);

var theNumber = Number(prompt("Pick a number", ""));
if(!isNaN(theNumber))
    alert("Your number is the square root of " + theNumber*theNumber);
else
    alert("Hey. Why didn't you gibe me a number?");

var num = Number(prompt("pick a number", "0"));

if(num<10)
    alert("small");
else if (num<100)
    alert("Medium");
else
    alert("Large");

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

var number = 0;
while(number<=12){
    console.log(number);
    number = number+2;
}

var result = 1;
for(var counter = 0;counter < 10;counter = counter +10)
    result = result*2;
console.log(result);    //1024

for(var current = 20; ; current++){
    if(current % 7 == 0)
    break;
}
console.log(current);  //21

for(varnumber = 0; number <= 12; number +=2)
    console.log(number);

if(variable == "value1") action1();
else if (variable == "value2") action2();
else if (variable == "value3") action3();
else defaultAction();

switch (prompt("What is the weather like?")){
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unkown weather type!");
        break;
}

var listOfNumbers = [1,3,5,7,11];
console.log(listOfNumbers[1]);      //3
console.log(listOfNumbers[1 - 1]);    //1

//null.length;    //type error

var doh = "Doh";
console.log(typeof doh.toUpperCase);    //function
console.log(doh.toUpperCase());     //DOH

var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);      //["Mack","the","Knife"]
console.log(mack.join(" "));    //Mack the Knife
console.log(mack.pop());    //Knife
console.log(mack);  //["Mack","the"]

var day1= {
    squirrel: false,
    events: ["work","touched tree","pizza","running","television"]
};

console.log(day1.squirrel);     //false
console.log(day1.wolf);         //undefined
day1.wolf = false;
console.log(day1.wolf);     //false

var descriptions = {
    work: "went to work",
    "touched tree": "touched a tree"
};

var anObject = {left: 1, right: 2};
console.log(anObject);  //1
delete anObject.left
console.log(anObject.left);     //undefined
console.log("left" in anObject);    //false
console.log("right" in anObject);   //true

var journal = [
    { events: ["work", "touched tree", "pizza", "running","television"],
    squirrel: false},
    {events: ["work","ice cream","cauliflower","lasagna","touched trr","brushed teeth"],
    squirrel: false},
    {events: ["weekend","cycling","break","peanuts","beer"],
    squirrel: true}
];

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);    //false
console.log(object1 == object3);    //true

object1.value = 15;
console.log(object2.value);     //15
console.log(object3.value);     //10

var journal = [];

function addEntry(events, didITurnIntoASquirrel){
    journal.push({
        events: events,
        squirrel: didITurnIntoASquirrel
    });
}

addEntry(["work","touched a tree","pizza","running","telivision"],false);
addEntry(["work","icecream","cauliflower","lasagna","touched a tree","brushed teeth"],false);
addEntry(["weekend","cycling","break","peanuts","beer"],true);

function phi(table) {
    return (table[3]*table[0]-table[2]*table[1]/
        Math.sqrt((table[2]+table[3])*
        (table[0]+table[1])*
        (table[1]+table[3])*
        (table[0]+table[2])));
}

console.log(phi([76,9,4,1]));

function hasEvent(event,entry){
    return entry.events.indexOf(event) != -1;
}

function tableFor(event,journal){
    var table = [0,0,0,0];
    for(var i = 0; i <journal.length; i++){
        var entry = journal[i], index =0;
        if(hasEvent(event, entry)) 
            index+=1;
        if(entry.squirrel) 
            index+=2;
        table[index] +=1;
    }
    return table;
}

var map = {};
function storePhi(event,phi){
    map[event] = phi
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
console.log(map["touched tree"]);

for(var event in map)
    console.log("The correlation for '" + event + "' is " + map[event]);

function gatherCorrelations(journal){
    var phis = {};
    for(var entry = 0; entry < journal.length; entry++){
        var events = journal[entry].events;
        for (var i = 0;i < events.length;i++){
            var event = events[i];
            if(!(event in phis))
                phis[event] = phi(tableFor(event,journal));
        }
    }
    return phis;
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);

for(var event in correlations)
    console.log(event + ": " + correlations[event]);

for(var event in correlations){
    var correlation = correlations[event];
    if(correlation> 0.1 || correlation < -0.1)
        console.log(event + ": " + correlation);
}

for(var i = 0; i < JOURNAL.length; i++){
    var entry = JOURNAL[i];
    if(hasEvent("peanuts", entry) &&
        !hasEvent("brushed teeth", entry))
        entry.events.push("peanut teeth");
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));

var todoList = [];
function rememberTo(task){
    todoList.push(task);
}
function whatIsNext(){
    return todoList.shift();
}
function urgentlyRememberTo(task){
    todoList.unshift(task);
}

console.log([1,2,3,2,1].indexOf(2));    //1
console.log([1,2,3,2,1].lastIndexOf(2));    //3

console.log([0,1,2,3,4].slice(2,4));    //[2,3]
console.log([0,1,2,3,4].slice(2));      //[2,3,4]

function remove(array,index){
    return array.slice(0, index).concat(array.slice(index +1));
}

console.log(remove(["a","b","c","d","e"],2));   //["A","b","d","e"]

var myString = "Fido";
myString.myProperty = "value";
console.log(myString.myProperty);   //undefined

console.log("coconuts".slice(4,7)); //"nut"
console.log("coconut".indexOf("u"));    //5

console.log("one two three",indexOf("ee")); //11'

console.log("    okay \n".trim());      //okay

var string = "abs";
console.log(string.length);     //3
console.log(string.charAt(0))   //a
console.log(string[1]);     //b

function noArguments(){}
noArguments(1,2,3);     //this is okay

function threeArguments(a,b,c){}
threeArguments();

function argumentCounter(){
    console.log("you have me", arguments.length,"arguments.");
}
argumentCounter("straw man", "tautology","arguments");  //you gave me 3 arguments

addEntry(["work","touched tree","pizza","running","television"],false);

function addEntry(squirrel){
    var entry = {events: [], squirrel: squirrel};
    for(var i = 1; i< arguments.length; i++)
        entry.events.push(arguments[i]);
    journal.push(entry);
}
addEntry(true, "work","touched tree","pizza","running","television");

function randomPointOnCircle(radius){
    var angle = Math.random() * 2 * Math.pi;
    return {x: radius * Math.cos(angle),
            y: radies * Math.sin(angle)};
}
console.log(random.PointOnCircle(2));

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.floor(Math.random() * 10));

var myVar = 10;
console.log("myVar" in window);     //true
console.log(window.myVar);      //10


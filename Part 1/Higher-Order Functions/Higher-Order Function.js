var total =0, count = 1;
while(count<=10){
    total += count;
    count += 1;
}

console.log(total);

//console.log(sum(rang(1,10)));

var array = [1,2,3];
for(var i = 0; i < array.length;i++){
    var current = array[i];
    console.log(current);
}

function logEach(array){
    for(var i = 0; i < array.length; i++)
        console.log(array[i]);
}

function forEach(array, action){
    for(var i = 0;i < array.length; i++)
        action(array[i]);
}

forEach(["this","that"],console.log);

var numbers = [1,2,3,4,5], sum = 0;
forEach(numbers,function(number){
    sum += number;
});

console.log(sum);

function gatherCorrelations(journal){
    var phis = {};
    for(var entry = 0; entry < journal.length; entry++){
        var events = journal[entry].events;
        for(var i = 0;i< events.length;i++){
            var event = events[i];
            if(!(event in phis))
                phis[event] = phi(tableFor(event,journal));
        }
    }
    return phis;
}

function gatherCorrelations(journal){
    var phis  = {};
    journal.forEach(function(entry) {
        entry.events.forEach(function(event) {
            if(!(event in phis))
                phis[event] = phis(tableFor(event,journal));
        });
    });
    return phis;
}

function greaterThan(n){
    return function(m) {return m>n;};
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

function noisy(f){
    return function(arg){
        console.log("calling with", arg)
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    };
}

noisy(Boolean)(0);

function unless(test, then){
    if(!test) then();
}

function repeat(times,body){
    for(var i = 0;i < times; i++) body(i);
}

repeat(3,function(n){
    unless(n % 2, function(){
        console.log(n,"is even");
    });
});

function transposingWrapping(f){
    return function() {
        return f.apply(null, arguments);
    }
}

var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
console.log(JSON.parse(string).born);

var ancestry = JSON.parse(require("F:/Folders/Programming/Eloquent Javascipt" +
    "/Part 1/Higher-Order Functions/Data/ancestry.js"));

console.log(ancestry.length);

function filter(array,test){
    var passed = [];
    for (var i = 0;i < array.length;i++){
        if(test(array[i]))
            passed.push(array[i]);
    }
    return passed;
}

console.log(filter(ancestry,function(person) {
    return (person.born > 1900 && person.born < 1925);
}));

console.log(ancestry.filter(function(person){
    return person.father == "Carel Haverbeke";
}));

function map(array,transform){
    var mapped = [];
    for(var i = 0; i < array.length;i++)
        mapped.push(transform(array[i]));
    return mapped;
}

var overNinety = ancestry.filter(function(person){
    return person.died - person.born > 90;
});

console.log(map(overNinety, function(person){
    return person.name;
}));

function reduce(array,combine,start){
    var current = start;
    for(var i = 0; i < array.length;i++)
        current = combine(current,array[i]);
    return current;
}

console.log(reduce([1,2,3,4],function(a,b){
    return a + b;
}, 0));

console.log(ancestry.reduce(function(min,cur){
    if(cur.born < min.born) return cur;
    else return min;
}));

var min = ancestry[0];
for(var i = 1; i < ancestry.length; i++){
    var cur = ancestry[i];
    if(cur.born < min.born)
        min= cur;
}
console.log(min);

function average(array){
    function plus(a,b) {return a + b}
    return array.reduce(plus) / array.length;
}

function age(p) {return p.died - p.born;}
function male(p) {return p.sex == "m";}
function female(p) {return p.sex == "f";}

console.log(average(ancestry.filter(male).map(age)));
console.log(average(ancestry.filter(female).map(age)));

var byName = {};
ancestry.forEach(function(person){
    byName[person.name] = person;
});

console.log(byName["Philibert Haverbeke"]);

function reduceAncestors(person,f,defaultValue){
    function valueFor(person){
        if(person == null)
            return defaultValue;
        else
            return f(person, valueFor(byName[person.mother]),
                             valueFor(byName[person.father]));
    }
    return valueFor(person);
}

function sharedDNA(person,fromMother,fromFather){
    if(person.name == "Pauwels van Haverbeke")
        return 1;
    else    
        return (fromMother + fromFather) / 2;
}

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph,sharedDNA,0)/4);

function countAncestors(person,test){
    function combine(person,fromMother,fromFather){
        var thisOneCounts = test(person);
        return fromMother + fromFather + (thisOneCounts ? 1:0);
    }
    return reduceAncestors(person,combine,0);
}
function longLivingPercentage(person){
    var all = countAncestors(person,function(person){
        return true;
    });
    var longLiving = countAncestors(person, function(person){
        return (person.died - person.born) >= 70;
    });
    return longLiving / all;
}
console.log(longLivingPercentage(byName["Emile Haverbeke"]));

var theSet = ["Carel Haverbeke", "Maria van Brussel","Donald Duck"];
function isInSet(set,person){
    return set.indexOf(person.name) > -1;
}
console.log(ancestry.filter(function(person){
    return isInSet(theSet,person);
}));
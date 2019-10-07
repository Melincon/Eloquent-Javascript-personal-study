//Array of objects
var ancestry = JSON.parse(require("F:/Folders/Programming/Eloquent Javascipt" +
"/Part 1/Higher-Order Functions/Data/ancestry.js"));

//creates an object referencing person as objects by their name,
//from the unreduced array of objects
var byName = {};
ancestry.forEach(function(person){
    byName[person.name] = person;
});

//Reduces the array of objects by reference to each objects "mother" value
function withKnownMothers(array){
    return array.reduce(function(accumulator,currentValue){
        if(currentValue.mother===null)
            return accumulator;
        else
            return accumulator.concat(currentValue);
    },[]);
}

//Assignment using the reducing funtion
var reducedAncestry = withKnownMothers(ancestry);

//creates an object referencing person as objects by their name,
//from the reduced array of objects
var reducedAncestryByName = {};
reducedAncestry.forEach(function(person){
    reducedAncestryByName[person.name] = person;
});

//function to compute the average of two values
function average(array){
    function plus(a,b){return a+b}
    return array.reduce(plus)/array.length;
}

//function to compute the difference of an object and its mother
function ageDifference(person){
    var mother = byName[person.mother];
    return person.born-mother.born;
}

//creates an array of age differences between an object and its mother,
//first checks to make sure that the mother is included inside the ancestry
//array
var ageDifferences = [];
reducedAncestry.forEach(function(person){
    if(ancestry.includes(byName[person.mother]))
        ageDifferences.push(ageDifference(person));
});

//output final answer for average age between mother and son
console.log(average(ageDifferences));

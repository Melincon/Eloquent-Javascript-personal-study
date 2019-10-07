/*when we look up all the people in our data set that lived more than
90 years, only the latest generation in the data came out. Let's
take a closer look at that phenomenon.
    compute and output the average age of the people in the acestry
data set per centure. A person is assighned to a century by taking
their year of death. dividing it by 100, and rounding it up, as
in Math.cell(person.died/100).
    For bonus points, write a function groupBy that abstracts the
grouping operation. It should accept as arguments an array and a 
function that computes the group for an element in the array and return
an object that maps group names to arrays of group numbers.*/

//Array of objects
var ancestry = JSON.parse(require("F:/Folders/Programming/Eloquent Javascipt" +
    "/Part 1/Higher-Order Functions/Data/ancestry.js"));

//creates an object that references people in ancestry by their name
var byName = {};
ancestry.forEach(function(person){
    byName[person.name] = person;
});

//function to group persons by century
function groupCompute(person){
    return Math.cell(person.died/100);
}

//return an object that maps group names to arrays of group numbers
function groupBy(array,groupCompute){
    return array.reduce(function(accumulator,currentValue){
        
    },[]);
}

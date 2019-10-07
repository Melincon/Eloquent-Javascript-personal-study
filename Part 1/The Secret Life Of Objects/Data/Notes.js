var MOUNTAINS = require("F:/Folders/Programming/Eloquent Javascipt/Part 1/The Secret Life Of Objects/Data/mountains.js")

var rabbit = {};
rabbit.speak = function(line) {
    console.log("The rabbit says '" + line + "'");
};
rabbit.speak("I'm alive."); //The rabbit says 'I'm alive.'

function speak(line){
    console.log("The " + this.type + " rabbit says '" +
        line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
    "how late it's getting!");
    //Thge white rabbit says 'Oh my ears and whiskers, how late it's getting!'
fatRabbit.speak("I could sure use a carrot right now.");
    //The fat rabbit says 'I could sure use a carrot right now.'

speak.apply(fatRabbit, ["Burp!"]);
    //The fat rabbit says 'Burp!'
speak.call({type: "old"}, "oh my.");
    //The old rabbit says 'oh my.'

var empty = {};
console.log(empty.toString);
    //function toString(){...}
console.log(empty.toString());
    //[object Object]

console.log(Object.getPrototypeOf({}) == Object.prototype);
    //true
console.log(Object.getPrototypeOf(Object.prototype));
    //null

console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
    //true
console.log(Object.getPrototypeOf([]) == Array.prototype);
    //true

var protoRabbit = {
    speak: function(line){
        console.log("The " + this.type + " rabbit says '" + line + "'");
    }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!");
    //The killer rabbit says 'SKREEE!'

function Rabbit(type){
    this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);
    //black

Rabbit.prototype.speak = function(line){
    console.log("The " + this.type + " rabbit says '" + line + "'");
};
blackRabbit.speak("Doom...");
    //The black rabbit says 'Doom...'

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
    //small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
    //long, sharp, and bloody
console.log(blackRabbit.teeth);
    //small
console.log(Rabbit.prototype.teeth);
    //small

console.log(Array.prototype.toString == Object.prototype.toString);
    //false
console.log([1,2].toString());
    //1,2

console.log(Object.prototype.toString.call([1,2]));
    //[object Array]

Rabbit.prototype.dance = function(){
    console.log("The " + this.type + " rabbit dances a jig.");
};
killerRabbit.dance();
    //The killer rabbit dances a jig.

var map = {};
function storePhi(event, phi){
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

Object.prototype.nonsense = "hi";
for(var name in map)
    console.log(name);
    //pizza
    //touched tree
    //nonsense
console.log("nonsense" in map);
    //true
console.log("toString" in map);
    //true

    //Delete the problematic property again
delete Object.prototype.nonsense;

Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "hi"});
for(var name in map)
    console.log(name);
    //pizza
    //touched tree
console.log(map.hiddenNonsense);
    //hi

console.log(map.hasOwnProperty("toString"));
    //false

for(var name in map){
    if (map.hasOwnProperty(name)) {
        //... this is an own property
    }
}

var map = Object.create(null);
map["pizza"] = 0.069;
console.log("toString" in map);
    //false
console.log("pizza" in map);
    //true

function rowHeights(rows){
    return rows.map(function(row){
        return row.reduce(function(max,cell){
            return Math.max(max,cell.minHeight());
        },0);
    });
}

function colWidths(rows){
    return rows[0].map(function(_,i) {
        return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

function drawTable(rows){
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block){
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum){
        var blocks = row.map(function(cell,colNum){
            return cell.draw(widths[colNum], heights[rowNum]);
        });
        return blocks[0].map(function(_, lineNo){
            return drawLine(blocks,lineNo);
        }).join("\n");
    }

    return rows.map(drawRow).join("\n");
}

function repeat(string, times){
    var result = "";
    for(var i = 0;i < times; i++)
        result += string;
    return result;
}

function TextCell(text){
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width,line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height){
    var result = [];
    for (var i = 0; i < height; i++){
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

var rows = [];
for(var i = 0; i < 5; i++) {
    var row = [];
    for(var j = 0; j < 5;j++){
        if((j+i)%2 == 0)
            row.push(new TextCell("##"));
        else  
            row.push(new TextCell("  "));
    }
    rows.push(row);
}
console.log(drawTable(rows));

function UnderlinedCell(inner) {
    this.inner = inner;
};
UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight() +1;
};
UnderlinedCell.prototype.draw = function(width, height){
    return this.inner.draw(width, height -1).concat([repeat("-", width)]);
};

function dataTable(data){
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name){
        return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row){
        return keys.map(function(name){
            return new TextCell(String(row[name]));
        });
    });
    return [headers].concat(body);
}

console.log(drawTable(dataTable(MOUNTAINS)));

var pile = {
    elements: ["eggshell", "orange peel", "worm"],
    get height() {
        return this.elements.length;
    },
    set height(value){
        console.log("Ignoring attempt to set height to", value);
    }
};

console.log(pile.height);
    //3
pile.height = 100;
    //Ignoring attempt to set height to 100

Object.defineProperty(TextCell.prototype, "heightProp", {
    get: function() {return this.text.length;}
});
var cell = new TextCell("no\nway");
console.log(cell.heightProp);
    //2
cell.heightProp = 100;
console.log(cell.heightProp);
    //2

function RTextCell(text){
    TextCell.call(this,text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width,height) {
    var result = [];
    for(var i = 0; i < height;i++){
        var line = this.text[i] || "";
        result.push(repeat(" ", width - line.length) + line);
    }
    return result;
};

function dataTable(data){
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name){
        return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row){
        return keys.map(function(name){
            var value = row[name];
            //this was changed
            if(typeof value == "number")
                return new RTextCell(String(value));
            else  
                return new TextCell(String(value));
        });
    });
    return [headers].concat(body);
}

console.log(drawTable(dataTable(MOUNTAINS)));

console.log(new RTextCell("A") instanceof RTextCell);
    //true
console.log(new RTextCell("A") instanceof TextCell);
    //true
console.log(new TextCell("A") instanceof RTextCell);
    //false
console.log([1] instanceof Array);
    //true

// small attempt at simplifying codes for explanation.


// Data Types

// Numeric = 0, 1, 2, 3, 10, 20, 100, 400 etc

console.log(" ");
console.log("----- Basic Data Types -----");
console.log(" ");



var isNumeric = 10;
console.log ("1. This is a Numeric Data: " + isNumeric);

// String = Word, Text, Sentence, Paragraph
// String must be contained within '' or ""

var isString = "Mamunur Rashid";
console.log ("2. This is a Sting Data: " + isString);

// Bolean = True/False (Value: 1/0)

var isBolean = true;
if( isBolean === true){
    console.log("3. This is a Bolean Data: " + isBolean + " or 1")
};


// Data Type Query

console.log(" ");
console.log("----- Data Types Query -----");
console.log(" ");



console.log(typeof isNumeric);
console.log(typeof isString);
console.log(typeof isBolean);



// Array Data Type

console.log(" ");
console.log("----- Array Data Type -----");
console.log(" ");



var isArray = [11, 12, 20, 30, 50, 100];
var isArray2 = ["Fahim", "Mamun", "Shamim"];

console.log(isArray);
console.log(isArray2);

// Array Length

console.log(" ");
console.log("----- Array Length -----");
console.log(" ");



console.log(isArray.length);

// Array Index or Position
// Array Query

console.log(" ");
console.log("----- Array Index Query -----");
console.log(" ");



console.log(isArray[3]);

var indOfArray = isArray[4];
console.log(indOfArray);

// Array Index Update or Replace

console.log(" ");
console.log("----- Array Element Update -----");
console.log(" ");



isArray[0] = 10;
console.log(isArray[0]);



// Index of Array Element

console.log(" ");
console.log("----- Element Index -----");
console.log(" ");

 var eleInd = isArray2.indexOf('Fahim');
 console.log(eleInd);
 console.log(isArray2.indexOf("Mamun"));

// Add, Remove Elements from Array

var arEle = [10, 20, 30, 45, 50, 60, 70, 85, 90, 100];

// Add Element at the end of Array

console.log(" ");
console.log("----- Add or Remove the Last Element of an Array -----");
console.log(" ");

console.log(arEle);
// add at end
// Not Index but Data in Brackets
arEle.push(120);
console.log(arEle);
// remove from end
arEle.pop();
console.log(arEle);

// Add Element at the first of Array


console.log(" ");
console.log("----- Add or Remove the First Element of an Array -----");
console.log(" ");


console.log(arEle);
// add to first
// Not Index but Data in Brackets
arEle.unshift(5); 
console.log(arEle);
// remove from first
arEle.shift();
console.log(arEle);

console.log(" ");
console.log("----- Add two Arrays -----");
console.log(" ");




var arEle2 = [200, 300, 400, 500];
var arEleComb = arEle.concat(arEle2);
console.log(arEle);
console.log(arEle2);
console.log(arEleComb);



console.log(" ");
console.log("----- Add or Remove from Array -----");
console.log(" ");

// Index of Elements inside Brackets

var arraSplSli = [1, 2, 3, 4, 6];

// If one Number in bracket it will remove Index 0 to that number to be removed in arrray
var arEleSlice = arraSplSli.slice(3);
console.log(arEleSlice);

// If two Number in bracket first number will signify start index and end number signifies the number of data taken in new array.
var arEleSlice2 = arraSplSli.slice(0, 2);
console.log(arEleSlice2);

// If two Number in bracket first number will signify start index and end number signifies the number of data taken in new array.
var arEleSplice1 = arraSplSli.splice(0, 5);
console.log(arEleSplice1);

// The third and consequtive number signify newly added data
var arEle12 = [10, 20, 30, 50, 70];
arEle12.splice(3, 0, 40);
console.log(arEle12);
arEle12.splice(5, 1, 60);
console.log(arEle12);
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
arEle.push(120);
console.log(arEle);
arEle.pop();
console.log(arEle);
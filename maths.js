// simple Math, absolute basics

var a1 = 30;
var b1 = 40;
var c1 = 5;
var d1 = 57

// JavaScript Addition

console.log (a1 + b1);

// JavaScript Substraction

console.log (b1 - a1);

// JavaScript Multiplication

console.log (a1 * c1);

// JavaScript Division

console.log  (b1 / c1);

// JavaScript Remainder

console.log (d1 % c1);

// JavaScript Math ShortHands
// Data Update Shorthand

console.log(d1);
d1 = 55;
console.log(d1);

// Adding, Substracting, Multipling and Substracting from existing Value Shorthand

console.log(a1);
a1 = a1 + 30;
console.log(a1);

console.log(b1);
b1 += 20;
console.log(b1);

// Add or Substract by 1 Shorthand

console.log(c1);
c1++;
console.log(c1);


// parseInt and parseFloat
var sInt = "31";
var pInt = parseInt(sInt)

console.log(sInt);
console.log(pInt);

var sFlt = "35.95";
var pFlt = parseFloat(sFlt);
var pFltInt = parseInt(sFlt);

console.log(sFlt);
console.log(pFlt);
console.log(pFltInt);

// Decimal Pointer toFixed

var inf_1 = 0.1;
var inf_2 = 0.2;

var inf_sum = inf_1 + inf_2;
console.log(inf_sum);

var Fixed_Decimal = inf_sum.toFixed(3);
console.log(Fixed_Decimal);
var a = 20;
var b = 15;
var c = 18;

// Conditionals are if and else
console.log(" ");
console.log("----- Conditionals -----");
console.log(" ");



if(a = 20){
    console.log("The Value of 'a' is 20")
};

if(b == 16){
    console.log("The Value of 'b' is not 15")
};
else{
    console.log("The Value of 'b' is 15")
};

// Multiple Conditions
// Both conditions must be met

console.log(" ");
console.log("----- Multiple Conditions must be met -----");
console.log(" ");



if(a == 20 && b == 15){
    console.log("The Value of 'a' is 20 & 'b' is 15")
};

// Any of the conditions must be met


console.log(" ");
console.log("----- Any of the Multiple Conditions must be met -----");
console.log(" ");



if(b == 15 || c == 20){
    console.log("One of the Values are accurate")
}


console.log(" ");
console.log("----- Multi Staged Conditions -----");
console.log(" ");


if(a == 25){
    console.log("The value 'a' is 25")
};
else{
    if(a == 35){
        console.log("The value 'a' is 35");
    }
    else{
        console.log("The value 'a' is 20")
    }
};
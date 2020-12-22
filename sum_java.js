var readlineSync = require("readline-sync");
var num1 = readlineSync.question("enter your num:- ");
var num2 = readlineSync.question("enter your num2:- ");
var sum = num1+num2
if (sum==12){
    console.log(sum,"equal")
}
else{
    console.log(sum,"not egual")
}
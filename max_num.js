var readlineSync = require("readline-sync");
var num1 = readlineSync.question("enter your num1");
var num2 = readlineSync.question("enter your num2");
var num3 = readlineSync.question("enter you num3");
if (num1>num2 && num1>num3){
    console.log(num1,"num1 is greater")
}
else if (num2>num1 && num2>num3){
    console.log(num2,"num2 is greater")
}
else if (num3>num2 && num3>num1){
    console.log(num3,"num3 is greater")
}

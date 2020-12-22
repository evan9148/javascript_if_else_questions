var readlineSync = require("readline-sync");
var num1 = readlineSync.question("enter your num1");
var num2 = readlineSync.question("enter your num2");
var symbol = readlineSync.question("enter your symbol");
if (symbol == "+"){
    console.log(num1+num2)
}else if (symbol == "-"){
    console.log(num1-num2)
}else if (symbol == "*"){
    console.log(num1*num2)
}else if (symbol == "/"){
    console.log(num1/num2)
}else{
    console.log(num1%num2)
}
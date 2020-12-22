var readlineSync = require("readline-sync");
var num = readlineSync.question("enter the num:- ");
if (num%2==0){
    console.log("not prime",num)
}
else{
    console.log("prime",num)
}
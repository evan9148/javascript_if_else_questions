var readlinesync = require("readline-sync");
var year = readlinesync.question("enter your year");
if (year%4===0 && year%100!==0){
    console.log("leap year",year)
}else if (year%400===0){
    console.log("leap year",year)
}else {
    console.log(" not a leap year",year)
}
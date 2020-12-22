var readlinesync = require("readline-sync");
var year = readlinesync.question("enter your year");
count=0
if (year%100){
    count=count+1
}
console.log(count)
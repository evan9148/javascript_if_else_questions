var readlineSync = require("readline-sync");
var salary = readlineSync.question("enter your num1");
var notes = readlineSync.question("enter your notes");
if (notes == 500){
    console.log(salary/notes ," 500 notes are their in",salary)
}else if (notes == 200){
    console.log(salary/notes,"200 notes are their in", salary)
}else if (notes == 100){
    console.log(salary/notes,"100 notes are their in",salary)
}else if (notes == 50){
    console.log(salary/notes,"50 notes are their in",salary)
}
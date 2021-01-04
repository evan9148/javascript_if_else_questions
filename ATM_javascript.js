var readlineSync = require("readline-sync");
var language = readlineSync.question("enter your language")
var account = readlineSync.question("enter your account")
var pin = readlineSync.question("enter your pin")
var amount = readlineSync.question("enter your amount")
if (language == "english" || language == "hindi"){
    console.log("language accpected",language)
    if (account == "current" || account == "saving"){
        console.log("account accpected",account)
        if (pin == 7785){
            console.log("your pin valid",pin)
            if (amount<=50000){
                console.log("you can withdraw your money",amount)
            }else{
                console.log("you don't sufficient money on your ATM",amount)
            }
        }else{
            console.log("your pin is invalid",pin)
        }
    }else{
        console.log("your account not accpected",account)
    }
}else{
    console.log("your languange not accpected",language)
}


    

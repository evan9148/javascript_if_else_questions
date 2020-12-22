var readlineSync = require("readline-sync");
var language = readlineSync.question("enter your language")
var account = readlineSync.question("enter your account")
var pin = readlineSync.question("enter your pin")
var amount = readlineSync.question("enter your amount")
if (language == "english" || language == "hindi"){
    console.log(language,"language is accpected");
}
    if (account == "saving" || language == "current"){
        console.log(account,"account can be accpected");
    }
        if (pin == 7766){
            console.log(pin,"your pin can excute");
        }
            if (amount<=50000){
                console.log(amount,"you can withdraw money");
            }else{
                console.log(amount,"you can not withdraw your account as only 50000")
            }else {
                console.log(pin,"your pin invalid")
        }else {
            console.log(account,"your account is invalid")
    }else {
        console.log(language,"your language is invalid")
}



    
    
    
    
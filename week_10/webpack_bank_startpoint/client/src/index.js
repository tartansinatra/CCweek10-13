var Bank = require('./bank/bank.js');
var Account = require('./bank/account.js');
var sampleAccounts = require('./sample.json');




window.onload = function(){
  console.log('loaded bank app');
  console.log('sampleAccounts');
  var bank = new Bank();
  console.log("the bank", bank);

  for(accountData of sampleAccounts){
    bank.addAccount( new Account(accountData) )
  }

  console.log("the bank", bank);

  var totalValue = function(){
    var totalDisplay = document.getElementById('totalValue');
    totalDisplay.innerText = "Total Value of Accounts: " +bank.totalCash();
  }


  var nameOfAccounts = function(){
    var listAccounts = document.getElementById('listAccounts');
    var singleAccount = document.createElement("li")
    var oneAccount = bank.owner + bank.amount
      for(accountData of sampleAccounts)
        oneAccount
    listAccounts.innerText

  //   }
  // }  



  totalValue();
  // listAccounts();

}

const accountInput = document.querySelector('#accountNumber');
const checkBalanceButton = document.querySelector('#checkBalance');
const displayBalance = document.querySelector('#balance');
const sendButton = document.querySelector('#sendTx');
const toAccountInput = document.querySelector('#toAccountNumber');
const valueInput = document.querySelector('#amount');

let acccounts;

async function checkBalance() {
  if (typeof ethereum !== undefined) {
    acccounts = await ethereum.request({ method: 'eth_requestAccounts' });

    const balance = await ethereum.request({method: 'eth_getBalance', params: [accountInput.value, 'latest']})
    displayBalance.innerText = balance;
       // Convert to something
    const parsedBalanced = parseInt(balance) / Math.pow(10, 18);
    displayBalance.innerText = parsedBalanced;
     } else {
       console.log('No ethereum');
     }
   }
    
   async function sendFunds() {
     try {
     } catch (error) {
       console.log(error);
     }
   }
    
   checkBalanceButton.addEventListener('click', checkBalance);
   sendButton.addEventListener('click', sendFunds);
    


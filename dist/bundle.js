/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function show5(){
    document.getElementById('div1').style.display = 'block';
  }
  function show2(){
    document.getElementById('div1').style.display = 'block';
  }
  
  
  function show1(){
    document.getElementById('div2').style.display ='none';
  }
  function show4(){
    document.getElementById('div2').style.display = 'block';
  }
  
  
  function unCheck(){
    document.getElementById('div3').style.display ='none';
  }
  function unCheck(){
    document.getElementById('div3').style.display = 'block';
  }
  function show6(){
    document.getElementById('pr').style.display ='none';
  }
  function show6(){
    document.getElementById('pr').style.display = 'block';
  }
    
  function show0(){
    document.getElementById('pra').style.display ='none';
  }
  function show0(){
    document.getElementById('pra').style.display = 'block';
  }
  function show01(){
    document.getElementById('prav').style.display ='none';
  } 
  function show01(){
    document.getElementById('prav').style.display = 'block';
  }
  function show9(){
    document.getElementById('pri').style.display ='none';
  }
  function show9(){
    document.getElementById('pri').style.display = 'block';
  }
  
  function show8(){
    document.getElementById('priy').style.display ='none';
  }
  function show8(){
    document.getElementById('priy').style.display = 'block';
  }
  
    
  const balance = document.getElementById('balance');
  const minus = document.getElementById('money-minus');
  const plus = document.getElementById('money-plus');
  const history = document.getElementById('list');
  const newTrans = document.getElementById('form');
  const expense = document.getElementById('text');
  const amount = document.getElementById('amount');
  
  const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))
  
  let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];
  
  function addTransaction(e) {
      e.preventDefault();
  
      if(expense.value.trim() === '' || amount.value.trim() === '') {
          return;
      }else {
          const transaction = {
              id: generateID(),
              expense: expense.value,
              amount: +amount.value
          }
  
          transactions.push(transaction);
          updateLocalStorage();
          addTransactionsDOM(transaction);
        
          expense.value = '';
          amount.value = '';
          updateValues();
      }
  
  } 
  
  function generateID() {
      return Math.floor(Math.random() * 10000)
  }
  
  function addTransactionsDOM(transaction) {
      const sign = transaction.amount < 0 ? '-' : '+' ;
      const item = document.createElement('li');
  
      item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
      item.innerHTML = `${transaction.expense} <span> ${sign}${Math.abs(transaction.amount)} </span>
      <button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>
      `
      history.appendChild(item);
  }
  
  function removeTransaction(id) {
      transactions = transactions.filter(transaction => transaction.id !== id);
  
      init();
      updateValues();
      updateLocalStorage();
  }
  
  function updateValues() {
      const amounts = transactions.map(transaction => 
          transaction.amount)
  
       const total = amounts.reduce((a, b) => {
              return a + b;
          },0).toFixed(2);
  
         const income = amounts.filter(item => item > 0 )
                                .reduce((acc,item) => (acc += item),0)
                                .toFixed(2);
  
         const expense = (amounts.filter(item => item < 0)
                                 .reduce((acc, item) => (acc += item),0) * -1.).toFixed(2)
                                 
  
          balance.innerText = ` ${total}`
          plus.innerText = ` ${income}`
          minus.innerText = `${expense}`
      }; 
  
      function updateLocalStorage() {
          localStorage.setItem('transactions', JSON.stringify(transactions))
      }
  
  function init() {
      history.innerHTML = '';
      transactions.forEach(addTransactionsDOM)
  }
  
  init();
  updateLocalStorage();
  updateValues();
  
  
  newTrans.addEventListener('submit', addTransaction)
  
  function myFunction(){
    alert("Thank You!");
  }
/******/ })()
;
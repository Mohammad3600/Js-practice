var loginId = sessionStorage.getItem('Customer-ID');
var userslist = JSON.parse(localStorage.getItem('users'));
// Below array method find login user index in userlist
var userindex = userslist.findIndex(function(user) {
    return user.id == loginId;
});
//finding login user in userslist
var loginUser = userslist[userindex];

/**
 * This function called by #add button to add money in the savings account and append a transaction
 * We are getting money entered in the .money textbox which should be not empty then we create a transaction object
 * loginUser contains all user info and we are adding current transaction to it and adding entered amount to balance
 * and changing that object in userlist.
 */
function addMoney() {
    var getMoney = document.querySelector('#money').value;
    document.querySelector('#money').value = '';
    if (getMoney === '') {
        document.querySelector('.errorMsg-1').innerHTML = 'Please Enter Amount';
    } else if (!(/^\d{0,15}$/.test(getMoney))) {
        document.querySelector('.errorMsg-1').innerHTML = 'Please Enter Valid Amount';
    } else {
        var transaction = { date: new Date().toLocaleDateString(), type: 'credited', amount: currencyFormat(getMoney) };
        loginUser.transactions.unshift(transaction);
        loginUser.balance += parseInt(getMoney);
        userslist[userindex] = loginUser;
        localStorage.setItem('users', JSON.stringify(userslist));
        addTransaction(transaction, '.Transaction-table');
        fillBalance(loginUser.balance);
    }
}

/**
 * This function  append a transaction to a table
 * @param {object} transaction 
 * @param {string} tableclassName 
 */
function addTransaction(transaction, tableclassName) {
    var table = document.querySelector(tableclassName);
    var tr = document.createElement('tr');
    for (value in transaction) {
        var td = document.createElement('td');
        var textValue = document.createTextNode(transaction[value]);
        td.appendChild(textValue);
        tr.appendChild(td);
    }
    if (tableclassName === '.FixedDeposite-table') {
        tr.appendChild(calculateEstimatedAmount(transaction));
        tr.appendChild(calculateMaturityDate(transaction));
        table.appendChild(tr);
    }
    table.insertBefore(tr, table.children[2]);
}

/**
 * This function will debit the entered money in user's balance and added a transaction in users transactions
 */
function debitMoney() {
    var getMoney = document.querySelector('#money-debit').value;
    document.querySelector('#money-debit').value = '';
    if (getMoney === '') {
        document.querySelector('.errorMsg-2').innerHTML = 'Please Enter Amount';
    } else if (!(/^\d{0,15}$/.test(getMoney))) {
        document.querySelector('.errorMsg-2').innerHTML = 'Please Enter Valid Amount';
    } else if (loginUser.balance < parseInt(getMoney)) {
        document.querySelector('.errorMsg-2').innerHTML = 'Not Enough Balance';
    } else {
        var transaction = { date: new Date().toLocaleDateString(), type: 'debited', amount: currencyFormat(getMoney) };
        loginUser.transactions.unshift(transaction);
        loginUser.balance -= parseInt(getMoney);
        userslist[userindex] = loginUser;
        localStorage.setItem('users', JSON.stringify(userslist));
        addTransaction(transaction, '.Transaction-table');
        fillBalance(loginUser.balance);
    }
}

/**
 * This function will add the DOM table-rows in .Transaction-table with user's Transactions object values
 */
function fillTransactionTable() {
    var table = document.querySelector('.Transaction-table');
    var transactions = loginUser.transactions;
    for (transaction of transactions) {
        var tr = document.createElement('tr');
        for (value in transaction) {
            var td = document.createElement('td');
            var textValue = document.createTextNode(transaction[value]);
            td.appendChild(textValue);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

/**
 * This function will get entered amount from .amount and if it is less than 5,000 then it displays error message in webpage
 * checked variable will get checked radio button and then creating deposite object having valueDate , type, plantype and currency format
 * and we are adding the object to user's fixedDeposites list then we are changing the localStorage
 */
function addAmount() {
    var getAmount = document.querySelector('#amount').value;
    document.querySelector('#amount').value = '';
    if (getAmount === '') {
        document.querySelector('.errorMsg-3').innerHTML = 'Please Enter Amount';
    } else if (!(/^\d{0,15}$/.test(getAmount))) {
        document.querySelector('.errorMsg-3').innerHTML = 'Please Enter Valid Amount';
    } else if (parseInt(getAmount) < 5000) {
        document.querySelector('.errorMsg-3').innerHTML = 'Minimum amount is ₹ 5,000';
    } else {
        var checked = document.querySelector('input[type=radio]:checked');
        var plantype = (checked.value == 1) ? '1 Year' : '5 Years';
        var deposite = { valueDate: new Date().toLocaleDateString(), type: plantype, amount: currencyFormat(getAmount) };
        loginUser.fixedDeposites.unshift(deposite);
        userslist[userindex] = loginUser;
        localStorage.setItem('users', JSON.stringify(userslist));
        addTransaction(deposite, '.FixedDeposite-table');
    }
}

/**
 * This function will add the DOM table-rows in .FixedDeposite-table with user's fixedDeposite's list
 */
function fillFixedDepositePlans() {
    var table = document.querySelector('.FixedDeposite-table');
    var deposites = loginUser.fixedDeposites;
    for (deposite of deposites) {
        var tr = document.createElement('tr');
        for (value in deposite) {
            var td = document.createElement('td');
            var textValue = document.createTextNode(deposite[value]);
            td.appendChild(textValue);
            tr.appendChild(td);
        }
        tr.appendChild(calculateEstimatedAmount(deposite));
        tr.appendChild(calculateMaturityDate(deposite));
        table.appendChild(tr);
    }
}

/**
 * This function balance total balance in .display balance
 * @param {number} balance 
 */
function fillBalance(balance) {
    document.querySelector('.display-balance').innerHTML = '₹ ' + currencyFormat(balance);
}

/**
 * This function  will select  .saving-dropdown navigation bar and removes select from deposite-dropdown(select class provides highted background)
 * (switch class have the display none property) if .savings-container have the switch then this function removes it and added switch to .deposite-conatainer
 */
function switchtoSavings() {
    var deposite = document.querySelector('.deposite-container');
    var savings = document.querySelector('.savings-container');
    document.querySelector('.Deposite-dropdown').classList.remove('select');
    this.classList.add('select');
    if (savings.classList.contains('switch')) {
        savings.classList.remove('switch');
        deposite.classList.add('switch');
    }
}

/**
 * This function  will select  .deposite-dropdown navigation bar and removes select from .savings-dropdown(select class provides highted background)
 * (switch class have the display none property) if .deposites-container have the switch then this function removes it and added switch to .savings-conatainer
 */
function switchtoDeposits() {
    var deposite = document.querySelector('.deposite-container');
    var savings = document.querySelector('.savings-container');
    document.querySelector('.savings-dropdown').classList.remove('select');
    this.classList.add('select');
    if (deposite.classList.contains('switch')) {
        deposite.classList.remove('switch');
        savings.classList.add('switch');
    }
}

/**
 * this afunction will remove the customer-d in sessionStorage and redirect to login page
 */
function logout() {
    sessionStorage.removeItem('Customer-ID');
    location.assign('../Login.html');
}

//ongetting focus on #money, Error message no longer displayed
document.querySelector('#money').onfocus = function() {
    document.querySelector('.errorMsg-1').innerHTML = '';
}

//ongetting focus on #money-debit,Error message no longer displayed
document.querySelector('#money-debit').onfocus = function() {
    document.querySelector('.errorMsg-2').innerHTML = '';
}

//ongetting focus on #amount, Error message no longer displayed
document.querySelector('#amount').onfocus = function() {
    document.querySelector('.errorMsg-3').innerHTML = '';
}

// When user clicks on #add element then addMoney function will called
document.querySelector('#add').onclick = addMoney;
// When user clicks on #debit element then debitMoney function will called
document.querySelector('#debit').onclick = debitMoney;
//when user's clicks on .saving-dropdown then switchtoSavings function will called
document.querySelector('.savings-dropdown').onclick = switchtoSavings;
//when user's clicks on .Deposite-dropdown then switchtoDeposits function will called
document.querySelector('.Deposite-dropdown').onclick = switchtoDeposits;
//below function takes user to login page and clear the customer-id in sessionStorage
document.querySelector('#Logout').onclick = logout;
//below object has keys as textbox id's so that we can change the textbox values based on its id.
var values = { money: '', 'money-debit': '', amount: '' };
/**
 * This function triggers when user presses a key on keyboard in textbox then we are storing the values in the range 
 * from 0-9 and if user enters backspace then we are slicing the last character
 * @param {event} e event object
 */
function keydown(e) {
    if ((e.keyCode >= 48 && e.keyCode <= 57)) {
        values[e.target.id] = values[e.target.id] + e.key;
    } else if (e.keyCode == 8) {
        values[e.target.id] = values[e.target.id].slice(0, length - 1);
    }
}
/**
 * on keyup we are changing the value of textbox
 * @param {event} e event object
 */
function keyup(e) {
    e.target.value = values[e.target.id];
}
document.querySelector('#money').addEventListener('keydown', keydown);
document.querySelector('#money').addEventListener('keyup', keyup);
document.querySelector('#money-debit').addEventListener('keydown', keydown);
document.querySelector('#money-debit').addEventListener('keyup', keyup);
document.querySelector('#amount').addEventListener('keydown', keydown);
document.querySelector('#amount').addEventListener('keyup', keyup);
//writing the user id,name in html page
document.querySelector('#id').innerHTML = ': ' + loginUser.id;
document.querySelector('#name').innerHTML = ': ' + loginUser.username;
//the below functions called every time when page reloaded, and this will be fill balance, transaction and deposits tables
fillBalance(loginUser.balance);
fillTransactionTable();
fillFixedDepositePlans();
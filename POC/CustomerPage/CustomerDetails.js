var loginId = sessionStorage.getItem('Customer-ID');
var userslist = JSON.parse(localStorage.getItem("users"));
/**
 * Below array method find login user index in userlist
 */
var userindex = userslist.findIndex(function(user) {
    return user.id == loginId;
});
var loginUser = userslist[userindex];
/**
 * This function called by #add button to add money in the savings account and append a transaction
 * We are getting money entered in the .money textbox which should be not empty then we create a transaction object
 * loginUser contains all user info and we are adding current transaction to it and adding entered amount to balance
 * and changing that object in userlist.
 * we are changing the userlist in localstorage and reload the page so that we will get all updated values
 */
function addMoney() {
    var getMoney = document.querySelector(".money").value;
    if (getMoney == "") {
        document.querySelector('.errorMsg-1').innerHTML = 'Please Enter Amount';
        setTimeout(function() { document.querySelector('.errorMsg-1').innerHTML = ''; }, 1000);
    } else {
        var transaction = { date: new Date().toLocaleDateString(), type: "credited", amount: currencyFormat(getMoney) };
        loginUser.transactions.unshift(transaction);
        loginUser.balance += parseInt(getMoney);
        userslist[userindex] = loginUser;
        localStorage.setItem("users", JSON.stringify(userslist));
        sessionStorage.removeItem('redirect');
        location.reload();
    }
}
/**
 * This function will debit the entered money in user's balance and added a transaction in users transactions
 */
function debitMoney() {
    var getMoney = document.querySelector(".money-debit").value;
    if (getMoney == "") {
        document.querySelector('.errorMsg-2').innerHTML = 'Please Enter Amount';
        setTimeout(function() { document.querySelector('.errorMsg-2').innerHTML = ''; }, 1000);
    } else if (loginUser.balance < parseInt(getMoney)) {
        document.querySelector('.errorMsg-2').innerHTML = 'Not Enough Balance';
        setTimeout(function() { document.querySelector('.errorMsg-2').innerHTML = ''; }, 1000);
    } else {
        var transaction = { date: new Date().toLocaleDateString(), type: "debited", amount: currencyFormat(getMoney) };
        loginUser.transactions.unshift(transaction);
        loginUser.balance -= parseInt(getMoney);
        userslist[userindex] = loginUser;
        localStorage.setItem("users", JSON.stringify(userslist));
        sessionStorage.removeItem('redirect');
        location.reload();
    }
}
/**
 * 
 * @param {number} money Takes a number and converted in indian currency value(, separated value) 
 */
function currencyFormat(money) {
    return new Intl.NumberFormat('en-IN').format(money);
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
 * and we are adding the object to user's fixedDeposites list then we are changing the localStorage and reloading the page to get updated values
 */
function addAmount() {
    var getAmount = document.querySelector(".amount").value;
    if (getAmount == "") {
        document.querySelector('.errorMsg-3').innerHTML = 'Please Enter Amount';
        setTimeout(function() { document.querySelector('.errorMsg-3').innerHTML = ''; }, 1000);
    } else if (parseInt(getAmount) < 5000) {
        document.querySelector('.errorMsg-3').innerHTML = 'Minimum amount is 5,000';
        setTimeout(function() { document.querySelector('.errorMsg-3').innerHTML = ''; }, 1000);
    } else {
        var checked = document.querySelector('input[type=radio]:checked');
        var plantype = (checked.value == 1) ? "1 Year" : "5 Years";
        var deposite = { valueDate: new Date().toLocaleDateString(), type: plantype, amount: currencyFormat(getAmount) };
        loginUser.fixedDeposites.unshift(deposite);
        userslist[userindex] = loginUser;
        localStorage.setItem("users", JSON.stringify(userslist));
        sessionStorage.setItem('redirect', 'deposit');
        location.reload();
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
 * Here we are calculating the estimated amount based on plan that choosed by user and amount he entered and returning DOM td element
 * @param {Array} deposite user's deposite details
 */
function calculateEstimatedAmount(deposite) {
    var estimation = parseInt(deposite['amount'].replaceAll(',', ''));
    var interest = (deposite['type'] == '1 Year') ? 6 : 5 * 6.5;
    estimation = estimation + estimation * interest / 100;
    var td = document.createElement('td');
    var text = document.createTextNode(currencyFormat(estimation));
    td.appendChild(text);
    return td;
}
/**
 * calculating the maturity date based on the value date and returning DOM td element
 * @param {object} deposite user's deposite detail
 */
function calculateMaturityDate(deposite) {
    var date = deposite.valueDate;
    var plan = (deposite.type == '1 Year') ? 1 : 5;
    var maturitydate = date.slice(0, date.length - 4) + (parseInt(date.slice(date.length - 4)) + plan)
    var td = document.createElement('td');
    var text = document.createTextNode(maturitydate);
    td.appendChild(text);
    return td;
}
/**
 * This function  will select  .saving-dropdown navigation bar and removes select from deposite-dropdown(select class provides highted background)
 * (switch class have the display none property) if .savings-container have the switch then this function removes it and added switch to .deposite-conatainer
 */
function switchtoSavings() {
    var deposite = document.querySelector('.deposite-container');
    var savings = document.querySelector('.savings-container');
    document.querySelector('.Deposite-dropdown').classList.remove('select');
    this.classList.add("select");
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
    this.classList.add("select");
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

/**
 * val1 will store the charaters which are in the range 0-9 and if it is backspace it slice that val1 
 * when keyup event occurs val1 is assigned to .money value
 */
var val1 = '';
document.querySelector(".money").addEventListener('keydown', function(e) {
    if ((e.keyCode >= 48 && e.keyCode <= 57)) {
        val1 = val1 + e.key;
    } else if (e.keyCode == 8) {
        val1 = val1.slice(0, length - 1);
    }
});
document.querySelector(".money").addEventListener('keyup', function() {
    this.value = val1;
});
/**
 * val2 will store the charaters which are in the range 0-9 and if it is backspace 
 * it slice that val2 when keyup event occurs val2 is assigned to .money-debit value
 */
var val2 = ''
document.querySelector(".money-debit").addEventListener('keydown', function(e) {
    if ((e.keyCode >= 48 && e.keyCode <= 57)) {
        val2 = val2 + e.key;
    } else if (e.keyCode == 8) {
        val2 = val2.slice(0, length - 1);
    }
});
document.querySelector(".money-debit").addEventListener('keyup', function() {
    this.value = val2;
});
/**
 * val3 will store the charaters which are in the range 0-9 and if it is backspace 
 * it slice that val3 when keyup event occurs val3 is assigned to .amount value
 */
var val3 = '';
document.querySelector(".amount").addEventListener('keydown', function(e) {
    if ((e.keyCode >= 48 && e.keyCode <= 57)) {
        val3 = val3 + e.key;
    } else if (e.keyCode == 8) {
        val3 = val3.slice(0, length - 1);
    }
});
document.querySelector(".amount").addEventListener('keyup', function() {
    this.value = val3;
});

//if the redirect availabel in sessionStorage then .deposite-dropdown will clicked
if (sessionStorage.getItem('redirect')) {
    document.querySelector('.Deposite-dropdown').onclick();
}
//writing the user id,name,balance in html page
document.querySelector('#id').innerHTML = ": " + loginUser.id;
document.querySelector('#name').innerHTML = ": " + loginUser.username;
var balance = currencyFormat(loginUser.balance);
document.querySelector('.display-balance').innerHTML = "₹ " + balance;
//the below functions called every time when page reloaded, and this will be fill transaction and deposits
fillTransactionTable();
fillFixedDepositePlans();
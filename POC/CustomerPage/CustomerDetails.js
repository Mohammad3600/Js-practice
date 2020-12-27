function addMoney() {
    let getMoney = document.querySelector(".money").value;
    if (!(getMoney == "")) {
        let transaction = { date: new Date().toLocaleDateString(), type: "credited", amount: currencyFormat(getMoney) };
        loginUser.transactions.unshift(transaction);
        loginUser.balance += parseInt(getMoney);
        userslist[userindex] = loginUser;
        localStorage.setItem("users", JSON.stringify(userslist));
        sessionStorage.removeItem('redirect');
        location.reload();
    }
}

function debitMoney() {
    let getMoney = document.querySelector(".money-debit").value;
    if (!(getMoney == "")) {
        let transaction = { date: new Date().toLocaleDateString(), type: "debited", amount: currencyFormat(getMoney) };
        loginUser.transactions.unshift(transaction);
        loginUser.balance -= parseInt(getMoney);
        userslist[userindex] = loginUser;
        localStorage.setItem("users", JSON.stringify(userslist));
        sessionStorage.removeItem('redirect');
        location.reload();
    }
}

function currencyFormat(money) {
    return new Intl.NumberFormat('en-IN').format(money);
}

function fillTransactionTable() {
    let table = document.querySelector('.Transaction-table');
    let transactions = loginUser.transactions;
    for (transaction of transactions) {
        let tr = document.createElement('tr');
        for (value in transaction) {
            let td = document.createElement('td');
            let textValue = document.createTextNode(transaction[value]);
            td.appendChild(textValue);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function addAmount() {
    let getAmount = document.querySelector(".amount").value;
    if (!(getAmount == "")) {
        let checked = document.querySelector('input[type=radio]:checked');
        let plantype = (checked.value == 1) ? "1 Year" : "5 Years";
        let deposite = { valueDate: new Date().toLocaleDateString(), type: plantype, amount: currencyFormat(getAmount) };
        loginUser.fixedDeposites.unshift(deposite);
        userslist[userindex] = loginUser;
        localStorage.setItem("users", JSON.stringify(userslist));
        sessionStorage.setItem('redirect', 'deposit');
        location.reload();
    }
}

function fillFixedDepositePlans() {
    let table = document.querySelector('.FixedDeposite-table');
    let deposites = loginUser.fixedDeposites;
    for (deposite of deposites) {
        let tr = document.createElement('tr');
        for (value in deposite) {
            let td = document.createElement('td');
            let textValue = document.createTextNode(deposite[value]);
            td.appendChild(textValue);
            tr.appendChild(td);
        }
        tr.appendChild(calculateEstimatedAmount(deposite));
        tr.appendChild(calculateMaturityDate(deposite));
        table.appendChild(tr);
    }
}

function calculateEstimatedAmount(deposite) {
    let estimation = parseInt(deposite['amount'].replaceAll(',', ''));
    let interest = (deposite['type'] == '1 Year') ? 6 : 6.5;
    estimation = estimation + estimation * interest / 100;
    let td = document.createElement('td');
    let text = document.createTextNode(currencyFormat(estimation));
    td.appendChild(text);
    return td;
}

function calculateMaturityDate(deposite) {
    let date = deposite.valueDate;
    let plan = (deposite.type == '1 Year') ? 1 : 5;
    let maturitydate = date.slice(0, date.length - 4) + (parseInt(date.slice(date.length - 4)) + plan)
    let td = document.createElement('td');
    let text = document.createTextNode(maturitydate);
    td.appendChild(text);
    return td;
}
document.querySelector('.savings-dropdown').onclick = function() {
    let deposite = document.querySelector('.deposite-container');
    let savings = document.querySelector('.savings-container');
    document.querySelector('.Deposite-dropdown').classList.remove('select');
    this.classList.add("select");
    if (savings.classList.contains('switch')) {
        savings.classList.remove('switch');
        deposite.classList.add('switch');
    }
}
document.querySelector('.Deposite-dropdown').onclick = function() {
    let deposite = document.querySelector('.deposite-container');
    let savings = document.querySelector('.savings-container');
    document.querySelector('.savings-dropdown').classList.remove('select');
    this.classList.add("select");
    if (deposite.classList.contains('switch')) {
        deposite.classList.remove('switch');
        savings.classList.add('switch');
    }
}
document.querySelector('#Logout').onclick = function() {
    sessionStorage.removeItem('Customer-ID');
    location.assign('../Login.html');
}

function keydown(e) {
    if ((e.keyCode >= 48 && e.keyCode <= 57)) {
        val = val + e.key;
    } else if (e.keyCode == 8) {
        val = val.slice(0, length - 1);
    }
}
let val = '';
document.querySelector(".money").addEventListener('keyup', function() {
    this.value = val;
});
document.querySelector(".amount").addEventListener('keyup', function() {
    this.value = val;
});
document.querySelector(".money-debit").addEventListener('keyup', function() {
    this.value = val;
});
if (sessionStorage.getItem('redirect')) {
    document.querySelector('.Deposite-dropdown').onclick();
}
document.querySelector(".money").addEventListener('keydown', keydown);
document.querySelector(".money-debit").addEventListener('keydown', keydown);
document.querySelector(".amount").addEventListener('keydown', keydown);
let loginId = sessionStorage.getItem('Customer-ID');
let userslist = JSON.parse(localStorage.getItem("users"));
let userindex = userslist.findIndex(function(user) {
    return user.id == loginId;
});
let loginUser = userslist[userindex];
document.querySelector('#id').innerHTML = ": " + loginUser.id;
document.querySelector('#name').innerHTML = ": " + loginUser.username;
let balance = new Intl.NumberFormat('en-IN').format(loginUser.balance);
document.querySelector('.display-balance').innerHTML = "₹ " + balance;
fillTransactionTable();
fillFixedDepositePlans();
function fillSavingsTable(users) {
    let table = document.querySelector('#savings-table');
    for (user of users) {
        let tr = document.createElement('tr');
        for (value in user) {
            if (value == 'id' || value == 'username' || value == 'balance') {
                let td = document.createElement('td');
                if (value == 'balance') {
                    user[value] = currencyFormat(user[value]);
                }
                let textValue = document.createTextNode(user[value]);
                td.appendChild(textValue);
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }
}

function fillDepositesTable(users) {
    let table = document.querySelector('#deposites-table');
    for (user of users) {
        for (deposite of user.fixedDeposites) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.appendChild(document.createTextNode(user.id));
            tr.appendChild(td1);
            let td2 = document.createElement('td');
            td2.appendChild(document.createTextNode(user.username));
            tr.appendChild(td2);
            for (value in deposite) {
                let td = document.createElement('td');
                td.appendChild(document.createTextNode(deposite[value]));
                tr.appendChild(td);
            }
            tr.appendChild(calculateEstimatedAmount(deposite));
            tr.appendChild(calculateMaturityDate(deposite));
            table.appendChild(tr);
        }
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

function currencyFormat(money) {
    return new Intl.NumberFormat('en-IN').format(money);
}

function switchNavigation(nav1, nav2, nav3, container1, container2, container3) {
    if (nav2.classList.contains('select')) {
        nav2.classList.remove('select');
        container2.classList.add('switch');
    }
    if (nav3.classList.contains('select')) {
        nav3.classList.remove('select');
        container3.classList.add('switch');
    }
    if (!nav1.classList.contains('select')) {
        nav1.classList.add('select');
        container1.classList.remove('switch');
    }
}

function displayBank() {
    switchNavigation(bankNav, savingsNav, depositNav, bankContainer, savingsContainer, depositContainer);
}

function displaySavings() {
    switchNavigation(savingsNav, bankNav, depositNav, savingsContainer, bankContainer, depositContainer);
}

function displayDeposite() {
    switchNavigation(depositNav, bankNav, savingsNav, depositContainer, bankContainer, savingsContainer);
}
let bankNav = document.querySelector('.bank-dropdown');
let savingsNav = document.querySelector('.savings-dropdown');
let depositNav = document.querySelector('.deposite-dropdown');
let bankContainer = document.querySelector('.bank-container');
let savingsContainer = document.querySelector('.savings-container');
let depositContainer = document.querySelector('.deposites-container')
document.querySelector('.bank-dropdown').onclick = displayBank;
document.querySelector('.savings-dropdown').onclick = displaySavings;
document.querySelector('.deposite-dropdown').onclick = displayDeposite;
window.onstorage = function() {
    location.reload();
}
document.querySelector('#Logout').onclick = function() {
    sessionStorage.removeItem('Admin-ID');
    location.assign('../Login.html');
}
let loginId = sessionStorage.getItem('Admin-ID');
let adminlist = JSON.parse(localStorage.getItem("admins"));
let loginUser = adminlist.find(function(user) {
    return user.id == loginId;
});
document.querySelector('#id').innerHTML = ": " + loginUser.id;
document.querySelector('#name').innerHTML = ": " + loginUser.name;
let userslist = JSON.parse(localStorage.getItem("users"));
let totalsavings = 0,
    totaldeposites = 0;
for (user of userslist) {
    totalsavings += user.balance;
    for (deposites of user.fixedDeposites) {
        totaldeposites += parseInt(deposites.amount.replaceAll(',', ''));
    }
}
document.querySelector('.amount-1').innerHTML = currencyFormat(totalsavings);
document.querySelector('.amount-2').innerHTML = currencyFormat(totaldeposites);
fillSavingsTable(userslist);
fillDepositesTable(userslist);
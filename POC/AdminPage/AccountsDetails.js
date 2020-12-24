/**
 * This function fills the all users savings account details in a #savings-table
 */
function fillSavingsTable() {
    var table = document.querySelector('#savings-table');
    for (user of userslist) {
        var tr = document.createElement('tr');
        for (value in user) {
            if (value == 'id' || value == 'username' || value == 'balance') {
                var td = document.createElement('td');
                if (value == 'balance') {
                    user[value] = currencyFormat(user[value]);
                }
                var textValue = document.createTextNode(user[value]);
                td.appendChild(textValue);
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }
}
/**
 * This function fills the users deposite accounts details in a #deposites-table
 */
function fillDepositesTable() {
    var table = document.querySelector('#deposites-table');
    for (user of userslist) {
        for (deposite of user.fixedDeposites) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            td1.appendChild(document.createTextNode(user.id));
            tr.appendChild(td1);
            var td2 = document.createElement('td');
            td2.appendChild(document.createTextNode(user.username));
            tr.appendChild(td2);
            for (value in deposite) {
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(deposite[value]));
                tr.appendChild(td);
            }
            tr.appendChild(calculateEstimatedAmount(deposite));
            tr.appendChild(calculateMaturityDate(deposite));
            table.appendChild(tr);
        }
    }
}

/**
 * Takes a number and converted in indian currency value(comma separated value) 
 * @param {number} money 
 */
function currencyFormat(money) {
    return new Intl.NumberFormat('en-IN').format(money);
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
 * nav1 will get a select class,if nav2 or nav3 contains select class it will be removed
 * class switch removed from container1 and added to container2 and conatiner3
 * @param {DOM Object} nav1 
 * @param {DOM Object} nav2 
 * @param {DOM Object} nav3 
 * @param {DOM Object} container1 
 * @param {DOM Object} container2 
 * @param {DOM Object} container3 
 */
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
/**
 * this is function calls displayBank 
 */
function displayBank() {
    switchNavigation(bankNav, savingsNav, depositNav, bankContainer, savingsContainer, depositContainer);
}
/**
 * this is function calls displaySavings
 */
function displaySavings() {
    switchNavigation(savingsNav, bankNav, depositNav, savingsContainer, bankContainer, depositContainer);
}
/**
 * this is function calls displayDeposite
 */
function displayDeposite() {
    switchNavigation(depositNav, bankNav, savingsNav, depositContainer, bankContainer, savingsContainer);
}
// Getting the all navigations and containers
var bankNav = document.querySelector('.bank-dropdown');
var savingsNav = document.querySelector('.savings-dropdown');
var depositNav = document.querySelector('.deposite-dropdown');
var bankContainer = document.querySelector('.bank-container');
var savingsContainer = document.querySelector('.savings-container');
var depositContainer = document.querySelector('.deposites-container')
document.querySelector('.bank-dropdown').onclick = displayBank;
document.querySelector('.savings-dropdown').onclick = displaySavings;
document.querySelector('.deposite-dropdown').onclick = displayDeposite;
//page will reloaded when any change in the local storage 
window.onstorage = function() {
        location.reload();
    }
    //remove the Admin-Id in session storage and redirect to login page
document.querySelector('#Logout').onclick = function() {
    sessionStorage.removeItem('Admin-ID');
    location.assign('../Login.html');
}
var loginId = sessionStorage.getItem('Admin-ID');
var adminlist = JSON.parse(localStorage.getItem("admins"));
var loginUser = adminlist.find(function(user) {
    return user.id == loginId;
});
//filling the customer id,name
document.querySelector('#id').innerHTML = ": " + loginUser.id;
document.querySelector('#name').innerHTML = ": " + loginUser.name;
var userslist = JSON.parse(localStorage.getItem("users"));
//this function fils the all savings money and fixed deposit money
(function() {
    var totalsavings = 0,
        totaldeposites = 0;
    for (user of userslist) {
        totalsavings += user.balance;
        for (deposites of user.fixedDeposites) {
            totaldeposites += parseInt(deposites.amount.replaceAll(',', ''));
        }
    }
    document.querySelector('.amount-1').innerHTML = currencyFormat(totalsavings);
    document.querySelector('.amount-2').innerHTML = currencyFormat(totaldeposites);
}());
fillSavingsTable();
fillDepositesTable();
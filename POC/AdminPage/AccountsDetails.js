var loginUser, userslist = [];
//This function finds login user and fill email and user name in page
database.collection('admins').doc('loginadmin').get().then(function(data) {
    loginUser = data.data();
    //writing the user id,name in html page
    document.getElementById('id').innerHTML = ': ' + loginUser.email;
    document.getElementById('name').innerHTML = ': ' + loginUser.name;
});

//This will fetch all users in firebase and fills the tables in page
database.collection('users').get().then(function(snapshot) {
    snapshot.docs.forEach(function(doc) {
        userslist.push(doc.data());
    });
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
});

/**
 * This function fills the all users savings account details in a #savings-table
 */
function fillSavingsTable() {
    var table = document.getElementById('savings-table');
    for (user of userslist) {
        var tr = document.createElement('tr');
        tr.appendChild(createTdata(user.id));
        tr.appendChild(createTdata(user.username));
        tr.appendChild(createTdata(user.balance));
        table.appendChild(tr);
    }
}

/**
 * This function fills the users deposite accounts details in a #deposites-table
 */
function fillDepositesTable() {
    var table = document.getElementById('deposites-table');
    for (user of userslist) {
        for (deposite of user.fixedDeposites) {
            var tr = document.createElement('tr');
            tr.appendChild(createTdata(user.id));
            tr.appendChild(createTdata(user.username));
            tr.appendChild(createTdata(deposite.valueDate));
            tr.appendChild(createTdata(deposite.type));
            tr.appendChild(createTdata(deposite.amount));
            tr.appendChild(calculateEstimatedAmount(deposite));
            tr.appendChild(calculateMaturityDate(deposite));
            table.appendChild(tr);
        }
    }
}

//This will display the profile 
document.querySelector('.far').onclick = function() {
    var profile = document.querySelector('.profile');
    if (profile.classList.contains('switch')) {
        profile.classList.remove('switch');
    } else {
        profile.classList.add('switch');
    }
}

//This will redirect to change password page
document.getElementById('Change').onclick = function(event) {
    document.getElementById('Change').href = '../Changepassword.html?admin';
    console.log(document.getElementById('Change'));
    document.getElementById('Change').click();
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
// //page will reloaded when any change in the users collection in firebase
// database.collection('users').onSnapshot(function() {
//     location.reload();
// });

//remove the Admin-Id in session storage and redirect to login page
document.getElementById('Logout').onclick = function() {
    database.collection('admins').doc('loginadmin').delete().then(function() {
        location.assign('../Login.html');
    });
}
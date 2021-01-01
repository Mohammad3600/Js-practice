/**
 * when users presses the login button this function checking the id and password and display error messages if entered wrong
 * if the credentials are valid admin will redirect to admin page and customer will redirect to customer page
 * admin/customer ids stored in session storage
 * @param {*} event form event
 */
function checkDetails(event) {
    event.preventDefault();
    var userid = event.target.userid;
    var password = event.target.password;
    var idError = document.getElementById('idError');
    var passwordError = document.getElementById('passwordError');
    if (document.getElementsByName('id')[0].innerHTML == 'Customer ID') {
        if (userid.value === '') {
            idError.innerHTML = 'Please Fill Customer ID';
        } else if (!(/\d{8}/.test(userid.value))) {
            idError.innerHTML = 'Invalid Customer ID';
        }
        if (password.value === '') {
            passwordError.innerHTML = 'Please Enter Password';
            return false;
        }
        getUser(userid.value, password.value);
    } else {
        if (userid.value === '') {
            idError.innerHTML = 'Please Fill Admin Email';
        } else if (!(/^[\w_.-]+@[\w_.-]+\.\b(com|au|in)\b$/.test(userid.value))) {
            idError.innerHTML = 'Invalid Admin Email';
        }
        if (password.value === '') {
            passwordError.innerHTML = 'Please Enter Password';
            return false;
        }
        getAdmin(userid.value, password.value);
    }
}

/**
 * This function finds the user in firebase and password to login
 * @param {string} id 
 * @param {string} password 
 */
function getUser(id, password) {
    database.collection('users').where('id', '==', id).get().then(function(snap) {
        if (snap.docs.length) {
            snap.docs.forEach(element => {
                var user = element.data();
                if (user.password == password) {
                    database.collection('users').doc('loginuser').set(user).then(function() {
                        window.location.assign('CustomerPage/CustomerPage.html');
                    });
                } else {
                    document.getElementById('passwordError').innerHTML = 'Invalid Password';
                }
            });
        } else {
            document.getElementById('passwordError').innerHTML = 'Invalid Customer ID/Password';
        }
    });
}

/**
 * This function finds the admin in firebase and password to login
 * @param {string} email
 * @param {string} password 
 */
function getAdmin(email, password) {
    database.collection('admins').where('email', '==', email).get().then(function(snap) {
        if (snap.docs.length) {
            snap.docs.forEach(element => {
                var admin = element.data();
                if (admin.password == password) {
                    database.collection('admins').doc('loginadmin').set(admin).then(function() {
                        window.location.assign('AdminPage/AdminPage.html');
                    });
                } else {
                    document.getElementById('passwordError').innerHTML = 'Invalid Password';
                }
            });
        } else {
            document.getElementById('passwordError').innerHTML = 'Invalid Customer ID/Password';
        }
    });
}

//when userid gets focus it Error message will bot be displayed
document.getElementById('userid').onfocus = function() {
    document.getElementById('idError').innerHTML = '';
}

//when #password gets focus it Error message will bot be displayed
document.getElementById('password').onfocus = function() {
    document.getElementById('passwordError').innerHTML = '';
}

//changing from one to another navigation bars
document.querySelector('.nav-1').onclick = function() {
    this.classList.add('navigation');
    this.nextElementSibling.classList.remove('navigation');
    document.getElementsByName('id')[0].innerHTML = 'Admin Email';
    document.getElementById('idError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
}
document.querySelector('.nav-2').onclick = function() {
    this.classList.add('navigation');
    document.querySelector('.nav-1').classList.remove('navigation');
    document.getElementsByName('id')[0].innerHTML = 'Customer ID';
    document.getElementById('idError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
}

//onsubmit checkDetails function will called
document.forms.UserForm.onsubmit = checkDetails;
//user1 data
var usertrans1 = [{ date: "11/11/2020", type: "debited", amount: "1,000" },
    { date: "11/11/2020", type: "debited", amount: "3,000" },
    { date: "24/12/2020", type: "debited", amount: "1,100" }
];
var userdeposits1 = [{ valueDate: '10/12/2020', type: '1 Year', amount: '10,000' }, { valueDate: '10/12/2020', type: '5 Year', amount: '10,0000' }];
var user1 = { id: '12345671', username: 'Mohammad', password: 'Mohammad123*', balance: 21000, transactions: usertrans1, fixedDeposites: userdeposits1 };

//user2 data
var usertrans2 = [{ date: "11/11/2020", type: "debited", amount: "2,000" },
    { date: "11/11/2020", type: "debited", amount: "4,000" },
    { date: "24/12/2020", type: "credited", amount: "5,100" }
];
var userdeposits2 = [{ valueDate: '10/12/2020', type: '1 Year', amount: '50,000' },
    { valueDate: '10/12/2020', type: '5 Year', amount: '10,0000' }
];
var user2 = { id: '12345672', username: 'Saketh', password: 'Saketh123*', balance: 30000, transactions: usertrans2, fixedDeposites: userdeposits2 };

//user3 data
var usertrans3 = [{ date: "11/11/2020", type: "debited", amount: "2,000" },
    { date: "11/11/2020", type: "debited", amount: "4,000" },
    { date: "24/12/2020", type: "credited", amount: "5,100" }
];
var userdeposits3 = [{ valueDate: '10/12/2020', type: '1 Year', amount: '50,000' },
    { valueDate: '10/12/2020', type: '5 Year', amount: '10,0000' }
];
var user3 = { id: '12345673', username: 'Akhil', password: 'Akhil123*', balance: 50000, transactions: usertrans3, fixedDeposites: userdeposits3 };

//user4 data
var usertrans4 = [{ date: "11/11/2020", type: "debited", amount: "2,000" },
    { date: "11/11/2020", type: "debited", amount: "4,000" },
    { date: "24/12/2020", type: "credited", amount: "5,100" }
];
var userdeposits4 = [{ valueDate: '10/12/2020', type: '1 Year', amount: '50,000' },
    { valueDate: '10/12/2020', type: '5 Year', amount: '10,0000' }
];
var user4 = { id: '12345674', username: 'Nikhil', password: 'Nikhil123*', balance: 60000, transactions: usertrans4, fixedDeposites: userdeposits4 };

//user5 data
var usertrans5 = [{ date: "11/11/2020", type: "debited", amount: "2,000" },
    { date: "11/11/2020", type: "debited", amount: "4,000" },
    { date: "24/12/2020", type: "credited", amount: "5,100" }
];
var userdeposits5 = [{ valueDate: '10/12/2020', type: '1 Year', amount: '50,000' },
    { valueDate: '10/12/2020', type: '5 Year', amount: '10,0000' }
];
var user5 = { id: '12345675', username: 'Bharath', password: 'Bharath123*', balance: 40000, transactions: usertrans5, fixedDeposites: userdeposits5 };

//adding users data to firebase
database.collection('users').get().then(function(snap) {
    if (!snap.docs.length) {
        database.collection('users').doc('user1').set(user1);
        database.collection('users').doc('user2').set(user2);
        database.collection('users').doc('user3').set(user3);
        database.collection('users').doc('user4').set(user4);
        database.collection('users').doc('user5').set(user5);
    }
});

//admin1
var admin1 = { name: 'Vasudevan Dandey', email: 'vasu@gmail.com', password: 'Vasu123*' };
var admin2 = { name: 'Tavish Agarwal', email: 'tavish@gmail.com', password: 'Tavish123*' };
var admin3 = { name: 'Jagadish', email: 'jagadish@gmail.com', password: 'Jagadish123*' };
var admin4 = { name: 'Chaitanya', email: 'chaitanya@gmail.com', password: 'Chaitanya123*' };
//adding admin data to firebase
database.collection('admins').get().then(function(snap) {
    if (!snap.docs.length) {
        database.collection('admins').doc('admin1').set(admin1);
        database.collection('admins').doc('admin2').set(admin2);
        database.collection('admins').doc('admin3').set(admin3);
        database.collection('admins').doc('admin4').set(admin4);
    }
});
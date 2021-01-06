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
    if (document.getElementsByName('id')[0].innerHTML === 'Customer ID') {
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
            var user = snap.docs[0].data();
            if (user.password == password) {
                database.collection('users').doc('loginId').set({ loginId: user.id }).then(function() {
                    window.location.assign('CustomerPage/CustomerPage.html');
                });
            } else {
                document.getElementById('passwordError').innerHTML = 'Invalid Password';
            }
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
            var admin = snap.docs[0].data();
            if (admin.password == password) {
                database.collection('admins').doc('loginEmail').set({ loginEmail: admin.email }).then(function() {
                    window.location.assign('AdminPage/AdminPage.html');
                });
            } else {
                document.getElementById('passwordError').innerHTML = 'Invalid Password';
            }
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
var usertrans1 = { credited: [{ date: "11-11-2020", amount: 1000 }, { date: "11-11-2020", amount: 3100 }], debited: [{ date: "24-12-2020", amount: 1100 }] };
var userdeposits1 = [{ date: '10-12-2020', type: '1 Year', amount: 10000 }, { date: '10-12-2020', type: '5 Year', amount: 1000000 }];
var user1 = { id: '12345671', username: 'Mohammad', password: 'Mohammad123*', balance: 21000, transactions: usertrans1, fixedDeposites: userdeposits1 };


//user2 data
var usertrans2 = { credited: [{ date: "11-11-2020", amount: 4000 }, { date: "11-11-2020", amount: 5100 }], debited: [{ date: "24-12-2020", amount: 1100 }] };
var userdeposits2 = [{ date: '10-12-2020', type: '1 Year', amount: 50000 },
    { date: '10-12-2020', type: '5 Year', amount: 10000 }
];
var user2 = { id: '12345672', username: 'Saketh', password: 'Saketh123*', balance: 30000, transactions: usertrans2, fixedDeposites: userdeposits2 };

//user3 data
var usertrans3 = { credited: [{ date: "11-11-2020", amount: 1000 }, { date: "11-11-2020", amount: 3100 }], debited: [{ date: "24-12-2020", amount: 1100 }] };
var userdeposits3 = [{ date: '10-12-2020', type: '1 Year', amount: 50000 },
    { date: '10-12-2020', type: '5 Year', amount: 10000 }
];
var user3 = { id: '12345673', username: 'Akhil', password: 'Akhil123*', balance: 50000, transactions: usertrans3, fixedDeposites: userdeposits3 };

//user4 data
var usertrans4 = { credited: [{ date: "11-11-2020", amount: 1000 }, { date: "11-11-2020", amount: 3100 }], debited: [{ date: "24-12-2020", amount: 1100 }] };
var userdeposits4 = [{ date: '10-12-2020', type: '1 Year', amount: 50000 },
    { date: '10-12-2020', type: '5 Year', amount: 10000 }
];
var user4 = { id: '12345674', username: 'Nikhil', password: 'Nikhil123*', balance: 60000, transactions: usertrans4, fixedDeposites: userdeposits4 };

//user5 data
var usertrans5 = { credited: [{ date: "11-11-2020", amount: 1000 }, { date: "11-11-2020", amount: 3100 }], debited: [{ date: "24-12-2020", amount: 1100 }] };
var userdeposits5 = [{ date: '10-12-2020', type: '1 Year', amount: 50000 },
    { date: '10-12-2020', type: '5 Year', amount: 10000 }
];
var user5 = { id: '12345675', username: 'Bharath', password: 'Bharath123*', balance: 40000, transactions: usertrans5, fixedDeposites: userdeposits5 };

//adding users data to firebase
database.collection('users').get().then(function(snap) {
    if (!snap.docs.length) {
        database.collection('users').add(user1);
        database.collection('users').add(user2);
        database.collection('users').add(user3);
        database.collection('users').add(user4);
        database.collection('users').add(user5);
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
        database.collection('admins').add(admin1);
        database.collection('admins').add(admin2);
        database.collection('admins').add(admin3);
        database.collection('admins').add(admin4);
    }
});
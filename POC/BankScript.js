/**
 * 
 * @param {*} event 
 */
function checkDetails(event) {
    event.preventDefault();
    let userid = event.target.userid;
    let password = event.target.password;
    let idError = document.querySelector('#idError');
    let passwordError = document.querySelector('#passwordError');
    if (userid.value == "") {
        idError.innerHTML = 'Please Fill Id';
        setTimeout(function() { idError.innerHTML = ''; }, 1000);
        userid.focus();
        return false;
    } else if (password.value == "") {
        passwordError.innerHTML = 'Please Enter Password';
        setTimeout(function() { passwordError.innerHTML = ''; }, 1000);
        password.focus();
        return false;
    }
    if (document.getElementsByName('id')[0].innerHTML == 'Customer ID') {
        let user = listOfCustomers.find(function(list) {
            return list.id == userid.value;
        });
        if (user && user.password == password.value) {
            sessionStorage.setItem("Customer-ID", userid.value);
            window.location.assign('CustomerPage/CustomerPage.html');
            return true;
        }
    } else {
        let admin = adminList.find(function(list) {
            return list.id == userid.value;
        });
        if (admin && admin.password == password.value) {
            sessionStorage.setItem("Admin-ID", userid.value);
            window.location.assign('AdminPage/AdminPage.html');
            return true;
        }
    }
    passwordError.innerHTML = "Invalid Id/Password";
    setTimeout(function() { passwordError.innerHTML = ''; }, 1000);
}

function Customers(id, username, password, balance, transactions, fixedDeposites) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.balance = balance;
    this.transactions = transactions;
    this.fixedDeposites = fixedDeposites;
}

function Transactions(amount, date, type) {
    this.date = date;
    this.type = type;
    this.amount = amount;
}

function FixedDeposites(type, amount, valueDate) {
    this.valueDate = valueDate;
    this.type = type;
    this.amount = amount;
}

function Admin(id, name, password) {
    this.id = id;
    this.name = name;
    this.password = password;
}
document.querySelector('.nav-1').onclick = function() {
    this.classList.add('navigation');
    this.nextElementSibling.classList.remove('navigation');
    document.getElementsByName('id')[0].innerHTML = 'Admin ID';
}
document.querySelector('.nav-2').onclick = function() {
    this.classList.add('navigation');
    document.querySelector('.nav-1').classList.remove('navigation');
    document.getElementsByName('id')[0].innerHTML = 'Customer ID';
}
let transactions1 = [new Transactions('1,000', ('11/11/2020'), 'debited'), new Transactions('3,000', ('11/11/2020'), 'debited'), new Transactions('1,100', ('24/12/2020'), 'debited')];
let transactions2 = [new Transactions('2,000', ('15/12/2020'), 'debited'), new Transactions('5,000', ('21/12/2020'), 'debited')];
let transactions3 = [new Transactions('1,500', ('1/11/2020'), 'debited'), new Transactions('2,000', ('12/11/2020'), 'debited')];
let transactions4 = [new Transactions('3,000', ('29/8/2020'), 'debited'), new Transactions('3,000', ('14/10/2020'), 'debited')];
let transactions5 = [new Transactions('4,500', ('23/9/2020'), 'debited'), new Transactions('1,000', ('20/10/2020'), 'debited')];
let fixedDepositeList1 = [new FixedDeposites("1 Year", '5,000', '10/12/2020'), new FixedDeposites("5 Years", '1,00,000', '20/12/2020')];
let fixedDepositeList2 = [new FixedDeposites("1 Year", '6,000', '10/12/2020'), new FixedDeposites("5 Years", '50,000', '20/12/2020')];
let fixedDepositeList3 = [new FixedDeposites("1 Year", '7,000', '10/12/2020'), new FixedDeposites("5 Years", '1,10,000', '20/12/2020')];
let fixedDepositeList4 = [new FixedDeposites("1 Year", '5,500', '10/12/2020'), new FixedDeposites("5 Years", '1,20,000', '20/12/2020')];
let fixedDepositeList5 = [new FixedDeposites("1 Year", '6,500', '10/12/2020'), new FixedDeposites("5 Years", '1,00,000', '20/12/2020')];
let user1 = new Customers(1, "Mohammad Vempalli", 'Mohammad*', 21000, transactions1, fixedDepositeList1);
let user2 = new Customers(2, "Saketh Kota", 'Saketh*', 30000, transactions2, fixedDepositeList2);
let user3 = new Customers(3, "Akhil karankoti", 'Akhil*', 25000, transactions3, fixedDepositeList3);
let user4 = new Customers(4, "Nikhil Chitineni", 'Nikhil*', 30000, transactions4, fixedDepositeList4);
let user5 = new Customers(5, "Bharath Guntaka", 'Bharath*', 40000, transactions5, fixedDepositeList5);
let listOfCustomers = [user1, user2, user3, user4, user5];
if (!(localStorage.getItem('users'))) {
    localStorage.setItem("users", JSON.stringify(listOfCustomers));
}
let adminList = [new Admin(11, 'Admin1', "Admin1*"), new Admin(12, 'Admin2', "Admin2*"), new Admin(13, 'Admin3', 'Admin3*')];
localStorage.setItem('admins', JSON.stringify(adminList));
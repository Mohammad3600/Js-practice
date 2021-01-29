(self["webpackChunkpoc"] = self["webpackChunkpoc"] || []).push([["customer"],{

/***/ "./src/CustomerPage/CustomerDetails.js":
/*!*********************************************!*\
  !*** ./src/CustomerPage/CustomerDetails.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Firebase-Config */ "./src/Firebase-Config.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities */ "./src/Utilities.js");
/* harmony import */ var _commonstyles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonstyles.css */ "./src/commonstyles.css");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var _customerstyles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customerstyles.css */ "./src/CustomerPage/customerstyles.css");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




 // import '../../node_modules/bootstrap/dist/css/bootstrap.css';


var loginUser; //This will fetch login user and fill tables in page

_Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').doc('loginid').get().then(function (data) {
  var login = data.data();
  _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').where('id', '==', login.loginCred).get().then(function (snap) {
    loginUser = snap.docs[0].data(); //writing the user id,name in html page

    document.getElementById('id').innerHTML = ":  ".concat(loginUser.id);
    document.getElementById('name').innerHTML = ":  ".concat(loginUser.username);
    document.getElementById('username').innerHTML = loginUser.username; //the below functions called every time when page reloaded, and this will be fill balance, transaction and deposits tables

    fillBalance(loginUser.balance);
    fillTransactionTable();
    fillFixedDepositePlans();
  });
});
/**
 * This will update loginuser details in firebase
 * @param {object} snapshot 
 */

function updateUser(snapshot) {
  snapshot.docs.forEach(function (doc) {
    return _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').doc(doc.id).set(loginUser);
  });
}
/**
 * This function add money in the savings account and append a transaction
 * We are getting money entered in the .money textbox which should be not empty then we create a transaction object
 * loginUser contains all user info and we are adding current transaction to it and adding entered amount to balance
 * and changing that object in userlist.
 */


document.getElementById('add').onclick = function () {
  var getMoney = document.getElementById('money').value;
  document.getElementById('money').value = '';
  values.money = '';

  if (getMoney === '') {
    document.querySelector('.errorMsg-1').innerHTML = 'Please Enter Amount';
  } else if (!/^\d{0,15}$/.test(getMoney)) {
    document.querySelector('.errorMsg-1').innerHTML = 'Please Enter Valid Amount';
  } else {
    var transaction = {
      date: (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(new Date().toLocaleDateString()),
      amount: parseInt(getMoney)
    };
    loginUser.transactions.credited.unshift(transaction);
    transaction = {
      date: (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(new Date().toLocaleDateString()),
      type: 'credited',
      amount: (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.currencyFormat)(getMoney)
    };
    loginUser.balance += parseInt(getMoney);
    _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').where('id', '==', loginUser.id).get().then(updateUser);
    addTransaction(transaction, '.Transaction-table');
    fillBalance(loginUser.balance);
  }
};
/**
 * This function  append a transaction to a table
 * @param {object} transaction 
 * @param {string} tableclassName 
 */


function addTransaction(transaction, tableclassName) {
  var table = document.querySelector(tableclassName);
  var tbody = table.lastElementChild;
  var tr = document.createElement('tr');

  for (var value in transaction) {
    tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)(transaction[value]));
  }

  if (tableclassName === '.FixedDeposite-table') {
    tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.calculateEstimatedAmount)(transaction));
    tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.calculateMaturityDate)(transaction));
    tbody.appendChild(tr);
  }

  tbody.insertBefore(tr, tbody.children[0]);
}
/**
 * This function will debit the entered money in user's balance and added a transaction in users transactions
 */


document.getElementById('debit').onclick = function () {
  var getMoney = document.getElementById('money-debit').value;
  values['money-debit'] = '';
  document.getElementById('money-debit').value = '';

  if (getMoney === '') {
    document.querySelector('.errorMsg-2').innerHTML = 'Please Enter Amount';
  } else if (!/^\d{0,15}$/.test(getMoney)) {
    document.querySelector('.errorMsg-2').innerHTML = 'Please Enter Valid Amount';
  } else if (loginUser.balance < parseInt(getMoney)) {
    document.querySelector('.errorMsg-2').innerHTML = 'Not Enough Balance';
  } else {
    var transaction = {
      date: (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(new Date().toLocaleDateString()),
      amount: parseInt(getMoney)
    };
    loginUser.transactions.debited.unshift(transaction);
    transaction = {
      date: (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(new Date().toLocaleDateString()),
      type: 'dedited',
      amount: (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.currencyFormat)(getMoney)
    };
    loginUser.balance -= parseInt(getMoney);
    _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').where('id', '==', loginUser.id).get().then(updateUser);
    addTransaction(transaction, '.Transaction-table');
    fillBalance(loginUser.balance);
  }
};
/**
 * This function will add the DOM table-rows in .Transaction-table with user's Transactions object values
 */


function fillTransactionTable() {
  var table = document.querySelector('.Transaction-table');
  var tbody = table.lastElementChild;
  var transactions = loginUser.transactions;

  var _iterator = _createForOfIteratorHelper(transactions.credited),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var transaction = _step.value;
      var tr = document.createElement('tr');
      tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)(transaction.date));
      tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)("credited"));
      tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.currencyFormat)(transaction.amount)));
      tbody.appendChild(tr);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(transactions.debited),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _transaction = _step2.value;

      var _tr = document.createElement('tr');

      _tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)(_transaction.date));

      _tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)("dedited"));

      _tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.currencyFormat)(_transaction.amount)));

      tbody.appendChild(_tr);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
/**
 * This function will get entered amount from .amount and if it is less than 5,000 then it displays error message in webpage
 * checked letiable will get checked radio button and then creating deposite object having date , type, plantype and currency format
 */


document.querySelector('.addAmount').onclick = function () {
  var getAmount = document.getElementById('amount').value;
  document.getElementById('amount').value = '';

  if (getAmount === '') {
    document.querySelector('.errorMsg-3').innerHTML = 'Please Enter Amount';
  } else if (!/^\d{0,15}$/.test(getAmount)) {
    document.querySelector('.errorMsg-3').innerHTML = 'Please Enter Valid Amount';
  } else if (parseInt(getAmount) < 5000) {
    document.querySelector('.errorMsg-3').innerHTML = 'Minimum Amount is ₹ 5,000';
  } else {
    var checked = document.querySelector('input[type=radio]:checked');
    var plantype = checked.value == 1 ? '1 Year' : '5 Years';
    var deposite = {
      date: (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(new Date().toLocaleDateString()),
      type: plantype,
      amount: parseInt(getAmount)
    };
    loginUser.fixedDeposites.unshift(deposite);
    deposite.amount = getAmount;
    _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').where('id', '==', loginUser.id).get().then(updateUser);
    addTransaction(deposite, '.FixedDeposite-table');
  }
};
/**
 * This function will add the DOM table-rows in .FixedDeposite-table with user's fixedDeposite's list
 */


function fillFixedDepositePlans() {
  var table = document.querySelector('.FixedDeposite-table');
  var tbody = table.lastElementChild;
  var deposites = loginUser.fixedDeposites;

  var _iterator3 = _createForOfIteratorHelper(deposites),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var deposite = _step3.value;
      var tr = document.createElement('tr');
      tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)(deposite.date));
      tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)(deposite.type));
      tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.currencyFormat)(deposite.amount)));
      tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.calculateEstimatedAmount)(deposite));
      tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.calculateMaturityDate)(deposite));
      tbody.appendChild(tr);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
/**
 * This function balance total balance in .display balance
 * @param {number} balance 
 */


function fillBalance(balance) {
  document.querySelector('.display-balance').innerHTML = '₹ ' + (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.currencyFormat)(balance);
}
/**
 * This function Transfers money from one account to another
 */


document.getElementById('send').onclick = function () {
  var id = document.getElementById('customer-id').value;
  var cash = document.getElementById('cash').value;
  var error1 = document.getElementById('error-1');
  var error2 = document.getElementById('error-2');

  if (id === '') {
    error1.innerHTML = 'Please Enter Customer-ID';
  }

  if (cash === '') {
    error2.innerHTML = 'Please Enter Amount';
    return;
  }

  if (!/^\d{8}$/.test(id)) {
    error1.innerHTML = "Invalid Customer-ID";
  } else {
    if (!/^\d{1,15}$/.test(cash)) {
      error2.innerHTML = 'Please Enter Valid Amount';
    } else {
      _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').where('id', '==', id).get().then(function (snap) {
        var user = snap.docs[0].data();

        if (user === undefined) {
          error1.innerHTML = "Customer not Found";
        } else if (user.id === loginUser.id) {
          error1.innerHTML = "Login User id is not same as this id";
        } else {
          if (loginUser.balance <= parseInt(cash)) {
            error2.innerHTML = 'Not Enough Balance';
          } else {
            var transaction = {
              date: (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(new Date().toLocaleDateString()),
              amount: parseInt(cash)
            };
            loginUser.transactions.debited.unshift(transaction);
            user.transactions.credited.unshift(transaction);
            user.balance += parseInt(cash);
            transaction = {
              date: (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(new Date().toLocaleDateString()),
              type: 'dedited',
              amount: (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.currencyFormat)(cash)
            };
            loginUser.balance -= parseInt(cash);
            _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').where('id', '==', loginUser.id).get().then(updateUser);
            addTransaction(transaction, '.Transaction-table');
            fillBalance(loginUser.balance);
            _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').doc(snap.docs[0].id).set(user);
            document.getElementById('customer-id').value = '';
            document.getElementById('cash').value = '';
            document.querySelector('.alert-success').classList.remove('d-none');
          }
        }
      });
    }
  }
}; // Getting the all navigations and containers


var savingsNav = document.querySelector('.savings-dropdown');
var depositNav = document.querySelector('.Deposite-dropdown');
var transferNav = document.querySelector('.transfer-dropdown');
var savingsContainer = document.querySelector('.savings-container');
var depositContainer = document.querySelector('.deposite-container');
var transferContainer = document.querySelector('.transfer-container');

transferNav.onclick = function () {
  return (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.switchNavigation)(transferNav, savingsNav, depositNav, transferContainer, savingsContainer, depositContainer);
};

savingsNav.onclick = function () {
  return (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.switchNavigation)(savingsNav, transferNav, depositNav, savingsContainer, transferContainer, depositContainer);
};

depositNav.onclick = function () {
  return (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.switchNavigation)(depositNav, transferNav, savingsNav, depositContainer, transferContainer, savingsContainer);
};
/**
 * this afunction will remove the customer-d in sessionStorage and redirect to login page
 */


document.getElementById('Logout').onclick = function () {
  _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').doc('loginid')["delete"]().then(function () {
    return location.assign('index.html');
  });
}; //ongetting focus on #money, Error message no longer displayed


document.getElementById('money').onfocus = function () {
  document.querySelector('.errorMsg-1').innerHTML = '';
}; //ongetting focus on #money-debit,Error message no longer displayed


document.getElementById('money-debit').onfocus = function () {
  document.querySelector('.errorMsg-2').innerHTML = '';
}; //ongetting focus on #amount, Error message no longer displayed


document.getElementById('amount').onfocus = function () {
  document.querySelector('.errorMsg-3').innerHTML = '';
}; //On getting focus error message will be gone


document.getElementById('customer-id').onfocus = function () {
  document.getElementById('error-1').innerHTML = '';
  document.querySelector('.alert-success').classList.add('d-none');
}; //On getting focus error message will be gone


document.getElementById('cash').onfocus = function () {
  return document.getElementById('error-2').innerHTML = '';
}; // This will display profile when onclick on the profile icon


document.querySelector('.far').onclick = function () {
  var profile = document.querySelector('.profile');

  if (profile.classList.contains('d-none')) {
    profile.classList.remove('d-none');
  } else {
    profile.classList.add('d-none');
  }
}; //This will redirect to change password page


document.getElementById('Change').onclick = function () {
  location.href = 'change.html?id';
}; //below object has keys as textbox id's so that we can change the textbox values based on its id.


var values = {
  money: '',
  'money-debit': '',
  amount: '',
  cash: ''
};
/**
 * This function triggers when user presses a key on keyboard in textbox then we are storing the values in the range 
 * from 0-9 and if user enters backspace then we are slicing the last character
 * @param {event} e event object
 */

function keydown(e) {
  if (e.keyCode >= 48 && e.keyCode <= 57) {
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

document.getElementById('money').addEventListener('keydown', keydown);
document.getElementById('money').addEventListener('keyup', keyup);
document.getElementById('money-debit').addEventListener('keydown', keydown);
document.getElementById('money-debit').addEventListener('keyup', keyup);
document.getElementById('amount').addEventListener('keydown', keydown);
document.getElementById('amount').addEventListener('keyup', keyup);
document.getElementById('cash').addEventListener('keydown', keydown);
document.getElementById('cash').addEventListener('keyup', keyup);

/***/ }),

/***/ "./src/Firebase-Config.js":
/*!********************************!*\
  !*** ./src/Firebase-Config.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "database": () => /* binding */ database
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");


var firebaseConfig = {
  apiKey: "AIzaSyCn6ydSnULgSSPXeZ2qud1aZAxPggyMwU8",
  authDomain: "bank-fund-management-system.firebaseapp.com",
  projectId: "bank-fund-management-system",
  storageBucket: "bank-fund-management-system.appspot.com",
  messagingSenderId: "757838218833",
  appId: "1:757838218833:web:b1122ee5622d1e402b5a70",
  measurementId: "G-JG771BZ90Z"
}; // Initialize Firebase

firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.initializeApp(firebaseConfig);
var database = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.firestore();
database.settings({
  timestampInSnapshots: true
});


/***/ }),

/***/ "./src/CustomerPage/customerstyles.css":
/*!*********************************************!*\
  !*** ./src/CustomerPage/customerstyles.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/commonstyles.css":
/*!******************************!*\
  !*** ./src/commonstyles.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./src/CustomerPage/CustomerDetails.js","vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_firestore_dist_inde-8a6c07","runtime","shared"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2MvLi9zcmMvQ3VzdG9tZXJQYWdlL0N1c3RvbWVyRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9wb2MvLi9zcmMvRmlyZWJhc2UtQ29uZmlnLmpzIiwid2VicGFjazovL3BvYy8uL3NyYy9DdXN0b21lclBhZ2UvY3VzdG9tZXJzdHlsZXMuY3NzPzc5MjIiLCJ3ZWJwYWNrOi8vcG9jLy4vc3JjL2NvbW1vbnN0eWxlcy5jc3M/NjZlYiJdLCJuYW1lcyI6WyJsb2dpblVzZXIiLCJkYXRhYmFzZSIsImRvYyIsImdldCIsInRoZW4iLCJkYXRhIiwibG9naW4iLCJ3aGVyZSIsImxvZ2luQ3JlZCIsInNuYXAiLCJkb2NzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImlkIiwidXNlcm5hbWUiLCJmaWxsQmFsYW5jZSIsImJhbGFuY2UiLCJmaWxsVHJhbnNhY3Rpb25UYWJsZSIsImZpbGxGaXhlZERlcG9zaXRlUGxhbnMiLCJ1cGRhdGVVc2VyIiwic25hcHNob3QiLCJmb3JFYWNoIiwic2V0Iiwib25jbGljayIsImdldE1vbmV5IiwidmFsdWUiLCJ2YWx1ZXMiLCJtb25leSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXN0IiwidHJhbnNhY3Rpb24iLCJkYXRlIiwiZGF0ZUZvcm1hdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJhbW91bnQiLCJwYXJzZUludCIsInRyYW5zYWN0aW9ucyIsImNyZWRpdGVkIiwidW5zaGlmdCIsInR5cGUiLCJjdXJyZW5jeUZvcm1hdCIsImFkZFRyYW5zYWN0aW9uIiwidGFibGVjbGFzc05hbWUiLCJ0YWJsZSIsInRib2R5IiwibGFzdEVsZW1lbnRDaGlsZCIsInRyIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGRhdGEiLCJjYWxjdWxhdGVFc3RpbWF0ZWRBbW91bnQiLCJjYWxjdWxhdGVNYXR1cml0eURhdGUiLCJpbnNlcnRCZWZvcmUiLCJjaGlsZHJlbiIsImRlYml0ZWQiLCJnZXRBbW91bnQiLCJjaGVja2VkIiwicGxhbnR5cGUiLCJkZXBvc2l0ZSIsImZpeGVkRGVwb3NpdGVzIiwiZGVwb3NpdGVzIiwiY2FzaCIsImVycm9yMSIsImVycm9yMiIsInVzZXIiLCJ1bmRlZmluZWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzYXZpbmdzTmF2IiwiZGVwb3NpdE5hdiIsInRyYW5zZmVyTmF2Iiwic2F2aW5nc0NvbnRhaW5lciIsImRlcG9zaXRDb250YWluZXIiLCJ0cmFuc2ZlckNvbnRhaW5lciIsInN3aXRjaE5hdmlnYXRpb24iLCJsb2NhdGlvbiIsImFzc2lnbiIsIm9uZm9jdXMiLCJhZGQiLCJwcm9maWxlIiwiY29udGFpbnMiLCJocmVmIiwia2V5ZG93biIsImUiLCJrZXlDb2RlIiwidGFyZ2V0Iiwia2V5Iiwic2xpY2UiLCJsZW5ndGgiLCJrZXl1cCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsInNldHRpbmdzIiwidGltZXN0YW1wSW5TbmFwc2hvdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0EsSUFBSUEsU0FBSixDLENBQ0E7O0FBQ0FDLGlFQUFBLENBQW9CLE9BQXBCLEVBQTZCQyxHQUE3QixDQUFpQyxTQUFqQyxFQUE0Q0MsR0FBNUMsR0FBa0RDLElBQWxELENBQXVELFVBQUFDLElBQUksRUFBSTtBQUMzRCxNQUFJQyxLQUFLLEdBQUdELElBQUksQ0FBQ0EsSUFBTCxFQUFaO0FBQ0FKLG1FQUFBLENBQW9CLE9BQXBCLEVBQTZCTSxLQUE3QixDQUFtQyxJQUFuQyxFQUF5QyxJQUF6QyxFQUErQ0QsS0FBSyxDQUFDRSxTQUFyRCxFQUFnRUwsR0FBaEUsR0FBc0VDLElBQXRF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QixDLENBU0E7O0FBQ0FDLCtEQUFBLENBQXVCUixjQUF2QjtBQUNBLElBQU01RixRQUFRLEdBQUdvRywyREFBQSxFQUFqQjtBQUNBcEcsUUFBUSxDQUFDcUcsUUFBVCxDQUFrQjtBQUNkQyxzQkFBb0IsRUFBRTtBQURSLENBQWxCOzs7Ozs7Ozs7Ozs7O0FDZEE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsImZpbGUiOiJjdXN0b21lci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gJy4uL0ZpcmViYXNlLUNvbmZpZyc7XHJcbmltcG9ydCB7IGN1cnJlbmN5Rm9ybWF0LCBjYWxjdWxhdGVNYXR1cml0eURhdGUsIGNhbGN1bGF0ZUVzdGltYXRlZEFtb3VudCwgY3JlYXRlVGRhdGEsIGRhdGVGb3JtYXQsIHN3aXRjaE5hdmlnYXRpb24gfSBmcm9tICcuLi9VdGlsaXRpZXMnO1xyXG5pbXBvcnQgJy4uL2NvbW1vbnN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcclxuaW1wb3J0ICcuL2N1c3RvbWVyc3R5bGVzLmNzcyc7XHJcbmxldCBsb2dpblVzZXI7XHJcbi8vVGhpcyB3aWxsIGZldGNoIGxvZ2luIHVzZXIgYW5kIGZpbGwgdGFibGVzIGluIHBhZ2VcclxuZGF0YWJhc2UuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoJ2xvZ2luaWQnKS5nZXQoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgbGV0IGxvZ2luID0gZGF0YS5kYXRhKCk7XHJcbiAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKCd1c2VycycpLndoZXJlKCdpZCcsICc9PScsIGxvZ2luLmxvZ2luQ3JlZCkuZ2V0KCkudGhlbihzbmFwID0+IHtcclxuICAgICAgICBsb2dpblVzZXIgPSBzbmFwLmRvY3NbMF0uZGF0YSgpO1xyXG4gICAgICAgIC8vd3JpdGluZyB0aGUgdXNlciBpZCxuYW1lIGluIGh0bWwgcGFnZVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZCcpLmlubmVySFRNTCA9IGA6ICAke2xvZ2luVXNlci5pZH1gO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykuaW5uZXJIVE1MID0gYDogICR7bG9naW5Vc2VyLnVzZXJuYW1lfWA7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJykuaW5uZXJIVE1MID0gbG9naW5Vc2VyLnVzZXJuYW1lO1xyXG4gICAgICAgIC8vdGhlIGJlbG93IGZ1bmN0aW9ucyBjYWxsZWQgZXZlcnkgdGltZSB3aGVuIHBhZ2UgcmVsb2FkZWQsIGFuZCB0aGlzIHdpbGwgYmUgZmlsbCBiYWxhbmNlLCB0cmFuc2FjdGlvbiBhbmQgZGVwb3NpdHMgdGFibGVzXHJcbiAgICAgICAgZmlsbEJhbGFuY2UobG9naW5Vc2VyLmJhbGFuY2UpO1xyXG4gICAgICAgIGZpbGxUcmFuc2FjdGlvblRhYmxlKCk7XHJcbiAgICAgICAgZmlsbEZpeGVkRGVwb3NpdGVQbGFucygpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgd2lsbCB1cGRhdGUgbG9naW51c2VyIGRldGFpbHMgaW4gZmlyZWJhc2VcclxuICogQHBhcmFtIHtvYmplY3R9IHNuYXBzaG90IFxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlVXNlcihzbmFwc2hvdCkge1xyXG4gICAgc25hcHNob3QuZG9jcy5mb3JFYWNoKGRvYyA9PiBkYXRhYmFzZS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhkb2MuaWQpLnNldChsb2dpblVzZXIpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gYWRkIG1vbmV5IGluIHRoZSBzYXZpbmdzIGFjY291bnQgYW5kIGFwcGVuZCBhIHRyYW5zYWN0aW9uXHJcbiAqIFdlIGFyZSBnZXR0aW5nIG1vbmV5IGVudGVyZWQgaW4gdGhlIC5tb25leSB0ZXh0Ym94IHdoaWNoIHNob3VsZCBiZSBub3QgZW1wdHkgdGhlbiB3ZSBjcmVhdGUgYSB0cmFuc2FjdGlvbiBvYmplY3RcclxuICogbG9naW5Vc2VyIGNvbnRhaW5zIGFsbCB1c2VyIGluZm8gYW5kIHdlIGFyZSBhZGRpbmcgY3VycmVudCB0cmFuc2FjdGlvbiB0byBpdCBhbmQgYWRkaW5nIGVudGVyZWQgYW1vdW50IHRvIGJhbGFuY2VcclxuICogYW5kIGNoYW5naW5nIHRoYXQgb2JqZWN0IGluIHVzZXJsaXN0LlxyXG4gKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBsZXQgZ2V0TW9uZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9uZXknKS52YWx1ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb25leScpLnZhbHVlID0gJyc7XHJcbiAgICB2YWx1ZXMubW9uZXkgPSAnJztcclxuICAgIGlmIChnZXRNb25leSA9PT0gJycpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JNc2ctMScpLmlubmVySFRNTCA9ICdQbGVhc2UgRW50ZXIgQW1vdW50JztcclxuICAgIH0gZWxzZSBpZiAoISgvXlxcZHswLDE1fSQvLnRlc3QoZ2V0TW9uZXkpKSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvck1zZy0xJykuaW5uZXJIVE1MID0gJ1BsZWFzZSBFbnRlciBWYWxpZCBBbW91bnQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSB7IGRhdGU6IGRhdGVGb3JtYXQobmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSksIGFtb3VudDogcGFyc2VJbnQoZ2V0TW9uZXkpIH07XHJcbiAgICAgICAgbG9naW5Vc2VyLnRyYW5zYWN0aW9ucy5jcmVkaXRlZC51bnNoaWZ0KHRyYW5zYWN0aW9uKTtcclxuICAgICAgICB0cmFuc2FjdGlvbiA9IHsgZGF0ZTogZGF0ZUZvcm1hdChuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKSwgdHlwZTogJ2NyZWRpdGVkJywgYW1vdW50OiBjdXJyZW5jeUZvcm1hdChnZXRNb25leSkgfTtcclxuICAgICAgICBsb2dpblVzZXIuYmFsYW5jZSArPSBwYXJzZUludChnZXRNb25leSk7XHJcbiAgICAgICAgZGF0YWJhc2UuY29sbGVjdGlvbigndXNlcnMnKS53aGVyZSgnaWQnLCAnPT0nLCBsb2dpblVzZXIuaWQpLmdldCgpLnRoZW4odXBkYXRlVXNlcik7XHJcbiAgICAgICAgYWRkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24sICcuVHJhbnNhY3Rpb24tdGFibGUnKTtcclxuICAgICAgICBmaWxsQmFsYW5jZShsb2dpblVzZXIuYmFsYW5jZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uICBhcHBlbmQgYSB0cmFuc2FjdGlvbiB0byBhIHRhYmxlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0cmFuc2FjdGlvbiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHRhYmxlY2xhc3NOYW1lIFxyXG4gKi9cclxuZnVuY3Rpb24gYWRkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24sIHRhYmxlY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhYmxlY2xhc3NOYW1lKTtcclxuICAgIGxldCB0Ym9keSA9IHRhYmxlLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgZm9yIChsZXQgdmFsdWUgaW4gdHJhbnNhY3Rpb24pIHtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZChjcmVhdGVUZGF0YSh0cmFuc2FjdGlvblt2YWx1ZV0pKTtcclxuICAgIH1cclxuICAgIGlmICh0YWJsZWNsYXNzTmFtZSA9PT0gJy5GaXhlZERlcG9zaXRlLXRhYmxlJykge1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKGNhbGN1bGF0ZUVzdGltYXRlZEFtb3VudCh0cmFuc2FjdGlvbikpO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKGNhbGN1bGF0ZU1hdHVyaXR5RGF0ZSh0cmFuc2FjdGlvbikpO1xyXG4gICAgICAgIHRib2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgIH1cclxuICAgIHRib2R5Lmluc2VydEJlZm9yZSh0ciwgdGJvZHkuY2hpbGRyZW5bMF0pO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGRlYml0IHRoZSBlbnRlcmVkIG1vbmV5IGluIHVzZXIncyBiYWxhbmNlIGFuZCBhZGRlZCBhIHRyYW5zYWN0aW9uIGluIHVzZXJzIHRyYW5zYWN0aW9uc1xyXG4gKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYml0Jykub25jbGljayA9ICgpID0+IHtcclxuICAgIGxldCBnZXRNb25leSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb25leS1kZWJpdCcpLnZhbHVlO1xyXG4gICAgdmFsdWVzWydtb25leS1kZWJpdCddID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9uZXktZGViaXQnKS52YWx1ZSA9ICcnO1xyXG4gICAgaWYgKGdldE1vbmV5ID09PSAnJykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvck1zZy0yJykuaW5uZXJIVE1MID0gJ1BsZWFzZSBFbnRlciBBbW91bnQnO1xyXG4gICAgfSBlbHNlIGlmICghKC9eXFxkezAsMTV9JC8udGVzdChnZXRNb25leSkpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yTXNnLTInKS5pbm5lckhUTUwgPSAnUGxlYXNlIEVudGVyIFZhbGlkIEFtb3VudCc7XHJcbiAgICB9IGVsc2UgaWYgKGxvZ2luVXNlci5iYWxhbmNlIDwgcGFyc2VJbnQoZ2V0TW9uZXkpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yTXNnLTInKS5pbm5lckhUTUwgPSAnTm90IEVub3VnaCBCYWxhbmNlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0geyBkYXRlOiBkYXRlRm9ybWF0KG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpLCBhbW91bnQ6IHBhcnNlSW50KGdldE1vbmV5KSB9O1xyXG4gICAgICAgIGxvZ2luVXNlci50cmFuc2FjdGlvbnMuZGViaXRlZC51bnNoaWZ0KHRyYW5zYWN0aW9uKTtcclxuICAgICAgICB0cmFuc2FjdGlvbiA9IHsgZGF0ZTogZGF0ZUZvcm1hdChuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKSwgdHlwZTogJ2RlZGl0ZWQnLCBhbW91bnQ6IGN1cnJlbmN5Rm9ybWF0KGdldE1vbmV5KSB9O1xyXG4gICAgICAgIGxvZ2luVXNlci5iYWxhbmNlIC09IHBhcnNlSW50KGdldE1vbmV5KTtcclxuICAgICAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKCd1c2VycycpLndoZXJlKCdpZCcsICc9PScsIGxvZ2luVXNlci5pZCkuZ2V0KCkudGhlbih1cGRhdGVVc2VyKTtcclxuICAgICAgICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbiwgJy5UcmFuc2FjdGlvbi10YWJsZScpO1xyXG4gICAgICAgIGZpbGxCYWxhbmNlKGxvZ2luVXNlci5iYWxhbmNlKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBhZGQgdGhlIERPTSB0YWJsZS1yb3dzIGluIC5UcmFuc2FjdGlvbi10YWJsZSB3aXRoIHVzZXIncyBUcmFuc2FjdGlvbnMgb2JqZWN0IHZhbHVlc1xyXG4gKi9cclxuZnVuY3Rpb24gZmlsbFRyYW5zYWN0aW9uVGFibGUoKSB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVHJhbnNhY3Rpb24tdGFibGUnKTtcclxuICAgIGxldCB0Ym9keSA9IHRhYmxlLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsZXQgdHJhbnNhY3Rpb25zID0gbG9naW5Vc2VyLnRyYW5zYWN0aW9ucztcclxuICAgIGZvciAobGV0IHRyYW5zYWN0aW9uIG9mIHRyYW5zYWN0aW9ucy5jcmVkaXRlZCkge1xyXG4gICAgICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQoY3JlYXRlVGRhdGEodHJhbnNhY3Rpb24uZGF0ZSkpO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKGNyZWF0ZVRkYXRhKFwiY3JlZGl0ZWRcIikpO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKGNyZWF0ZVRkYXRhKGN1cnJlbmN5Rm9ybWF0KHRyYW5zYWN0aW9uLmFtb3VudCkpKTtcclxuICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCB0cmFuc2FjdGlvbiBvZiB0cmFuc2FjdGlvbnMuZGViaXRlZCkge1xyXG4gICAgICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQoY3JlYXRlVGRhdGEodHJhbnNhY3Rpb24uZGF0ZSkpO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKGNyZWF0ZVRkYXRhKFwiZGVkaXRlZFwiKSk7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQoY3JlYXRlVGRhdGEoY3VycmVuY3lGb3JtYXQodHJhbnNhY3Rpb24uYW1vdW50KSkpO1xyXG4gICAgICAgIHRib2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBnZXQgZW50ZXJlZCBhbW91bnQgZnJvbSAuYW1vdW50IGFuZCBpZiBpdCBpcyBsZXNzIHRoYW4gNSwwMDAgdGhlbiBpdCBkaXNwbGF5cyBlcnJvciBtZXNzYWdlIGluIHdlYnBhZ2VcclxuICogY2hlY2tlZCBsZXRpYWJsZSB3aWxsIGdldCBjaGVja2VkIHJhZGlvIGJ1dHRvbiBhbmQgdGhlbiBjcmVhdGluZyBkZXBvc2l0ZSBvYmplY3QgaGF2aW5nIGRhdGUgLCB0eXBlLCBwbGFudHlwZSBhbmQgY3VycmVuY3kgZm9ybWF0XHJcbiAqL1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQW1vdW50Jykub25jbGljayA9ICgpID0+IHtcclxuICAgIGxldCBnZXRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1vdW50JykudmFsdWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1vdW50JykudmFsdWUgPSAnJztcclxuICAgIGlmIChnZXRBbW91bnQgPT09ICcnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yTXNnLTMnKS5pbm5lckhUTUwgPSAnUGxlYXNlIEVudGVyIEFtb3VudCc7XHJcbiAgICB9IGVsc2UgaWYgKCEoL15cXGR7MCwxNX0kLy50ZXN0KGdldEFtb3VudCkpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yTXNnLTMnKS5pbm5lckhUTUwgPSAnUGxlYXNlIEVudGVyIFZhbGlkIEFtb3VudCc7XHJcbiAgICB9IGVsc2UgaWYgKHBhcnNlSW50KGdldEFtb3VudCkgPCA1MDAwKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yTXNnLTMnKS5pbm5lckhUTUwgPSAnTWluaW11bSBBbW91bnQgaXMg4oK5IDUsMDAwJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkJyk7XHJcbiAgICAgICAgbGV0IHBsYW50eXBlID0gKGNoZWNrZWQudmFsdWUgPT0gMSkgPyAnMSBZZWFyJyA6ICc1IFllYXJzJztcclxuICAgICAgICBsZXQgZGVwb3NpdGUgPSB7IGRhdGU6IGRhdGVGb3JtYXQobmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSksIHR5cGU6IHBsYW50eXBlLCBhbW91bnQ6IHBhcnNlSW50KGdldEFtb3VudCkgfTtcclxuICAgICAgICBsb2dpblVzZXIuZml4ZWREZXBvc2l0ZXMudW5zaGlmdChkZXBvc2l0ZSk7XHJcbiAgICAgICAgZGVwb3NpdGUuYW1vdW50ID0gZ2V0QW1vdW50O1xyXG4gICAgICAgIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ3VzZXJzJykud2hlcmUoJ2lkJywgJz09JywgbG9naW5Vc2VyLmlkKS5nZXQoKS50aGVuKHVwZGF0ZVVzZXIpO1xyXG4gICAgICAgIGFkZFRyYW5zYWN0aW9uKGRlcG9zaXRlLCAnLkZpeGVkRGVwb3NpdGUtdGFibGUnKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBhZGQgdGhlIERPTSB0YWJsZS1yb3dzIGluIC5GaXhlZERlcG9zaXRlLXRhYmxlIHdpdGggdXNlcidzIGZpeGVkRGVwb3NpdGUncyBsaXN0XHJcbiAqL1xyXG5mdW5jdGlvbiBmaWxsRml4ZWREZXBvc2l0ZVBsYW5zKCkge1xyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkZpeGVkRGVwb3NpdGUtdGFibGUnKTtcclxuICAgIGxldCB0Ym9keSA9IHRhYmxlLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsZXQgZGVwb3NpdGVzID0gbG9naW5Vc2VyLmZpeGVkRGVwb3NpdGVzO1xyXG4gICAgZm9yIChsZXQgZGVwb3NpdGUgb2YgZGVwb3NpdGVzKSB7XHJcbiAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZChjcmVhdGVUZGF0YShkZXBvc2l0ZS5kYXRlKSk7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQoY3JlYXRlVGRhdGEoZGVwb3NpdGUudHlwZSkpO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKGNyZWF0ZVRkYXRhKGN1cnJlbmN5Rm9ybWF0KGRlcG9zaXRlLmFtb3VudCkpKTtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZChjYWxjdWxhdGVFc3RpbWF0ZWRBbW91bnQoZGVwb3NpdGUpKTtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZChjYWxjdWxhdGVNYXR1cml0eURhdGUoZGVwb3NpdGUpKTtcclxuICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGJhbGFuY2UgdG90YWwgYmFsYW5jZSBpbiAuZGlzcGxheSBiYWxhbmNlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiYWxhbmNlIFxyXG4gKi9cclxuZnVuY3Rpb24gZmlsbEJhbGFuY2UoYmFsYW5jZSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktYmFsYW5jZScpLmlubmVySFRNTCA9ICfigrkgJyArIGN1cnJlbmN5Rm9ybWF0KGJhbGFuY2UpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBUcmFuc2ZlcnMgbW9uZXkgZnJvbSBvbmUgYWNjb3VudCB0byBhbm90aGVyXHJcbiAqL1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZCcpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBsZXQgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tZXItaWQnKS52YWx1ZTtcclxuICAgIGxldCBjYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc2gnKS52YWx1ZTtcclxuICAgIGxldCBlcnJvcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItMScpO1xyXG4gICAgbGV0IGVycm9yMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci0yJyk7XHJcbiAgICBpZiAoaWQgPT09ICcnKSB7XHJcbiAgICAgICAgZXJyb3IxLmlubmVySFRNTCA9ICdQbGVhc2UgRW50ZXIgQ3VzdG9tZXItSUQnO1xyXG4gICAgfVxyXG4gICAgaWYgKGNhc2ggPT09ICcnKSB7XHJcbiAgICAgICAgZXJyb3IyLmlubmVySFRNTCA9ICdQbGVhc2UgRW50ZXIgQW1vdW50JztcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIS9eXFxkezh9JC8udGVzdChpZCkpIHtcclxuICAgICAgICBlcnJvcjEuaW5uZXJIVE1MID0gXCJJbnZhbGlkIEN1c3RvbWVyLUlEXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghL15cXGR7MSwxNX0kLy50ZXN0KGNhc2gpKSB7XHJcbiAgICAgICAgICAgIGVycm9yMi5pbm5lckhUTUwgPSAnUGxlYXNlIEVudGVyIFZhbGlkIEFtb3VudCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YWJhc2UuY29sbGVjdGlvbigndXNlcnMnKS53aGVyZSgnaWQnLCAnPT0nLCBpZCkuZ2V0KCkudGhlbihzbmFwID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gc25hcC5kb2NzWzBdLmRhdGEoKTtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjEuaW5uZXJIVE1MID0gXCJDdXN0b21lciBub3QgRm91bmRcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodXNlci5pZCA9PT0gbG9naW5Vc2VyLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IxLmlubmVySFRNTCA9IFwiTG9naW4gVXNlciBpZCBpcyBub3Qgc2FtZSBhcyB0aGlzIGlkXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2dpblVzZXIuYmFsYW5jZSA8PSBwYXJzZUludChjYXNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjIuaW5uZXJIVE1MID0gJ05vdCBFbm91Z2ggQmFsYW5jZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0geyBkYXRlOiBkYXRlRm9ybWF0KG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpLCBhbW91bnQ6IHBhcnNlSW50KGNhc2gpIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luVXNlci50cmFuc2FjdGlvbnMuZGViaXRlZC51bnNoaWZ0KHRyYW5zYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci50cmFuc2FjdGlvbnMuY3JlZGl0ZWQudW5zaGlmdCh0cmFuc2FjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuYmFsYW5jZSArPSBwYXJzZUludChjYXNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSB7IGRhdGU6IGRhdGVGb3JtYXQobmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSksIHR5cGU6ICdkZWRpdGVkJywgYW1vdW50OiBjdXJyZW5jeUZvcm1hdChjYXNoKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpblVzZXIuYmFsYW5jZSAtPSBwYXJzZUludChjYXNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2UuY29sbGVjdGlvbigndXNlcnMnKS53aGVyZSgnaWQnLCAnPT0nLCBsb2dpblVzZXIuaWQpLmdldCgpLnRoZW4odXBkYXRlVXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCAnLlRyYW5zYWN0aW9uLXRhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxCYWxhbmNlKGxvZ2luVXNlci5iYWxhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2UuY29sbGVjdGlvbigndXNlcnMnKS5kb2Moc25hcC5kb2NzWzBdLmlkKS5zZXQodXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21lci1pZCcpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXNoJykudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0LXN1Y2Nlc3MnKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gR2V0dGluZyB0aGUgYWxsIG5hdmlnYXRpb25zIGFuZCBjb250YWluZXJzXHJcbmxldCBzYXZpbmdzTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmluZ3MtZHJvcGRvd24nKTtcclxubGV0IGRlcG9zaXROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRGVwb3NpdGUtZHJvcGRvd24nKTtcclxubGV0IHRyYW5zZmVyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYW5zZmVyLWRyb3Bkb3duJyk7XHJcbmxldCBzYXZpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmluZ3MtY29udGFpbmVyJyk7XHJcbmxldCBkZXBvc2l0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlcG9zaXRlLWNvbnRhaW5lcicpO1xyXG5sZXQgdHJhbnNmZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhbnNmZXItY29udGFpbmVyJyk7XHJcbnRyYW5zZmVyTmF2Lm9uY2xpY2sgPSAoKSA9PiBzd2l0Y2hOYXZpZ2F0aW9uKHRyYW5zZmVyTmF2LCBzYXZpbmdzTmF2LCBkZXBvc2l0TmF2LCB0cmFuc2ZlckNvbnRhaW5lciwgc2F2aW5nc0NvbnRhaW5lciwgZGVwb3NpdENvbnRhaW5lcik7XHJcbnNhdmluZ3NOYXYub25jbGljayA9ICgpID0+IHN3aXRjaE5hdmlnYXRpb24oc2F2aW5nc05hdiwgdHJhbnNmZXJOYXYsIGRlcG9zaXROYXYsIHNhdmluZ3NDb250YWluZXIsIHRyYW5zZmVyQ29udGFpbmVyLCBkZXBvc2l0Q29udGFpbmVyKTtcclxuZGVwb3NpdE5hdi5vbmNsaWNrID0gKCkgPT4gc3dpdGNoTmF2aWdhdGlvbihkZXBvc2l0TmF2LCB0cmFuc2Zlck5hdiwgc2F2aW5nc05hdiwgZGVwb3NpdENvbnRhaW5lciwgdHJhbnNmZXJDb250YWluZXIsIHNhdmluZ3NDb250YWluZXIpO1xyXG4vKipcclxuICogdGhpcyBhZnVuY3Rpb24gd2lsbCByZW1vdmUgdGhlIGN1c3RvbWVyLWQgaW4gc2Vzc2lvblN0b3JhZ2UgYW5kIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcclxuICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb2dvdXQnKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgZGF0YWJhc2UuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoJ2xvZ2luaWQnKS5kZWxldGUoKS50aGVuKCgpID0+IGxvY2F0aW9uLmFzc2lnbignaW5kZXguaHRtbCcpKTtcclxufVxyXG5cclxuLy9vbmdldHRpbmcgZm9jdXMgb24gI21vbmV5LCBFcnJvciBtZXNzYWdlIG5vIGxvbmdlciBkaXNwbGF5ZWRcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbmV5Jykub25mb2N1cyA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvck1zZy0xJykuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbi8vb25nZXR0aW5nIGZvY3VzIG9uICNtb25leS1kZWJpdCxFcnJvciBtZXNzYWdlIG5vIGxvbmdlciBkaXNwbGF5ZWRcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbmV5LWRlYml0Jykub25mb2N1cyA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvck1zZy0yJykuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbi8vb25nZXR0aW5nIGZvY3VzIG9uICNhbW91bnQsIEVycm9yIG1lc3NhZ2Ugbm8gbG9uZ2VyIGRpc3BsYXllZFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1vdW50Jykub25mb2N1cyA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvck1zZy0zJykuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbi8vT24gZ2V0dGluZyBmb2N1cyBlcnJvciBtZXNzYWdlIHdpbGwgYmUgZ29uZVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tZXItaWQnKS5vbmZvY3VzID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLTEnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC1zdWNjZXNzJykuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbn07XHJcblxyXG4vL09uIGdldHRpbmcgZm9jdXMgZXJyb3IgbWVzc2FnZSB3aWxsIGJlIGdvbmVcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc2gnKS5vbmZvY3VzID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLTInKS5pbm5lckhUTUwgPSAnJztcclxuXHJcbi8vIFRoaXMgd2lsbCBkaXNwbGF5IHByb2ZpbGUgd2hlbiBvbmNsaWNrIG9uIHRoZSBwcm9maWxlIGljb25cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhcicpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlJyk7XHJcbiAgICBpZiAocHJvZmlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Qtbm9uZScpKSB7XHJcbiAgICAgICAgcHJvZmlsZS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvZmlsZS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy9UaGlzIHdpbGwgcmVkaXJlY3QgdG8gY2hhbmdlIHBhc3N3b3JkIHBhZ2VcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NoYW5nZScpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBsb2NhdGlvbi5ocmVmID0gJ2NoYW5nZS5odG1sP2lkJztcclxufVxyXG5cclxuLy9iZWxvdyBvYmplY3QgaGFzIGtleXMgYXMgdGV4dGJveCBpZCdzIHNvIHRoYXQgd2UgY2FuIGNoYW5nZSB0aGUgdGV4dGJveCB2YWx1ZXMgYmFzZWQgb24gaXRzIGlkLlxyXG5sZXQgdmFsdWVzID0geyBtb25leTogJycsICdtb25leS1kZWJpdCc6ICcnLCBhbW91bnQ6ICcnLCBjYXNoOiAnJyB9O1xyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiB0cmlnZ2VycyB3aGVuIHVzZXIgcHJlc3NlcyBhIGtleSBvbiBrZXlib2FyZCBpbiB0ZXh0Ym94IHRoZW4gd2UgYXJlIHN0b3JpbmcgdGhlIHZhbHVlcyBpbiB0aGUgcmFuZ2UgXHJcbiAqIGZyb20gMC05IGFuZCBpZiB1c2VyIGVudGVycyBiYWNrc3BhY2UgdGhlbiB3ZSBhcmUgc2xpY2luZyB0aGUgbGFzdCBjaGFyYWN0ZXJcclxuICogQHBhcmFtIHtldmVudH0gZSBldmVudCBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIGtleWRvd24oZSkge1xyXG4gICAgaWYgKChlLmtleUNvZGUgPj0gNDggJiYgZS5rZXlDb2RlIDw9IDU3KSkge1xyXG4gICAgICAgIHZhbHVlc1tlLnRhcmdldC5pZF0gPSB2YWx1ZXNbZS50YXJnZXQuaWRdICsgZS5rZXk7XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSA4KSB7XHJcbiAgICAgICAgdmFsdWVzW2UudGFyZ2V0LmlkXSA9IHZhbHVlc1tlLnRhcmdldC5pZF0uc2xpY2UoMCwgbGVuZ3RoIC0gMSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIG9uIGtleXVwIHdlIGFyZSBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGV4dGJveFxyXG4gKiBAcGFyYW0ge2V2ZW50fSBlIGV2ZW50IG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24ga2V5dXAoZSkge1xyXG4gICAgZS50YXJnZXQudmFsdWUgPSB2YWx1ZXNbZS50YXJnZXQuaWRdO1xyXG59XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb25leScpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbmV5JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXl1cCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb25leS1kZWJpdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbmV5LWRlYml0JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXl1cCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbW91bnQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bik7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbW91bnQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleXVwKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc2gnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bik7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXNoJykuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXl1cCk7IiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5Q242eWRTblVMZ1NTUFhlWjJxdWQxYVpBeFBnZ3lNd1U4XCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImJhbmstZnVuZC1tYW5hZ2VtZW50LXN5c3RlbS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJiYW5rLWZ1bmQtbWFuYWdlbWVudC1zeXN0ZW1cIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiYmFuay1mdW5kLW1hbmFnZW1lbnQtc3lzdGVtLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI3NTc4MzgyMTg4MzNcIixcclxuICAgIGFwcElkOiBcIjE6NzU3ODM4MjE4ODMzOndlYjpiMTEyMmVlNTYyMmQxZTQwMmI1YTcwXCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctSkc3NzFCWjkwWlwiXHJcbn07XHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmRhdGFiYXNlLnNldHRpbmdzKHtcclxuICAgIHRpbWVzdGFtcEluU25hcHNob3RzOiB0cnVlXHJcbn0pO1xyXG5leHBvcnQgeyBkYXRhYmFzZSB9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=
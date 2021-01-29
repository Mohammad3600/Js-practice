(self["webpackChunkpoc"] = self["webpackChunkpoc"] || []).push([["bank"],{

/***/ "./src/BankUsers.js":
/*!**************************!*\
  !*** ./src/BankUsers.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ intializeData
/* harmony export */ });
/* harmony import */ var _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Firebase-Config */ "./src/Firebase-Config.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This function stores the data in firebase
 */

function intializeData() {
  // ENCRYPTION KEY
  var key = "ASECRET"; //user1 data

  var usertrans1 = {
    credited: [{
      date: '11-11-2020',
      amount: 1000
    }, {
      date: '11-11-2020',
      amount: 3100
    }],
    debited: [{
      date: '24-12-2020',
      amount: 1100
    }]
  };
  var userdeposits1 = [{
    date: '10-12-2020',
    type: '1 Year',
    amount: 10000
  }, {
    date: '10-12-2020',
    type: '5 Year',
    amount: 1000000
  }];
  var user1 = {
    id: '12345671',
    username: 'Mohammad',
    password: crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt('Mohammad123*', key).toString(),
    balance: 21000,
    transactions: usertrans1,
    fixedDeposites: userdeposits1
  }; //user2 data

  var usertrans2 = {
    credited: [{
      date: '11-11-2020',
      amount: 4000
    }, {
      date: '11-11-2020',
      amount: 5100
    }],
    debited: [{
      date: '24-12-2020',
      amount: 1100
    }]
  };
  var userdeposits2 = [{
    date: '10-12-2020',
    type: '1 Year',
    amount: 50000
  }, {
    date: '10-12-2020',
    type: '5 Year',
    amount: 10000
  }];
  var user2 = {
    id: '12345672',
    username: 'Saketh',
    password: crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt('Saketh123*', key).toString(),
    balance: 30000,
    transactions: usertrans2,
    fixedDeposites: userdeposits2
  }; //user3 data

  var usertrans3 = {
    credited: [{
      date: '11-11-2020',
      amount: 1000
    }, {
      date: '11-11-2020',
      amount: 3100
    }],
    debited: [{
      date: '24-12-2020',
      amount: 1100
    }]
  };
  var userdeposits3 = [{
    date: '10-12-2020',
    type: '1 Year',
    amount: 50000
  }, {
    date: '10-12-2020',
    type: '5 Year',
    amount: 10000
  }];
  var user3 = {
    id: '12345673',
    username: 'Akhil',
    password: crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt('Akhil123*', key).toString(),
    balance: 50000,
    transactions: usertrans3,
    fixedDeposites: userdeposits3
  }; //user4 data

  var usertrans4 = {
    credited: [{
      date: '11-11-2020',
      amount: 1000
    }, {
      date: '11-11-2020',
      amount: 3100
    }],
    debited: [{
      date: '24-12-2020',
      amount: 1100
    }]
  };
  var userdeposits4 = [{
    date: '10-12-2020',
    type: '1 Year',
    amount: 50000
  }, {
    date: '10-12-2020',
    type: '5 Year',
    amount: 10000
  }];
  var user4 = {
    id: '12345674',
    username: 'Nikhil',
    password: crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt('Nikhil123*', key).toString(),
    balance: 60000,
    transactions: usertrans4,
    fixedDeposites: userdeposits4
  }; //user5 data

  var usertrans5 = {
    credited: [{
      date: '11-11-2020',
      amount: 1000
    }, {
      date: '11-11-2020',
      amount: 3100
    }],
    debited: [{
      date: '24-12-2020',
      amount: 1100
    }]
  };
  var userdeposits5 = [{
    date: '10-12-2020',
    type: '1 Year',
    amount: 50000
  }, {
    date: '10-12-2020',
    type: '5 Year',
    amount: 10000
  }];
  var user5 = {
    id: '12345675',
    username: 'Bharath',
    password: crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt('Bharath123*', key).toString(),
    balance: 40000,
    transactions: usertrans5,
    fixedDeposites: userdeposits5
  }; //adding users data to firebase

  _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').get().then(function (snap) {
    if (!snap.docs.length) {
      _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').add(user1);
      _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').add(user2);
      _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').add(user3);
      _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').add(user4);
      _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').add(user5);
    } // database.collection('users').add(trialuser);

  }); //admin1

  var admin1 = {
    name: 'Vasudevan Dandey',
    email: 'vasu@gmail.com',
    password: crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt('Vasu123*', key).toString()
  };
  var admin2 = {
    name: 'Tavish Agarwal',
    email: 'tavish@gmail.com',
    password: crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt('Tavish123*', key).toString()
  };
  var admin3 = {
    name: 'Jagadish',
    email: 'jagadish@gmail.com',
    password: crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt('Jagadish123*', key).toString()
  };
  var admin4 = {
    name: 'Chaitanya',
    email: 'chaitanya@gmail.com',
    password: crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt('Chaitanya123*', key).toString()
  }; //adding admin data to firebase

  _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('admins').get().then(function (snap) {
    if (!snap.docs.length) {
      _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('admins').add(admin1);
      _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('admins').add(admin2);
      _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('admins').add(admin3);
      _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('admins').add(admin4);
    }
  });
}
;

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

/***/ "./src/Validation.js":
/*!***************************!*\
  !*** ./src/Validation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Firebase-Config */ "./src/Firebase-Config.js");
/* harmony import */ var _commonstyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonstyles.css */ "./src/commonstyles.css");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var _BankUsers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BankUsers */ "./src/BankUsers.js");


 // import '../node_modules/bootstrap/dist/css/bootstrap.css';


 //Intializing data in firebase

(0,_BankUsers__WEBPACK_IMPORTED_MODULE_4__.default)(); // ENCRYPTION KEY

var key = "ASECRET";
/**
 * when users presses the login button this function checking the id and password and display error messages if entered wrong
 * if the credentials are valid admin will redirect to admin page and customer will redirect to customer page
 * @param {*} event form event
 */

document.forms.UserForm.onsubmit = function (event) {
  event.preventDefault();
  var userid = event.target.userid;
  var password = event.target.password;
  var idError = document.getElementById('idError');
  var passwordError = document.getElementById('passwordError');

  if (document.getElementsByName('id')[0].innerHTML === 'Customer ID') {
    if (userid.value === '') {
      idError.innerHTML = 'Please Fill Customer ID';
    } else if (!/\d{8}/.test(userid.value)) {
      idError.innerHTML = 'Invalid Customer ID';
    }

    if (password.value === '') {
      passwordError.innerHTML = 'Please Enter Password';
      return false;
    }

    getUser(userid.value, password.value, 'users');
  } else {
    if (userid.value === '') {
      idError.innerHTML = 'Please Fill Admin Email';
    } else if (!/^[\w_.-]+@[\w_.-]+\.\b(com|au|in)\b$/.test(userid.value)) {
      idError.innerHTML = 'Invalid Admin Email';
    }

    if (password.value === '') {
      passwordError.innerHTML = 'Please Enter Password';
      return false;
    }

    getUser(userid.value, password.value, 'admins');
  }
};
/**
 * This function finds the user in firebase and matching password to login then redirect to customer page/Admin Page
 * @param {string} id 
 * @param {string} password 
 * @param {string} userType
 */


function getUser(id, password, userType) {
  var loginId = userType === 'users' ? 'id' : 'email';
  _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection(userType).where(loginId, '==', id).get().then(function (snap) {
    if (snap.docs.length) {
      var user = snap.docs[0].data();
      var decipher = crypto_js__WEBPACK_IMPORTED_MODULE_2___default().AES.decrypt(user.password, key);
      decipher = decipher.toString((crypto_js__WEBPACK_IMPORTED_MODULE_2___default().enc.Utf8));

      if (decipher === password) {
        _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection(userType).doc("login".concat(loginId)).set({
          loginCred: user[loginId]
        }).then(function () {
          window.location.assign(userType === 'users' ? 'customer.html' : 'admin.html');
        });
      } else {
        document.getElementById('passwordError').innerHTML = 'Invalid Password';
      }
    } else {
      document.getElementById('passwordError').innerHTML = "Invalid ".concat(userType === 'users' ? 'Customer ID' : 'Admin Email', "/Password");
    }
  });
} //when userid gets focus it Error message will bot be displayed


document.getElementById('userid').onfocus = function () {
  return document.getElementById('idError').innerHTML = '';
}; //when #password gets focus it Error message will bot be displayed


document.getElementById('password').onfocus = function () {
  return document.getElementById('passwordError').innerHTML = '';
}; //changing from one to another navigation bars


document.getElementById('Customer-btn').onclick = function (event) {
  event.target.classList.add('bg-select');
  document.getElementById('Admin-btn').classList.remove('bg-select');
  document.getElementsByName('id')[0].innerHTML = 'Customer ID';
  document.getElementById('idError').innerHTML = '';
  document.getElementById('passwordError').innerHTML = '';
};

document.getElementById('Admin-btn').onclick = function (event) {
  event.target.classList.add('bg-select');
  document.getElementById('Customer-btn').classList.remove('bg-select');
  document.getElementsByName('id')[0].innerHTML = 'Admin Email';
  document.getElementById('idError').innerHTML = '';
  document.getElementById('passwordError').innerHTML = '';
};

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
0,[["./src/Validation.js","runtime","vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_firestore_dist_inde-8a6c07","vendors-node_modules_crypto-js_index_js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2MvLi9zcmMvQmFua1VzZXJzLmpzIiwid2VicGFjazovL3BvYy8uL3NyYy9GaXJlYmFzZS1Db25maWcuanMiLCJ3ZWJwYWNrOi8vcG9jLy4vc3JjL1ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vcG9jLy4vc3JjL2NvbW1vbnN0eWxlcy5jc3M/NjZlYiJdLCJuYW1lcyI6WyJpbnRpYWxpemVEYXRhIiwia2V5IiwidXNlcnRyYW5zMSIsImNyZWRpdGVkIiwiZGF0ZSIsImFtb3VudCIsImRlYml0ZWQiLCJ1c2VyZGVwb3NpdHMxIiwidHlwZSIsInVzZXIxIiwiaWQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiQ3J5cHRvSlMiLCJ0b1N0cmluZyIsImJhbGFuY2UiLCJ0cmFuc2FjdGlvbnMiLCJmaXhlZERlcG9zaXRlcyIsInVzZXJ0cmFuczIiLCJ1c2VyZGVwb3NpdHMyIiwidXNlcjIiLCJ1c2VydHJhbnMzIiwidXNlcmRlcG9zaXRzMyIsInVzZXIzIiwidXNlcnRyYW5zNCIsInVzZXJkZXBvc2l0czQiLCJ1c2VyNCIsInVzZXJ0cmFuczUiLCJ1c2VyZGVwb3NpdHM1IiwidXNlcjUiLCJkYXRhYmFzZSIsImdldCIsInRoZW4iLCJzbmFwIiwiZG9jcyIsImxlbmd0aCIsImFkZCIsImFkbWluMSIsIm5hbWUiLCJlbWFpbCIsImFkbWluMiIsImFkbWluMyIsImFkbWluNCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwic2V0dGluZ3MiLCJ0aW1lc3RhbXBJblNuYXBzaG90cyIsImRvY3VtZW50IiwiZm9ybXMiLCJVc2VyRm9ybSIsIm9uc3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJpZCIsInRhcmdldCIsImlkRXJyb3IiLCJnZXRFbGVtZW50QnlJZCIsInBhc3N3b3JkRXJyb3IiLCJnZXRFbGVtZW50c0J5TmFtZSIsImlubmVySFRNTCIsInZhbHVlIiwidGVzdCIsImdldFVzZXIiLCJ1c2VyVHlwZSIsImxvZ2luSWQiLCJ3aGVyZSIsInVzZXIiLCJkYXRhIiwiZGVjaXBoZXIiLCJkb2MiLCJzZXQiLCJsb2dpbkNyZWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFzc2lnbiIsIm9uZm9jdXMiLCJvbmNsaWNrIiwiY2xhc3NMaXN0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxhQUFULEdBQXlCO0FBQ3BDO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLFNBQVosQ0FGb0MsQ0FHcEM7O0FBQ0EsTUFBSUMsVUFBVSxHQUFHO0FBQUVDLFlBQVEsRUFBRSxDQUFDO0FBQUVDLFVBQUksRUFBRSxZQUFSO0FBQXNCQyxZQUFNLEVBQUU7QUFBOUIsS0FBRCxFQUF1QztBQUFFRCxVQUFJLEVBQUUsWUFBUjtBQUFzQkMsWUFBTSxFQUFFO0FBQTlCLEtBQXZDLENBQVo7QUFBMEZDLFdBQU8sRUFBRSxDQUFDO0FBQUVGLFVBQUksRUFBRSxZQUFSO0FBQXNCQyxZQUFNLEVBQUU7QUFBOUIsS0FBRDtBQUFuRyxHQUFqQjtBQUNBLE1BQUlFLGFBQWEsR0FBRyxDQUFDO0FBQUVILFFBQUksRUFBRSxZQUFSO0FBQXNCSSxRQUFJLEVBQUUsUUFBNUI7QUFBc0NILFVBQU0sRUFBRTtBQUE5QyxHQUFELEVBQXdEO0FBQUVELFFBQUksRUFBRSxZQUFSO0FBQXNCSSxRQUFJLEVBQUUsUUFBNUI7QUFBc0NILFVBQU0sRUFBRTtBQUE5QyxHQUF4RCxDQUFwQjtBQUNBLE1BQUlJLEtBQUssR0FBRztBQUFFQyxNQUFFLEVBQUUsVUFBTjtBQUFrQkMsWUFBUSxFQUFFLFVBQTVCO0FBQXdDQyxZQUFRLEVBQUVDLDREQUFBLENBQXFCLGNBQXJCLEVBQXFDWixHQUFyQyxFQUEwQ2EsUUFBMUMsRUFBbEQ7QUFB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M0IsRUFBaUMsQ0FBakMsRUFBb0NDLFNBQXBDLEdBQWdELGFBQWhEO0FBQ0FaLFVBQVEsQ0FBQ1MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0csU0FBbkMsR0FBK0MsRUFBL0M7QUFDQVosVUFBUSxDQUFDUyxjQUFULENBQXdCLGVBQXhCLEVBQXlDRyxTQUF6QyxHQUFxRCxFQUFyRDtBQUNILENBTkQ7O0FBU0FaLFFBQVEsQ0FBQ1MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ29CLE9BQXJDLEdBQStDLFVBQUN6QixLQUFELEVBQVc7QUFDdERBLE9BQUssQ0FBQ0csTUFBTixDQUFhdUIsU0FBYixDQUF1QmhELEdBQXZCLENBQTJCLFdBQTNCO0FBQ0FrQixVQUFRLENBQUNTLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NxQixTQUF4QyxDQUFrREMsTUFBbEQsQ0FBeUQsV0FBekQ7QUFDQS9CLFVBQVEsQ0FBQ1csaUJBQVQsQ0FBMkIsSUFBM0IsRUFBaUMsQ0FBakMsRUFBb0NDLFNBQXBDLEdBQWdELGFBQWhEO0FBQ0FaLFVBQVEsQ0FBQ1MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0csU0FBbkMsR0FBK0MsRUFBL0M7QUFDQVosVUFBUSxDQUFDUyxjQUFULENBQXdCLGVBQXhCLEVBQXlDRyxTQUF6QyxHQUFxRCxFQUFyRDtBQUNILENBTkQsQzs7Ozs7Ozs7Ozs7O0FDMUZBIiwiZmlsZSI6ImJhbmsuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tICcuL0ZpcmViYXNlLUNvbmZpZyc7XHJcbmltcG9ydCBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gc3RvcmVzIHRoZSBkYXRhIGluIGZpcmViYXNlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRpYWxpemVEYXRhKCkge1xyXG4gICAgLy8gRU5DUllQVElPTiBLRVlcclxuICAgIGNvbnN0IGtleSA9IFwiQVNFQ1JFVFwiO1xyXG4gICAgLy91c2VyMSBkYXRhXHJcbiAgICBsZXQgdXNlcnRyYW5zMSA9IHsgY3JlZGl0ZWQ6IFt7IGRhdGU6ICcxMS0xMS0yMDIwJywgYW1vdW50OiAxMDAwIH0sIHsgZGF0ZTogJzExLTExLTIwMjAnLCBhbW91bnQ6IDMxMDAgfV0sIGRlYml0ZWQ6IFt7IGRhdGU6ICcyNC0xMi0yMDIwJywgYW1vdW50OiAxMTAwIH1dIH07XHJcbiAgICBsZXQgdXNlcmRlcG9zaXRzMSA9IFt7IGRhdGU6ICcxMC0xMi0yMDIwJywgdHlwZTogJzEgWWVhcicsIGFtb3VudDogMTAwMDAgfSwgeyBkYXRlOiAnMTAtMTItMjAyMCcsIHR5cGU6ICc1IFllYXInLCBhbW91bnQ6IDEwMDAwMDAgfV07XHJcbiAgICBsZXQgdXNlcjEgPSB7IGlkOiAnMTIzNDU2NzEnLCB1c2VybmFtZTogJ01vaGFtbWFkJywgcGFzc3dvcmQ6IENyeXB0b0pTLkFFUy5lbmNyeXB0KCdNb2hhbW1hZDEyMyonLCBrZXkpLnRvU3RyaW5nKCksIGJhbGFuY2U6IDIxMDAwLCB0cmFuc2FjdGlvbnM6IHVzZXJ0cmFuczEsIGZpeGVkRGVwb3NpdGVzOiB1c2VyZGVwb3NpdHMxIH07XHJcblxyXG4gICAgLy91c2VyMiBkYXRhXHJcbiAgICBsZXQgdXNlcnRyYW5zMiA9IHsgY3JlZGl0ZWQ6IFt7IGRhdGU6ICcxMS0xMS0yMDIwJywgYW1vdW50OiA0MDAwIH0sIHsgZGF0ZTogJzExLTExLTIwMjAnLCBhbW91bnQ6IDUxMDAgfV0sIGRlYml0ZWQ6IFt7IGRhdGU6ICcyNC0xMi0yMDIwJywgYW1vdW50OiAxMTAwIH1dIH07XHJcbiAgICBsZXQgdXNlcmRlcG9zaXRzMiA9IFt7IGRhdGU6ICcxMC0xMi0yMDIwJywgdHlwZTogJzEgWWVhcicsIGFtb3VudDogNTAwMDAgfSxcclxuICAgICAgICB7IGRhdGU6ICcxMC0xMi0yMDIwJywgdHlwZTogJzUgWWVhcicsIGFtb3VudDogMTAwMDAgfVxyXG4gICAgXTtcclxuICAgIGxldCB1c2VyMiA9IHsgaWQ6ICcxMjM0NTY3MicsIHVzZXJuYW1lOiAnU2FrZXRoJywgcGFzc3dvcmQ6IENyeXB0b0pTLkFFUy5lbmNyeXB0KCdTYWtldGgxMjMqJywga2V5KS50b1N0cmluZygpLCBiYWxhbmNlOiAzMDAwMCwgdHJhbnNhY3Rpb25zOiB1c2VydHJhbnMyLCBmaXhlZERlcG9zaXRlczogdXNlcmRlcG9zaXRzMiB9O1xyXG5cclxuICAgIC8vdXNlcjMgZGF0YVxyXG4gICAgbGV0IHVzZXJ0cmFuczMgPSB7IGNyZWRpdGVkOiBbeyBkYXRlOiAnMTEtMTEtMjAyMCcsIGFtb3VudDogMTAwMCB9LCB7IGRhdGU6ICcxMS0xMS0yMDIwJywgYW1vdW50OiAzMTAwIH1dLCBkZWJpdGVkOiBbeyBkYXRlOiAnMjQtMTItMjAyMCcsIGFtb3VudDogMTEwMCB9XSB9O1xyXG4gICAgbGV0IHVzZXJkZXBvc2l0czMgPSBbeyBkYXRlOiAnMTAtMTItMjAyMCcsIHR5cGU6ICcxIFllYXInLCBhbW91bnQ6IDUwMDAwIH0sXHJcbiAgICAgICAgeyBkYXRlOiAnMTAtMTItMjAyMCcsIHR5cGU6ICc1IFllYXInLCBhbW91bnQ6IDEwMDAwIH1cclxuICAgIF07XHJcbiAgICBsZXQgdXNlcjMgPSB7IGlkOiAnMTIzNDU2NzMnLCB1c2VybmFtZTogJ0FraGlsJywgcGFzc3dvcmQ6IENyeXB0b0pTLkFFUy5lbmNyeXB0KCdBa2hpbDEyMyonLCBrZXkpLnRvU3RyaW5nKCksIGJhbGFuY2U6IDUwMDAwLCB0cmFuc2FjdGlvbnM6IHVzZXJ0cmFuczMsIGZpeGVkRGVwb3NpdGVzOiB1c2VyZGVwb3NpdHMzIH07XHJcblxyXG4gICAgLy91c2VyNCBkYXRhXHJcbiAgICBsZXQgdXNlcnRyYW5zNCA9IHsgY3JlZGl0ZWQ6IFt7IGRhdGU6ICcxMS0xMS0yMDIwJywgYW1vdW50OiAxMDAwIH0sIHsgZGF0ZTogJzExLTExLTIwMjAnLCBhbW91bnQ6IDMxMDAgfV0sIGRlYml0ZWQ6IFt7IGRhdGU6ICcyNC0xMi0yMDIwJywgYW1vdW50OiAxMTAwIH1dIH07XHJcbiAgICBsZXQgdXNlcmRlcG9zaXRzNCA9IFt7IGRhdGU6ICcxMC0xMi0yMDIwJywgdHlwZTogJzEgWWVhcicsIGFtb3VudDogNTAwMDAgfSxcclxuICAgICAgICB7IGRhdGU6ICcxMC0xMi0yMDIwJywgdHlwZTogJzUgWWVhcicsIGFtb3VudDogMTAwMDAgfVxyXG4gICAgXTtcclxuICAgIGxldCB1c2VyNCA9IHsgaWQ6ICcxMjM0NTY3NCcsIHVzZXJuYW1lOiAnTmlraGlsJywgcGFzc3dvcmQ6IENyeXB0b0pTLkFFUy5lbmNyeXB0KCdOaWtoaWwxMjMqJywga2V5KS50b1N0cmluZygpLCBiYWxhbmNlOiA2MDAwMCwgdHJhbnNhY3Rpb25zOiB1c2VydHJhbnM0LCBmaXhlZERlcG9zaXRlczogdXNlcmRlcG9zaXRzNCB9O1xyXG5cclxuICAgIC8vdXNlcjUgZGF0YVxyXG4gICAgbGV0IHVzZXJ0cmFuczUgPSB7IGNyZWRpdGVkOiBbeyBkYXRlOiAnMTEtMTEtMjAyMCcsIGFtb3VudDogMTAwMCB9LCB7IGRhdGU6ICcxMS0xMS0yMDIwJywgYW1vdW50OiAzMTAwIH1dLCBkZWJpdGVkOiBbeyBkYXRlOiAnMjQtMTItMjAyMCcsIGFtb3VudDogMTEwMCB9XSB9O1xyXG4gICAgbGV0IHVzZXJkZXBvc2l0czUgPSBbeyBkYXRlOiAnMTAtMTItMjAyMCcsIHR5cGU6ICcxIFllYXInLCBhbW91bnQ6IDUwMDAwIH0sXHJcbiAgICAgICAgeyBkYXRlOiAnMTAtMTItMjAyMCcsIHR5cGU6ICc1IFllYXInLCBhbW91bnQ6IDEwMDAwIH1cclxuICAgIF07XHJcbiAgICBsZXQgdXNlcjUgPSB7IGlkOiAnMTIzNDU2NzUnLCB1c2VybmFtZTogJ0JoYXJhdGgnLCBwYXNzd29yZDogQ3J5cHRvSlMuQUVTLmVuY3J5cHQoJ0JoYXJhdGgxMjMqJywga2V5KS50b1N0cmluZygpLCBiYWxhbmNlOiA0MDAwMCwgdHJhbnNhY3Rpb25zOiB1c2VydHJhbnM1LCBmaXhlZERlcG9zaXRlczogdXNlcmRlcG9zaXRzNSB9O1xyXG5cclxuICAgIC8vYWRkaW5nIHVzZXJzIGRhdGEgdG8gZmlyZWJhc2VcclxuICAgIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KCkudGhlbihzbmFwID0+IHtcclxuICAgICAgICBpZiAoIXNuYXAuZG9jcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZGF0YWJhc2UuY29sbGVjdGlvbigndXNlcnMnKS5hZGQodXNlcjEpO1xyXG4gICAgICAgICAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKCd1c2VycycpLmFkZCh1c2VyMik7XHJcbiAgICAgICAgICAgIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ3VzZXJzJykuYWRkKHVzZXIzKTtcclxuICAgICAgICAgICAgZGF0YWJhc2UuY29sbGVjdGlvbigndXNlcnMnKS5hZGQodXNlcjQpO1xyXG4gICAgICAgICAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKCd1c2VycycpLmFkZCh1c2VyNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ3VzZXJzJykuYWRkKHRyaWFsdXNlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2FkbWluMVxyXG4gICAgbGV0IGFkbWluMSA9IHsgbmFtZTogJ1Zhc3VkZXZhbiBEYW5kZXknLCBlbWFpbDogJ3Zhc3VAZ21haWwuY29tJywgcGFzc3dvcmQ6IENyeXB0b0pTLkFFUy5lbmNyeXB0KCdWYXN1MTIzKicsIGtleSkudG9TdHJpbmcoKSB9O1xyXG4gICAgbGV0IGFkbWluMiA9IHsgbmFtZTogJ1RhdmlzaCBBZ2Fyd2FsJywgZW1haWw6ICd0YXZpc2hAZ21haWwuY29tJywgcGFzc3dvcmQ6IENyeXB0b0pTLkFFUy5lbmNyeXB0KCdUYXZpc2gxMjMqJywga2V5KS50b1N0cmluZygpIH07XHJcbiAgICBsZXQgYWRtaW4zID0geyBuYW1lOiAnSmFnYWRpc2gnLCBlbWFpbDogJ2phZ2FkaXNoQGdtYWlsLmNvbScsIHBhc3N3b3JkOiBDcnlwdG9KUy5BRVMuZW5jcnlwdCgnSmFnYWRpc2gxMjMqJywga2V5KS50b1N0cmluZygpIH07XHJcbiAgICBsZXQgYWRtaW40ID0geyBuYW1lOiAnQ2hhaXRhbnlhJywgZW1haWw6ICdjaGFpdGFueWFAZ21haWwuY29tJywgcGFzc3dvcmQ6IENyeXB0b0pTLkFFUy5lbmNyeXB0KCdDaGFpdGFueWExMjMqJywga2V5KS50b1N0cmluZygpIH07XHJcbiAgICAvL2FkZGluZyBhZG1pbiBkYXRhIHRvIGZpcmViYXNlXHJcbiAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKCdhZG1pbnMnKS5nZXQoKS50aGVuKHNuYXAgPT4ge1xyXG4gICAgICAgIGlmICghc25hcC5kb2NzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKCdhZG1pbnMnKS5hZGQoYWRtaW4xKTtcclxuICAgICAgICAgICAgZGF0YWJhc2UuY29sbGVjdGlvbignYWRtaW5zJykuYWRkKGFkbWluMik7XHJcbiAgICAgICAgICAgIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ2FkbWlucycpLmFkZChhZG1pbjMpO1xyXG4gICAgICAgICAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKCdhZG1pbnMnKS5hZGQoYWRtaW40KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lDbjZ5ZFNuVUxnU1NQWGVaMnF1ZDFhWkF4UGdneU13VThcIixcclxuICAgIGF1dGhEb21haW46IFwiYmFuay1mdW5kLW1hbmFnZW1lbnQtc3lzdGVtLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImJhbmstZnVuZC1tYW5hZ2VtZW50LXN5c3RlbVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJiYW5rLWZ1bmQtbWFuYWdlbWVudC1zeXN0ZW0uYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjc1NzgzODIxODgzM1wiLFxyXG4gICAgYXBwSWQ6IFwiMTo3NTc4MzgyMTg4MzM6d2ViOmIxMTIyZWU1NjIyZDFlNDAyYjVhNzBcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1KRzc3MUJaOTBaXCJcclxufTtcclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuZGF0YWJhc2Uuc2V0dGluZ3Moe1xyXG4gICAgdGltZXN0YW1wSW5TbmFwc2hvdHM6IHRydWVcclxufSk7XHJcbmV4cG9ydCB7IGRhdGFiYXNlIH07IiwiaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tICcuL0ZpcmViYXNlLUNvbmZpZyc7XHJcbmltcG9ydCAnLi9jb21tb25zdHlsZXMuY3NzJztcclxuaW1wb3J0IENyeXB0b0pTIGZyb20gJ2NyeXB0by1qcyc7XHJcbi8vIGltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcclxuaW1wb3J0ICdib290c3RyYXAnO1xyXG5pbXBvcnQgaW50aWFsaXplRGF0YSBmcm9tICcuL0JhbmtVc2Vycyc7XHJcblxyXG4vL0ludGlhbGl6aW5nIGRhdGEgaW4gZmlyZWJhc2VcclxuaW50aWFsaXplRGF0YSgpO1xyXG5cclxuLy8gRU5DUllQVElPTiBLRVlcclxuY29uc3Qga2V5ID0gXCJBU0VDUkVUXCI7XHJcbi8qKlxyXG4gKiB3aGVuIHVzZXJzIHByZXNzZXMgdGhlIGxvZ2luIGJ1dHRvbiB0aGlzIGZ1bmN0aW9uIGNoZWNraW5nIHRoZSBpZCBhbmQgcGFzc3dvcmQgYW5kIGRpc3BsYXkgZXJyb3IgbWVzc2FnZXMgaWYgZW50ZXJlZCB3cm9uZ1xyXG4gKiBpZiB0aGUgY3JlZGVudGlhbHMgYXJlIHZhbGlkIGFkbWluIHdpbGwgcmVkaXJlY3QgdG8gYWRtaW4gcGFnZSBhbmQgY3VzdG9tZXIgd2lsbCByZWRpcmVjdCB0byBjdXN0b21lciBwYWdlXHJcbiAqIEBwYXJhbSB7Kn0gZXZlbnQgZm9ybSBldmVudFxyXG4gKi9cclxuZG9jdW1lbnQuZm9ybXMuVXNlckZvcm0ub25zdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdXNlcmlkID0gZXZlbnQudGFyZ2V0LnVzZXJpZDtcclxuICAgIGxldCBwYXNzd29yZCA9IGV2ZW50LnRhcmdldC5wYXNzd29yZDtcclxuICAgIGxldCBpZEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkRXJyb3InKTtcclxuICAgIGxldCBwYXNzd29yZEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkRXJyb3InKTtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnaWQnKVswXS5pbm5lckhUTUwgPT09ICdDdXN0b21lciBJRCcpIHtcclxuICAgICAgICBpZiAodXNlcmlkLnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBpZEVycm9yLmlubmVySFRNTCA9ICdQbGVhc2UgRmlsbCBDdXN0b21lciBJRCc7XHJcbiAgICAgICAgfSBlbHNlIGlmICghKC9cXGR7OH0vLnRlc3QodXNlcmlkLnZhbHVlKSkpIHtcclxuICAgICAgICAgICAgaWRFcnJvci5pbm5lckhUTUwgPSAnSW52YWxpZCBDdXN0b21lciBJRCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXNzd29yZC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSAnUGxlYXNlIEVudGVyIFBhc3N3b3JkJztcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRVc2VyKHVzZXJpZC52YWx1ZSwgcGFzc3dvcmQudmFsdWUsICd1c2VycycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodXNlcmlkLnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBpZEVycm9yLmlubmVySFRNTCA9ICdQbGVhc2UgRmlsbCBBZG1pbiBFbWFpbCc7XHJcbiAgICAgICAgfSBlbHNlIGlmICghKC9eW1xcd18uLV0rQFtcXHdfLi1dK1xcLlxcYihjb218YXV8aW4pXFxiJC8udGVzdCh1c2VyaWQudmFsdWUpKSkge1xyXG4gICAgICAgICAgICBpZEVycm9yLmlubmVySFRNTCA9ICdJbnZhbGlkIEFkbWluIEVtYWlsJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBwYXNzd29yZEVycm9yLmlubmVySFRNTCA9ICdQbGVhc2UgRW50ZXIgUGFzc3dvcmQnO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldFVzZXIodXNlcmlkLnZhbHVlLCBwYXNzd29yZC52YWx1ZSwgJ2FkbWlucycpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBmaW5kcyB0aGUgdXNlciBpbiBmaXJlYmFzZSBhbmQgbWF0Y2hpbmcgcGFzc3dvcmQgdG8gbG9naW4gdGhlbiByZWRpcmVjdCB0byBjdXN0b21lciBwYWdlL0FkbWluIFBhZ2VcclxuICogQHBhcmFtIHtzdHJpbmd9IGlkIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyVHlwZVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VXNlcihpZCwgcGFzc3dvcmQsIHVzZXJUeXBlKSB7XHJcbiAgICBsZXQgbG9naW5JZCA9ICh1c2VyVHlwZSA9PT0gJ3VzZXJzJykgPyAnaWQnIDogJ2VtYWlsJztcclxuICAgIGRhdGFiYXNlLmNvbGxlY3Rpb24odXNlclR5cGUpLndoZXJlKGxvZ2luSWQsICc9PScsIGlkKS5nZXQoKS50aGVuKHNuYXAgPT4ge1xyXG4gICAgICAgIGlmIChzbmFwLmRvY3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCB1c2VyID0gc25hcC5kb2NzWzBdLmRhdGEoKTtcclxuICAgICAgICAgICAgbGV0IGRlY2lwaGVyID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodXNlci5wYXNzd29yZCwga2V5KTtcclxuICAgICAgICAgICAgZGVjaXBoZXIgPSBkZWNpcGhlci50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XHJcbiAgICAgICAgICAgIGlmIChkZWNpcGhlciA9PT0gcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFiYXNlLmNvbGxlY3Rpb24odXNlclR5cGUpLmRvYyhgbG9naW4ke2xvZ2luSWR9YCkuc2V0KHsgbG9naW5DcmVkOiB1c2VyW2xvZ2luSWRdIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oKHVzZXJUeXBlID09PSAndXNlcnMnKSA/ICdjdXN0b21lci5odG1sJyA6ICdhZG1pbi5odG1sJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZEVycm9yJykuaW5uZXJIVE1MID0gJ0ludmFsaWQgUGFzc3dvcmQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkRXJyb3InKS5pbm5lckhUTUwgPSBgSW52YWxpZCAkeyh1c2VyVHlwZSA9PT0gJ3VzZXJzJyk/J0N1c3RvbWVyIElEJzonQWRtaW4gRW1haWwnfS9QYXNzd29yZGA7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vd2hlbiB1c2VyaWQgZ2V0cyBmb2N1cyBpdCBFcnJvciBtZXNzYWdlIHdpbGwgYm90IGJlIGRpc3BsYXllZFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcmlkJykub25mb2N1cyA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZEVycm9yJykuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4vL3doZW4gI3Bhc3N3b3JkIGdldHMgZm9jdXMgaXQgRXJyb3IgbWVzc2FnZSB3aWxsIGJvdCBiZSBkaXNwbGF5ZWRcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJykub25mb2N1cyA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZEVycm9yJykuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4vL2NoYW5naW5nIGZyb20gb25lIHRvIGFub3RoZXIgbmF2aWdhdGlvbiBiYXJzXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDdXN0b21lci1idG4nKS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYmctc2VsZWN0Jyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQWRtaW4tYnRuJykuY2xhc3NMaXN0LnJlbW92ZSgnYmctc2VsZWN0Jyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnaWQnKVswXS5pbm5lckhUTUwgPSAnQ3VzdG9tZXIgSUQnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkRXJyb3InKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZEVycm9yJykuaW5uZXJIVE1MID0gJyc7XHJcbn07XHJcblxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FkbWluLWJ0bicpLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdiZy1zZWxlY3QnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDdXN0b21lci1idG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1zZWxlY3QnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdpZCcpWzBdLmlubmVySFRNTCA9ICdBZG1pbiBFbWFpbCc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWRFcnJvcicpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkRXJyb3InKS5pbm5lckhUTUwgPSAnJztcclxufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9
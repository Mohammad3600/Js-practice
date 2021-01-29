(self["webpackChunkpoc"] = self["webpackChunkpoc"] || []).push([["admin"],{

/***/ "./src/AdminPage/AccountsDetails.js":
/*!******************************************!*\
  !*** ./src/AdminPage/AccountsDetails.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Firebase-Config */ "./src/Firebase-Config.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities */ "./src/Utilities.js");
/* harmony import */ var _commonstyles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonstyles.css */ "./src/commonstyles.css");
/* harmony import */ var _adminstyles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminstyles.css */ "./src/AdminPage/adminstyles.css");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/css/bootstrap.css");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var loginUser;
var userslist = []; //This function finds login user and fill email and user name in page

_Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('admins').doc('loginemail').get().then(function (data) {
  var login = data.data();
  _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('admins').where('email', '==', login.loginCred).get().then(function (snap) {
    loginUser = snap.docs[0].data(); //writing the user id,name in html page

    document.getElementById('id').innerHTML = ":  ".concat(loginUser.email);
    document.getElementById('name').innerHTML = ":  ".concat(loginUser.name);
    document.getElementById('username').innerHTML = loginUser.name;
  });
}); //This will fetch all users in firebase and fills the tables in page

_Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('users').get().then(function (snapshot) {
  snapshot.docs.forEach(function (doc) {
    if (doc.id !== 'loginId') userslist.push(doc.data());
  }); //this fils the all savings money and fixed deposit money

  var totalsavings = 0,
      totaldeposites = 0;

  var _iterator = _createForOfIteratorHelper(userslist),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var user = _step.value;
      totalsavings += user.balance;

      var _iterator2 = _createForOfIteratorHelper(user.fixedDeposites),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var deposites = _step2.value;
          totaldeposites += parseInt(deposites.amount);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  document.querySelector('.amount-1').innerHTML = (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.currencyFormat)(totalsavings);
  document.querySelector('.amount-2').innerHTML = (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.currencyFormat)(totaldeposites);
  fillSavingsTable();
  fillDepositesTable();
});
/**
 * This function fills the all users savings account details in a #savings-table
 */

function fillSavingsTable() {
  var table = document.getElementById('savings-table');
  var tbody = table.lastElementChild;

  var _iterator3 = _createForOfIteratorHelper(userslist),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var user = _step3.value;
      var tr = document.createElement('tr');
      tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)(user.id));
      tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)(user.username));
      tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.currencyFormat)(user.balance)));
      tbody.appendChild(tr);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
/**
 * This function fills the users deposite accounts details in a #deposites-table
 */


function fillDepositesTable() {
  var table = document.getElementById('deposites-table');
  var tbody = table.lastElementChild;

  var _iterator4 = _createForOfIteratorHelper(userslist),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var user = _step4.value;

      var _iterator5 = _createForOfIteratorHelper(user.fixedDeposites),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var deposite = _step5.value;
          var tr = document.createElement('tr');
          tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)(user.id));
          tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)(user.username));
          tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)(deposite.date));
          tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)(deposite.type));
          tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.createTdata)((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.currencyFormat)(deposite.amount)));
          tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.calculateEstimatedAmount)(deposite));
          tr.appendChild((0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.calculateMaturityDate)(deposite));
          tbody.appendChild(tr);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
} //This will display the profile 


document.querySelector('.far').onclick = function () {
  var profile = document.querySelector('.profile');

  if (profile.classList.contains('d-none')) {
    profile.classList.remove('d-none');
  } else {
    profile.classList.add('d-none');
  }
}; //This will redirect to change password page


document.getElementById('Change').onclick = function (event) {
  location.href = 'change.html?email';
}; // Getting the all navigations and containers


var bankNav = document.querySelector('.bank-dropdown');
var savingsNav = document.querySelector('.savings-dropdown');
var depositNav = document.querySelector('.deposite-dropdown');
var bankContainer = document.querySelector('.bank-container');
var savingsContainer = document.querySelector('.savings-container');
var depositContainer = document.querySelector('.deposites-container');

bankNav.onclick = function () {
  return (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.switchNavigation)(bankNav, savingsNav, depositNav, bankContainer, savingsContainer, depositContainer);
};

savingsNav.onclick = function () {
  return (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.switchNavigation)(savingsNav, bankNav, depositNav, savingsContainer, bankContainer, depositContainer);
};

depositNav.onclick = function () {
  return (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.switchNavigation)(depositNav, bankNav, savingsNav, depositContainer, bankContainer, savingsContainer);
}; //remove the Admin-Id in session storage and redirect to login page


document.getElementById('Logout').onclick = function () {
  _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection('admins').doc('loginemail')["delete"]().then(function () {
    return location.assign('index.html');
  });
};

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

/***/ "./src/AdminPage/adminstyles.css":
/*!***************************************!*\
  !*** ./src/AdminPage/adminstyles.css ***!
  \***************************************/
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
0,[["./src/AdminPage/AccountsDetails.js","vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_firestore_dist_inde-8a6c07","runtime","shared"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2MvLi9zcmMvQWRtaW5QYWdlL0FjY291bnRzRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9wb2MvLi9zcmMvRmlyZWJhc2UtQ29uZmlnLmpzIiwid2VicGFjazovL3BvYy8uL3NyYy9BZG1pblBhZ2UvYWRtaW5zdHlsZXMuY3NzP2EyMTAiLCJ3ZWJwYWNrOi8vcG9jLy4vc3JjL2NvbW1vbnN0eWxlcy5jc3M/NjZlYiJdLCJuYW1lcyI6WyJsb2dpblVzZXIiLCJ1c2Vyc2xpc3QiLCJkYXRhYmFzZSIsImRvYyIsImdldCIsInRoZW4iLCJkYXRhIiwibG9naW4iLCJ3aGVyZSIsImxvZ2luQ3JlZCIsInNuYXAiLCJkb2NzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImVtYWlsIiwibmFtZSIsInNuYXBzaG90IiwiZm9yRWFjaCIsImlkIiwicHVzaCIsInRvdGFsc2F2aW5ncyIsInRvdGFsZGVwb3NpdGVzIiwidXNlciIsImJhbGFuY2UiLCJmaXhlZERlcG9zaXRlcyIsImRlcG9zaXRlcyIsInBhcnNlSW50IiwiYW1vdW50IiwicXVlcnlTZWxlY3RvciIsImN1cnJlbmN5Rm9ybWF0IiwiZmlsbFNhdmluZ3NUYWJsZSIsImZpbGxEZXBvc2l0ZXNUYWJsZSIsInRhYmxlIiwidGJvZHkiLCJsYXN0RWxlbWVudENoaWxkIiwidHIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZGF0YSIsInVzZXJuYW1lIiwiZGVwb3NpdGUiLCJkYXRlIiwidHlwZSIsImNhbGN1bGF0ZUVzdGltYXRlZEFtb3VudCIsImNhbGN1bGF0ZU1hdHVyaXR5RGF0ZSIsIm9uY2xpY2siLCJwcm9maWxlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJldmVudCIsImxvY2F0aW9uIiwiaHJlZiIsImJhbmtOYXYiLCJzYXZpbmdzTmF2IiwiZGVwb3NpdE5hdiIsImJhbmtDb250YWluZXIiLCJzYXZpbmdzQ29udGFpbmVyIiwiZGVwb3NpdENvbnRhaW5lciIsInN3aXRjaE5hdmlnYXRpb24iLCJhc3NpZ24iLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsInNldHRpbmdzIiwidGltZXN0YW1wSW5TbmFwc2hvdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxTQUFKO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLEVBQWxCLEMsQ0FDQTs7QUFDQUMsaUVBQUEsQ0FBb0IsUUFBcEIsRUFBOEJDLEdBQTlCLENBQWtDLFlBQWxDLEVBQWdEQyxHQUFoRCxHQUFzREMsSUFBdEQsQ0FBMkQsVUFBQUMsSUFBSSxFQUFJO0FBQy9ELE1BQUlDLEtBQUssR0FBR0QsSUFBSSxDQUFDQSxJQUFMLEVBQVo7QUFDQUosbUVBQUEsQ0FBb0IsUUFBcEIsRUFBOEJNLEtBQTlCLENBQW9DLE9BQXBDLEVBQTZDLElBQTdDLEVBQW1ERCxLQUFLLENBQUNFLFNBQXpELEVBQW9FTCxHQUFwRSxHQUEwRUMsSUFBMUUsQ0FBK0UsVUFBQUssSUFBSSxFQUFJO0FBQ25GVixhQUFTLEdBQUdVLElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQVYsRUFBYUwsSUFBYixFQUFaLENBRG1GLENBRW5GOztBQUNBTSxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEJDLFNBQTlCLGdCQUFnRGQsU0FBUyxDQUFDZSxLQUExRDtBQUNBSCxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLFNBQWhDLGdCQUFtRGQsU0FBUyxDQUFDZ0IsSUFBN0Q7QUFDQUosWUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxTQUFwQyxHQUFnRGQsU0FBUyxDQUFDZ0IsSUFBMUQ7QUFDSCxHQU5EO0FB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QVEsQ0FBQ1MsTUFBVCxDQUFnQixZQUFoQixDQUFOO0FBQUEsR0FBOUQ7QUFDSCxDQUZELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekdBO0FBQ0E7QUFDQSxJQUFNQyxjQUFjLEdBQUc7QUFDbkJDLFFBQU0sRUFBRSx5Q0FEVztBQUVuQkMsWUFBVSxFQUFFLDZDQUZPO0FBR25CQyxXQUFTLEVBQUUsNkJBSFE7QUFJbkJDLGVBQWEsRUFBRSx5Q0FKSTtBQUtuQkMsbUJBQWlCLEVBQUUsY0FMQTtBQU1uQkMsT0FBSyxFQUFFLDJDQU5ZO0FBT25CQyxlQUFhLEVBQUU7QUFQSSxDQUF2QixDLENBU0E7O0FBQ0FDLCtEQUFBLENBQXVCUixjQUF2QjtBQUNBLElBQU03RCxRQUFRLEdBQUdxRSwyREFBQSxFQUFqQjtBQUNBckUsUUFBUSxDQUFDc0UsUUFBVCxDQUFrQjtBQUNkQyxzQkFBb0IsRUFBRTtBQURSLENBQWxCOzs7Ozs7Ozs7Ozs7O0FDZEE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsImZpbGUiOiJhZG1pbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gJy4uL0ZpcmViYXNlLUNvbmZpZyc7XHJcbmltcG9ydCB7IGN1cnJlbmN5Rm9ybWF0LCBjYWxjdWxhdGVNYXR1cml0eURhdGUsIGNhbGN1bGF0ZUVzdGltYXRlZEFtb3VudCwgY3JlYXRlVGRhdGEsIHN3aXRjaE5hdmlnYXRpb24gfSBmcm9tICcuLi9VdGlsaXRpZXMnXHJcbmltcG9ydCAnLi4vY29tbW9uc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi9hZG1pbnN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcblxyXG5sZXQgbG9naW5Vc2VyO1xyXG5jb25zdCB1c2Vyc2xpc3QgPSBbXTtcclxuLy9UaGlzIGZ1bmN0aW9uIGZpbmRzIGxvZ2luIHVzZXIgYW5kIGZpbGwgZW1haWwgYW5kIHVzZXIgbmFtZSBpbiBwYWdlXHJcbmRhdGFiYXNlLmNvbGxlY3Rpb24oJ2FkbWlucycpLmRvYygnbG9naW5lbWFpbCcpLmdldCgpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICBsZXQgbG9naW4gPSBkYXRhLmRhdGEoKTtcclxuICAgIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ2FkbWlucycpLndoZXJlKCdlbWFpbCcsICc9PScsIGxvZ2luLmxvZ2luQ3JlZCkuZ2V0KCkudGhlbihzbmFwID0+IHtcclxuICAgICAgICBsb2dpblVzZXIgPSBzbmFwLmRvY3NbMF0uZGF0YSgpO1xyXG4gICAgICAgIC8vd3JpdGluZyB0aGUgdXNlciBpZCxuYW1lIGluIGh0bWwgcGFnZVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZCcpLmlubmVySFRNTCA9IGA6ICAke2xvZ2luVXNlci5lbWFpbH1gO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykuaW5uZXJIVE1MID0gYDogICR7IGxvZ2luVXNlci5uYW1lfWA7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJykuaW5uZXJIVE1MID0gbG9naW5Vc2VyLm5hbWU7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vL1RoaXMgd2lsbCBmZXRjaCBhbGwgdXNlcnMgaW4gZmlyZWJhc2UgYW5kIGZpbGxzIHRoZSB0YWJsZXMgaW4gcGFnZVxyXG5kYXRhYmFzZS5jb2xsZWN0aW9uKCd1c2VycycpLmdldCgpLnRoZW4oc25hcHNob3QgPT4ge1xyXG4gICAgc25hcHNob3QuZG9jcy5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgaWYgKGRvYy5pZCAhPT0gJ2xvZ2luSWQnKVxyXG4gICAgICAgICAgICB1c2Vyc2xpc3QucHVzaChkb2MuZGF0YSgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vdGhpcyBmaWxzIHRoZSBhbGwgc2F2aW5ncyBtb25leSBhbmQgZml4ZWQgZGVwb3NpdCBtb25leVxyXG4gICAgbGV0IHRvdGFsc2F2aW5ncyA9IDAsXHJcbiAgICAgICAgdG90YWxkZXBvc2l0ZXMgPSAwO1xyXG4gICAgZm9yIChsZXQgdXNlciBvZiB1c2Vyc2xpc3QpIHtcclxuICAgICAgICB0b3RhbHNhdmluZ3MgKz0gdXNlci5iYWxhbmNlO1xyXG4gICAgICAgIGZvciAobGV0IGRlcG9zaXRlcyBvZiB1c2VyLmZpeGVkRGVwb3NpdGVzKSB7XHJcbiAgICAgICAgICAgIHRvdGFsZGVwb3NpdGVzICs9IHBhcnNlSW50KGRlcG9zaXRlcy5hbW91bnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbW91bnQtMScpLmlubmVySFRNTCA9IGN1cnJlbmN5Rm9ybWF0KHRvdGFsc2F2aW5ncyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW1vdW50LTInKS5pbm5lckhUTUwgPSBjdXJyZW5jeUZvcm1hdCh0b3RhbGRlcG9zaXRlcyk7XHJcbiAgICBmaWxsU2F2aW5nc1RhYmxlKCk7XHJcbiAgICBmaWxsRGVwb3NpdGVzVGFibGUoKTtcclxufSk7XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBmaWxscyB0aGUgYWxsIHVzZXJzIHNhdmluZ3MgYWNjb3VudCBkZXRhaWxzIGluIGEgI3NhdmluZ3MtdGFibGVcclxuICovXHJcbmZ1bmN0aW9uIGZpbGxTYXZpbmdzVGFibGUoKSB7XHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2aW5ncy10YWJsZScpO1xyXG4gICAgbGV0IHRib2R5ID0gdGFibGUubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgIGZvciAobGV0IHVzZXIgb2YgdXNlcnNsaXN0KSB7XHJcbiAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZChjcmVhdGVUZGF0YSh1c2VyLmlkKSk7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQoY3JlYXRlVGRhdGEodXNlci51c2VybmFtZSkpO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKGNyZWF0ZVRkYXRhKGN1cnJlbmN5Rm9ybWF0KHVzZXIuYmFsYW5jZSkpKTtcclxuICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGZpbGxzIHRoZSB1c2VycyBkZXBvc2l0ZSBhY2NvdW50cyBkZXRhaWxzIGluIGEgI2RlcG9zaXRlcy10YWJsZVxyXG4gKi9cclxuZnVuY3Rpb24gZmlsbERlcG9zaXRlc1RhYmxlKCkge1xyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlcG9zaXRlcy10YWJsZScpO1xyXG4gICAgbGV0IHRib2R5ID0gdGFibGUubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgIGZvciAobGV0IHVzZXIgb2YgdXNlcnNsaXN0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgZGVwb3NpdGUgb2YgdXNlci5maXhlZERlcG9zaXRlcykge1xyXG4gICAgICAgICAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZChjcmVhdGVUZGF0YSh1c2VyLmlkKSk7XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKGNyZWF0ZVRkYXRhKHVzZXIudXNlcm5hbWUpKTtcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQoY3JlYXRlVGRhdGEoZGVwb3NpdGUuZGF0ZSkpO1xyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZChjcmVhdGVUZGF0YShkZXBvc2l0ZS50eXBlKSk7XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKGNyZWF0ZVRkYXRhKGN1cnJlbmN5Rm9ybWF0KGRlcG9zaXRlLmFtb3VudCkpKTtcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQoY2FsY3VsYXRlRXN0aW1hdGVkQW1vdW50KGRlcG9zaXRlKSk7XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKGNhbGN1bGF0ZU1hdHVyaXR5RGF0ZShkZXBvc2l0ZSkpO1xyXG4gICAgICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL1RoaXMgd2lsbCBkaXNwbGF5IHRoZSBwcm9maWxlIFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFyJykub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZScpO1xyXG4gICAgaWYgKHByb2ZpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW5vbmUnKSkge1xyXG4gICAgICAgIHByb2ZpbGUuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2ZpbGUuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vVGhpcyB3aWxsIHJlZGlyZWN0IHRvIGNoYW5nZSBwYXNzd29yZCBwYWdlXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDaGFuZ2UnKS5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxvY2F0aW9uLmhyZWYgPSAnY2hhbmdlLmh0bWw/ZW1haWwnO1xyXG59XHJcblxyXG4vLyBHZXR0aW5nIHRoZSBhbGwgbmF2aWdhdGlvbnMgYW5kIGNvbnRhaW5lcnNcclxubGV0IGJhbmtOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFuay1kcm9wZG93bicpO1xyXG5sZXQgc2F2aW5nc05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZpbmdzLWRyb3Bkb3duJyk7XHJcbmxldCBkZXBvc2l0TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlcG9zaXRlLWRyb3Bkb3duJyk7XHJcbmxldCBiYW5rQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbmstY29udGFpbmVyJyk7XHJcbmxldCBzYXZpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmluZ3MtY29udGFpbmVyJyk7XHJcbmxldCBkZXBvc2l0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlcG9zaXRlcy1jb250YWluZXInKTtcclxuYmFua05hdi5vbmNsaWNrID0gKCkgPT4gc3dpdGNoTmF2aWdhdGlvbihiYW5rTmF2LCBzYXZpbmdzTmF2LCBkZXBvc2l0TmF2LCBiYW5rQ29udGFpbmVyLCBzYXZpbmdzQ29udGFpbmVyLCBkZXBvc2l0Q29udGFpbmVyKTtcclxuc2F2aW5nc05hdi5vbmNsaWNrID0gKCkgPT4gc3dpdGNoTmF2aWdhdGlvbihzYXZpbmdzTmF2LCBiYW5rTmF2LCBkZXBvc2l0TmF2LCBzYXZpbmdzQ29udGFpbmVyLCBiYW5rQ29udGFpbmVyLCBkZXBvc2l0Q29udGFpbmVyKTtcclxuZGVwb3NpdE5hdi5vbmNsaWNrID0gKCkgPT4gc3dpdGNoTmF2aWdhdGlvbihkZXBvc2l0TmF2LCBiYW5rTmF2LCBzYXZpbmdzTmF2LCBkZXBvc2l0Q29udGFpbmVyLCBiYW5rQ29udGFpbmVyLCBzYXZpbmdzQ29udGFpbmVyKTtcclxuXHJcbi8vcmVtb3ZlIHRoZSBBZG1pbi1JZCBpbiBzZXNzaW9uIHN0b3JhZ2UgYW5kIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvZ291dCcpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKCdhZG1pbnMnKS5kb2MoJ2xvZ2luZW1haWwnKS5kZWxldGUoKS50aGVuKCgpID0+IGxvY2F0aW9uLmFzc2lnbignaW5kZXguaHRtbCcpKTtcclxufSIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUNuNnlkU25VTGdTU1BYZVoycXVkMWFaQXhQZ2d5TXdVOFwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJiYW5rLWZ1bmQtbWFuYWdlbWVudC1zeXN0ZW0uZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiYmFuay1mdW5kLW1hbmFnZW1lbnQtc3lzdGVtXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImJhbmstZnVuZC1tYW5hZ2VtZW50LXN5c3RlbS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNzU3ODM4MjE4ODMzXCIsXHJcbiAgICBhcHBJZDogXCIxOjc1NzgzODIxODgzMzp3ZWI6YjExMjJlZTU2MjJkMWU0MDJiNWE3MFwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLUpHNzcxQlo5MFpcIlxyXG59O1xyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBkYXRhYmFzZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5kYXRhYmFzZS5zZXR0aW5ncyh7XHJcbiAgICB0aW1lc3RhbXBJblNuYXBzaG90czogdHJ1ZVxyXG59KTtcclxuZXhwb3J0IHsgZGF0YWJhc2UgfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9
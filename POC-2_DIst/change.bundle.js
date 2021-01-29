(self["webpackChunkpoc"] = self["webpackChunkpoc"] || []).push([["change"],{

/***/ "./src/Changepassword.js":
/*!*******************************!*\
  !*** ./src/Changepassword.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Firebase-Config */ "./src/Firebase-Config.js");
/* harmony import */ var _commonstyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonstyles.css */ "./src/commonstyles.css");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);

 // import '../node_modules/bootstrap/dist/css/bootstrap.css';


 // ENCRYPTION KEY

var key = "ASECRET";
document.forms.UserForm.onsubmit = checkPasswords; //finding type of the user

var url = window.location.href;
var type = url.slice(url.indexOf('?') + 1);
var loginUser;
var collection = type === 'id' ? 'users' : 'admins'; //getting the login user

_Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection(collection).doc('login' + type).get().then(function (data) {
  var login = data.data();
  _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection(collection).where(type, '==', login.loginCred).get().then(function (snap) {
    loginUser = snap.docs[0].data();
    document.querySelector('.name').innerHTML = loginUser.username ? loginUser.username : loginUser.name;
  });
});
/**
 * This will validate the all passwords and display success messsage when it get success
 * @param {object} event 
 */

function checkPasswords(event) {
  event.preventDefault();
  var old = document.getElementById('Old');
  var newpass = document.getElementById('New');
  var confirm = document.getElementById('Confirm');

  if (old.value === '') {
    document.getElementById('OldError').innerHTML = 'Please Enter Current Password';
  }

  if (newpass.value === '') {
    document.getElementById('NewError').innerHTML = 'Please Enter New Password';
  }

  if (confirm.value === '') {
    document.getElementById('ConfirmError').innerHTML = 'Please Enter Confirm Password';
    return;
  }

  var password = crypto_js__WEBPACK_IMPORTED_MODULE_3___default().AES.decrypt(loginUser.password, key);
  password = password.toString((crypto_js__WEBPACK_IMPORTED_MODULE_3___default().enc.Utf8));

  if (old.value === password) {
    if (old.value === newpass.value) {
      document.getElementById('NewError').innerHTML = 'Current and New Password should not be same';
      return;
    }

    if (newpass.value.length >= 8 && /[!@#$%^&*]{1,}/.test(newpass.value) && /[a-z]{1,}/.test(newpass.value) && /[A-Z]{1,}/.test(newpass.value) && /\d{1}/.test(newpass.value)) {
      if (newpass.value === confirm.value) {
        loginUser.password = crypto_js__WEBPACK_IMPORTED_MODULE_3___default().AES.encrypt(newpass.value, key).toString();
        _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection(collection).where(type, '==', loginUser[type]).get().then(updateUser);
        document.querySelector('.Login-container').classList.add('d-none');
        document.querySelector('.success-container').classList.remove('d-none');
      } else {
        document.getElementById('ConfirmError').innerHTML = 'New Password and Confirm Paswword should be same';
      }
    } else {
      document.getElementById('ConfirmError').innerHTML = 'Invalid New Password and Confirm Paswword';
    }
  } else {
    document.getElementById('OldError').innerHTML = 'Wrong Password';
  }
}
/**
 * This will update loginuser details in firebase
 * @param {object} snapshot 
 */


function updateUser(snapshot) {
  snapshot.docs.forEach(function (doc) {
    return _Firebase_Config__WEBPACK_IMPORTED_MODULE_0__.database.collection(collection).doc(doc.id).update({
      password: loginUser.password
    });
  });
} //This removes error message when getting focus


document.getElementById('Old').onfocus = function () {
  return document.getElementById('OldError').innerHTML = '';
}; //This removes error message when getting focus


document.getElementById('New').onfocus = function () {
  return document.getElementById('NewError').innerHTML = '';
}; //This removes error message when getting focus


document.getElementById('Confirm').onfocus = function () {
  return document.getElementById('ConfirmError').innerHTML = '';
}; //This will redirect to customer /admin page depends on type


document.getElementById('Back').onclick = function () {
  location.assign(type === 'id' ? 'customer.html' : 'admin.html');
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
0,[["./src/Changepassword.js","runtime","vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_firestore_dist_inde-8a6c07","vendors-node_modules_crypto-js_index_js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2MvLi9zcmMvQ2hhbmdlcGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vcG9jLy4vc3JjL0ZpcmViYXNlLUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9wb2MvLi9zcmMvY29tbW9uc3R5bGVzLmNzcz82NmViIl0sIm5hbWVzIjpbImtleSIsImRvY3VtZW50IiwiZm9ybXMiLCJVc2VyRm9ybSIsIm9uc3VibWl0IiwiY2hlY2tQYXNzd29yZHMiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0eXBlIiwic2xpY2UiLCJpbmRleE9mIiwibG9naW5Vc2VyIiwiY29sbGVjdGlvbiIsImRhdGFiYXNlIiwiZG9jIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJsb2dpbiIsIndoZXJlIiwibG9naW5DcmVkIiwic25hcCIsImRvY3MiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwidXNlcm5hbWUiLCJuYW1lIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9sZCIsImdldEVsZW1lbnRCeUlkIiwibmV3cGFzcyIsImNvbmZpcm0iLCJ2YWx1ZSIsInBhc3N3b3JkIiwiQ3J5cHRvSlMiLCJ0b1N0cmluZyIsImxlbmd0aCIsInRlc3QiLCJ1cGRhdGVVc2VyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic25hcHNob3QiLCJmb3JFYWNoIiwiaWQiLCJ1cGRhdGUiLCJvbmZvY3VzIiwib25jbGljayIsImFzc2lnbiIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwic2V0dGluZ3MiLCJ0aW1lc3RhbXBJblNuYXBzaG90cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtDQUVBOztBQUNBLElBQU1BLEdBQUcsR0FBRyxTQUFaO0FBQ0FDLFFB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QUFpQixFQUFFLGNBTEE7QUFNbkJDLE9BQUssRUFBRSwyQ0FOWTtBQU9uQkMsZUFBYSxFQUFFO0FBUEksQ0FBdkIsQyxDQVNBOztBQUNBQywrREFBQSxDQUF1QlIsY0FBdkI7QUFDQSxJQUFNckMsUUFBUSxHQUFHNkMsMkRBQUEsRUFBakI7QUFDQTdDLFFBQVEsQ0FBQzhDLFFBQVQsQ0FBa0I7QUFDZEMsc0JBQW9CLEVBQUU7QUFEUixDQUFsQjs7Ozs7Ozs7Ozs7OztBQ2RBIiwiZmlsZSI6ImNoYW5nZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gJy4vRmlyZWJhc2UtQ29uZmlnJztcclxuaW1wb3J0ICcuL2NvbW1vbnN0eWxlcy5jc3MnO1xyXG4vLyBpbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwJztcclxuaW1wb3J0IENyeXB0b0pTIGZyb20gXCJjcnlwdG8tanNcIjtcclxuLy8gRU5DUllQVElPTiBLRVlcclxuY29uc3Qga2V5ID0gXCJBU0VDUkVUXCI7XHJcbmRvY3VtZW50LmZvcm1zLlVzZXJGb3JtLm9uc3VibWl0ID0gY2hlY2tQYXNzd29yZHM7XHJcbi8vZmluZGluZyB0eXBlIG9mIHRoZSB1c2VyXHJcbmxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxubGV0IHR5cGUgPSB1cmwuc2xpY2UodXJsLmluZGV4T2YoJz8nKSArIDEpO1xyXG5sZXQgbG9naW5Vc2VyO1xyXG5sZXQgY29sbGVjdGlvbiA9ICh0eXBlID09PSAnaWQnKSA/ICd1c2VycycgOiAnYWRtaW5zJztcclxuXHJcbi8vZ2V0dGluZyB0aGUgbG9naW4gdXNlclxyXG5kYXRhYmFzZS5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmRvYygnbG9naW4nICsgdHlwZSkuZ2V0KCkudGhlbihkYXRhID0+IHtcclxuICAgIGxldCBsb2dpbiA9IGRhdGEuZGF0YSgpO1xyXG4gICAgZGF0YWJhc2UuY29sbGVjdGlvbihjb2xsZWN0aW9uKS53aGVyZSh0eXBlLCAnPT0nLCBsb2dpbi5sb2dpbkNyZWQpLmdldCgpLnRoZW4oc25hcCA9PiB7XHJcbiAgICAgICAgbG9naW5Vc2VyID0gc25hcC5kb2NzWzBdLmRhdGEoKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpLmlubmVySFRNTCA9IGxvZ2luVXNlci51c2VybmFtZSA/IGxvZ2luVXNlci51c2VybmFtZSA6IGxvZ2luVXNlci5uYW1lO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgd2lsbCB2YWxpZGF0ZSB0aGUgYWxsIHBhc3N3b3JkcyBhbmQgZGlzcGxheSBzdWNjZXNzIG1lc3NzYWdlIHdoZW4gaXQgZ2V0IHN1Y2Nlc3NcclxuICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFxyXG4gKi9cclxuZnVuY3Rpb24gY2hlY2tQYXNzd29yZHMoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgb2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ09sZCcpO1xyXG4gICAgbGV0IG5ld3Bhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTmV3Jyk7XHJcbiAgICBsZXQgY29uZmlybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDb25maXJtJyk7XHJcbiAgICBpZiAob2xkLnZhbHVlID09PSAnJykge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdPbGRFcnJvcicpLmlubmVySFRNTCA9ICdQbGVhc2UgRW50ZXIgQ3VycmVudCBQYXNzd29yZCc7XHJcbiAgICB9XHJcbiAgICBpZiAobmV3cGFzcy52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTmV3RXJyb3InKS5pbm5lckhUTUwgPSAnUGxlYXNlIEVudGVyIE5ldyBQYXNzd29yZCc7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlybS52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ29uZmlybUVycm9yJykuaW5uZXJIVE1MID0gJ1BsZWFzZSBFbnRlciBDb25maXJtIFBhc3N3b3JkJztcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcGFzc3dvcmQgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChsb2dpblVzZXIucGFzc3dvcmQsIGtleSk7XHJcbiAgICBwYXNzd29yZCA9IHBhc3N3b3JkLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcclxuICAgIGlmIChvbGQudmFsdWUgPT09IHBhc3N3b3JkKSB7XHJcbiAgICAgICAgaWYgKG9sZC52YWx1ZSA9PT0gbmV3cGFzcy52YWx1ZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTmV3RXJyb3InKS5pbm5lckhUTUwgPSAnQ3VycmVudCBhbmQgTmV3IFBhc3N3b3JkIHNob3VsZCBub3QgYmUgc2FtZSc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5ld3Bhc3MudmFsdWUubGVuZ3RoID49IDggJiYgL1shQCMkJV4mKl17MSx9Ly50ZXN0KG5ld3Bhc3MudmFsdWUpICYmIC9bYS16XXsxLH0vLnRlc3QobmV3cGFzcy52YWx1ZSkgJiYgL1tBLVpdezEsfS8udGVzdChuZXdwYXNzLnZhbHVlKSAmJiAvXFxkezF9Ly50ZXN0KG5ld3Bhc3MudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdwYXNzLnZhbHVlID09PSBjb25maXJtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dpblVzZXIucGFzc3dvcmQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChuZXdwYXNzLnZhbHVlLCBrZXkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLndoZXJlKHR5cGUsICc9PScsIGxvZ2luVXNlclt0eXBlXSkuZ2V0KCkudGhlbih1cGRhdGVVc2VyKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Mb2dpbi1jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzLWNvbnRhaW5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NvbmZpcm1FcnJvcicpLmlubmVySFRNTCA9ICdOZXcgUGFzc3dvcmQgYW5kIENvbmZpcm0gUGFzd3dvcmQgc2hvdWxkIGJlIHNhbWUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NvbmZpcm1FcnJvcicpLmlubmVySFRNTCA9ICdJbnZhbGlkIE5ldyBQYXNzd29yZCBhbmQgQ29uZmlybSBQYXN3d29yZCc7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnT2xkRXJyb3InKS5pbm5lckhUTUwgPSAnV3JvbmcgUGFzc3dvcmQnO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyB3aWxsIHVwZGF0ZSBsb2dpbnVzZXIgZGV0YWlscyBpbiBmaXJlYmFzZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gc25hcHNob3QgXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVVc2VyKHNuYXBzaG90KSB7XHJcbiAgICBzbmFwc2hvdC5kb2NzLmZvckVhY2goZG9jID0+IGRhdGFiYXNlLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuZG9jKGRvYy5pZCkudXBkYXRlKHsgcGFzc3dvcmQ6IGxvZ2luVXNlci5wYXNzd29yZCB9KSk7XHJcbn1cclxuXHJcbi8vVGhpcyByZW1vdmVzIGVycm9yIG1lc3NhZ2Ugd2hlbiBnZXR0aW5nIGZvY3VzXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdPbGQnKS5vbmZvY3VzID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ09sZEVycm9yJykuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4vL1RoaXMgcmVtb3ZlcyBlcnJvciBtZXNzYWdlIHdoZW4gZ2V0dGluZyBmb2N1c1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTmV3Jykub25mb2N1cyA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOZXdFcnJvcicpLmlubmVySFRNTCA9ICcnO1xyXG5cclxuLy9UaGlzIHJlbW92ZXMgZXJyb3IgbWVzc2FnZSB3aGVuIGdldHRpbmcgZm9jdXNcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NvbmZpcm0nKS5vbmZvY3VzID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NvbmZpcm1FcnJvcicpLmlubmVySFRNTCA9ICcnO1xyXG5cclxuLy9UaGlzIHdpbGwgcmVkaXJlY3QgdG8gY3VzdG9tZXIgL2FkbWluIHBhZ2UgZGVwZW5kcyBvbiB0eXBlXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdCYWNrJykub25jbGljayA9ICgpID0+IHtcclxuICAgIGxvY2F0aW9uLmFzc2lnbigodHlwZSA9PT0gJ2lkJykgPyAnY3VzdG9tZXIuaHRtbCcgOiAnYWRtaW4uaHRtbCcpO1xyXG59IiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5Q242eWRTblVMZ1NTUFhlWjJxdWQxYVpBeFBnZ3lNd1U4XCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImJhbmstZnVuZC1tYW5hZ2VtZW50LXN5c3RlbS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJiYW5rLWZ1bmQtbWFuYWdlbWVudC1zeXN0ZW1cIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiYmFuay1mdW5kLW1hbmFnZW1lbnQtc3lzdGVtLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI3NTc4MzgyMTg4MzNcIixcclxuICAgIGFwcElkOiBcIjE6NzU3ODM4MjE4ODMzOndlYjpiMTEyMmVlNTYyMmQxZTQwMmI1YTcwXCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctSkc3NzFCWjkwWlwiXHJcbn07XHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmRhdGFiYXNlLnNldHRpbmdzKHtcclxuICAgIHRpbWVzdGFtcEluU25hcHNob3RzOiB0cnVlXHJcbn0pO1xyXG5leHBvcnQgeyBkYXRhYmFzZSB9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=
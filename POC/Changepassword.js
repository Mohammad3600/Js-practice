document.forms.UserForm.onsubmit = checkPasswords;
//finding type of the user
var url = window.location.href;
var type = url.slice(url.indexOf('?') + 1);
var loginUser;
var collection = (type === 'Id') ? 'users' : 'admins';
var id = (type === 'Id') ? 'loginId' : 'loginEmail';
var value = (type === 'Id') ? 'id' : 'email';
//getting the login user
database.collection(collection).doc('login' + type).get().then(function(data) {
    var login = data.data();
    database.collection(collection).where(value, '==', login[id]).get().then(function(snap) {
        loginUser = snap.docs[0].data();
        console.log(loginUser);
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
    if (old.value === loginUser.password) {
        if (old.value === newpass.value) {
            document.getElementById('NewError').innerHTML = 'Current and New Password should not be same';
            return;
        }
        if (newpass.value.length >= 8 && /[!@#$%^&*]{1,}/.test(newpass.value) && /[a-z]{1,}/.test(newpass.value) && /[A-Z]{1,}/.test(newpass.value) && /\d{1}/.test(newpass.value)) {
            if (newpass.value === confirm.value) {
                loginUser.password = newpass.value;
                database.collection(collection).where(value, '==', loginUser[value]).get().then(updateUser);
                document.querySelector('.Login-container').classList.add('switch');
                document.querySelector('.success-container').classList.remove('switch');
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
    snapshot.docs.forEach(function(doc) {
        database.collection(collection).doc(doc.id).update({ password: loginUser.password });
    });
}

//This removes error message when getting focus
document.getElementById('Old').onfocus = function() {
    document.getElementById('OldError').innerHTML = '';
}

//This removes error message when getting focus
document.getElementById('New').onfocus = function() {
    document.getElementById('NewError').innerHTML = '';
}

//This removes error message when getting focus
document.getElementById('Confirm').onfocus = function() {
    document.getElementById('ConfirmError').innerHTML = '';
}

//This will redirect to customer /admin page depends on type
document.getElementById('Back').onclick = function() {
    if (type === 'Id') {
        location.assign('CustomerPage/CustomerPage.html');
    } else {
        location.assign('AdminPage/AdminPage.html');
    }
}
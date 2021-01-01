document.forms.UserForm.onsubmit = checkPasswords;
//finding type of the user
let url = window.location.href;
let type = url.slice(url.indexOf('?') + 1);
let loginUser;

//getting the login user
database.collection(type + 's').doc('login' + type).get().then(function(data) {
    loginUser = data.data();
});

/**
 * This will validate the all passwords and display success messsage when it get success
 * @param {object} event 
 */
function checkPasswords(event) {
    event.preventDefault();
    let old = document.getElementById('Old');
    let newpass = document.getElementById('New');
    let confirm = document.getElementById('Confirm');
    if (old.value === '') {
        document.getElementById('OldError').innerHTML = 'Please Enter Old Password';
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
            document.getElementById('NewError').innerHTML = 'Old and New Password should not be same';
            return;
        }
        if (newpass.value.length >= 8 && /[!@#$%^&*]{1,}/.test(newpass.value) && /[a-z]{1,}/.test(newpass.value) && /[A-Z]{1,}/.test(newpass.value) && /\d{1}/.test(newpass.value)) {
            if (newpass.value === confirm.value) {
                loginUser.password = newpass.value;
                let id = (type === 'user') ? 'id' : 'email';
                database.collection(type + 's').where(id, '==', loginUser[id]).get().then(updateUser);
                document.querySelector('.Login-container').classList.add('switch');
                document.querySelector('.success-container').classList.remove('switch');
            } else {
                document.getElementById('ConfirmError').innerHTML = 'New Password and Confirm Paswword should be same';
            }
        } else {
            document.getElementById('ConfirmError').innerHTML = 'Invalid New Password and Confirm Paswword password';
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
        database.collection(type + 's').doc(doc.id).set(loginUser);
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
    if (type === 'user') {
        location.assign('CustomerPage/CustomerPage.html');
    } else {
        location.assign('AdminPage/AdminPage.html');
    }
}
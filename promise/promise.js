//promise chaining
new Promise(function(resolve) {

    setTimeout(function() { resolve(1) }, 1000);

}).then(function(result) {

    alert(result); // 1

    return new Promise(function(resolve) { // (*)
        setTimeout(function() { resolve(result * 2) }, 1000);
    });

}).then(function(result) { // (**)

    alert(result); // 2

    return new Promise(function(resolve) {
        setTimeout(function() { resolve(result * 2) }, 1000);
    });

}).then(function(result) {

    alert(result); // 4

});


//async and await
async function f() {

    let promise = new Promise(function(resolve) {
        setTimeout(function() { resolve("done!") }, 1000)
    });

    let result = await promise; // wait until the promise resolves

    alert(result); // "done!"
}

f();

//fetch()

async function showAvatar() {

    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/mohammad3600`);
    let githubUser = await githubResponse.json();

    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // wait 3 seconds
    await new Promise(function(resolve) { setTimeout(resolve, 3000) });
    img.remove();
    return githubUser;
}
showAvatar();

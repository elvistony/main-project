var userName = document.getElementById('holder/name');
//var email = document.getElementById('holder/location');
var profile = document.getElementById('holder/profile');

function init(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          userName.innerText = user.displayName;
          //email.innerText = user.email;
          console.log(user)
          profile.src = user.photoURL;
          
        } else {
          // No user is signed in.
          userName.innerText = "Sign In";
          //email.innerText = "Sign In";
          window.location.replace("https://elvistony.me/main-project/login/");
        }
    });
}

function logOut(){
    firebase.auth().signOut().then(function(){
        console.log('success');
        window.location.replace("https://elvistony.me/main-project/login/");
    },function(){})
}

init();
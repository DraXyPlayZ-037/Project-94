const firebaseConfig = {
    apiKey: "AIzaSyCn_jnX494ecAxrXz8LQh1auGJXuB91oyo",
    authDomain: "kwitterproject-2521e.firebaseapp.com",
    projectId: "kwitterproject-2521e",
    storageBucket: "kwitterproject-2521e.appspot.com",
    messagingSenderId: "604431470198",
    appId: "1:604431470198:web:123e20033ce69d29a69957"
};



function dedi() {
    uio = localStorage.getItem("Username");
    document.getElementById("hitg").innerHTML = " Welcome, " + uio;
}


firebase.initializeApp(firebaseConfig);

function totor() {

    localStorage.removeItem("Username");
    window.location = "index.html"
};


function ofef() {
    roomn = document.getElementById("amos").value;
    console.log(roomn)
    localStorage.setItem("Room_Name", roomn);

}
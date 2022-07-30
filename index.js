let page = location.href.split("/");
page = page[page.length - 1];

let users = []
let loggedin = {}
let userIndex = 0;

function getAllUsers() {
    
    let userInStringForm = localStorage.getItem("users");
    let loggedinForm = localStorage.getItem("logged in");
    loggedin = JSON.parse(loggedinForm) || {};
    users = JSON.parse(userInStringForm) || [];
    console.log(users);
    console.log(loggedin);
}
getAllUsers();

logindata = localStorage.getItem("logged in");
console.log(logindata);
if (page === "home.html" && !logindata) {

    window.location.href = "index.html";
}
function diplayDashboard() {
    
    if (page === "home.html") {

        let userName = document.getElementById('userName');
        let userNumber = document.getElementById('userNumber');
        let userAddress = document.getElementById('userAddress');
        let userEmail = document.getElementById('userEmail');

        userName.innerText = loggedin.user_firstname ;
        userNumber.innerText =  loggedin.user_no;
        userAddress.innerText = loggedin.user_address;
        userEmail.innerText = loggedin.user_email;
    }
}
diplayDashboard();

function logincheck() {
    
    let signupdata = localStorage.getItem("users");

    if (page === "login.html" || page === "index.html") {

        if (logindata) {
            window.location.href = "./home.html";
        }
    }
}
logincheck();


function signup() {
    
    // let message = document.getElementsById('Thanks');
    let firstname = document.getElementById('firstname');
    let no = document.getElementById('no');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmpassword = document.getElementById('confirmpassword');
    let address = document.getElementById('address');
    // let alertsign = document.getElementById('alertsign');
    // let mySignAlert;

    if (password.value === confirmpassword.value) {
        // get details from signup inputs
        let newUser = {
            user_firstname: firstname.value,
            user_no: no.value,
            user_email: email.value,
            user_password: password.value,
            user_address: address.value,
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].user_email === email.value) {
                alert("Email already exists");
                // mySignAlert = setTimeout(signinalert);/
                // clearSignAlert();
                return;
            }
        }
        users.push(newUser)

        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = "./login.html";
    }
    else {
        alert("Password does not match");
    }
    // message.innerHTML = "Thanks" +" "+no.value + " " + "is successfully sign up";
    // console.log(message);

// for set time out 

    // function signinalert() {
    //     alertsign.innerHTML = "Email already exists";
    // }
    // function clearSignAlert() {
    //     clearTimeout(mySignAlert, 3000);
    // }
}

function login() {
    
    let login_email = document.getElementById('login_email').value;
    let login_password = document.getElementById('login_password').value;
    let isMatch = false;

    for (let i = 0; i < users.length; i++) {

        if (users[i].user_email === login_email) {

            if (users[i].user_password === login_password) {
                localStorage.setItem("logged in", JSON.stringify(users[i]))
                userIndex = i;
                isMatch = true;
                window.location.href = "./home.html";
            }
        }
    }

    if (!isMatch) {
        alert("your email or password is incorrect");
    }
}
function logout() {

    localStorage.removeItem("logged in");
    window.location.href = "./login.html";
}

function eye() {

    let password = document.getElementById('password').getAttribute("type");
    console.log(password);

    if (password === "password") {
        document.getElementById('icon').classList.remove('fa-eye');
        document.getElementById('icon').classList.add('fa-eye-slash');
        document.getElementById('password').setAttribute("type", "text");
    }
    else {
        document.getElementById('password').setAttribute('type', 'password');
        document.getElementById('icon').classList.remove('fa-eye-slash');
        document.getElementById('icon').classList.add('fa-eye');
        console.log(password);
    }
}

//w3schools

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//////

let updateName = document.getElementById('updateName').value = users[userIndex].user_firstname;
let updateEmail = document.getElementById('updateEmail').value = users[userIndex].user_email;
let updateNumber = document.getElementById('updateNumber').value = users[userIndex].user_no;
let updateAddress = document.getElementById('updateAddress').value = users[userIndex].user_address;

function edit() {

    let updateName = document.getElementById('updateName').value;
    let updateEmail = document.getElementById('updateEmail').value;
    let updateNumber = document.getElementById('updateNumber').value;
    let updateAddress = document.getElementById('updateAddress').value;

    users[userIndex].user_firstname = updateName;
    users[userIndex].user_no = updateNumber;
    users[userIndex].user_email = updateEmail;
    users[userIndex].user_address = updateAddress;

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("logged in", JSON.stringify(users[userIndex]));

    document.getElementById('userName').innerText = users[userIndex].user_firstname;
    document.getElementById('userEmail').innerText = users[userIndex].user_email;
    document.getElementById('userNumber').innerText = users[userIndex].user_no;
    document.getElementById('userAddress').innerText = users[userIndex].user_address;

    modal.style.display = "none";
}

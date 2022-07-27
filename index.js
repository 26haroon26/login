
// let users = []
// let loggedin = []
// function getAllUsers() {
//     let userInStringForm = localStorage.getItem("users");
//     let loggedinForm = localStorage.getItem("loggedin");
//     users = JSON.parse(userInStringForm) || [];
//     loggedin = JSON.parse(loggedinForm) || [];
//     console.log(users);
//     console.log(loggedin);
// }
// getAllUsers();

// function signup() {
//     // let message = document.getElementsById('Thanks');
//     let firstname = document.getElementById('firstname');
//     let no = document.getElementById('no');
//     let email = document.getElementById('email');
//     let password = document.getElementById('password');
//     let confirmpassword = document.getElementById('confirmpassword');
//     let address = document.getElementById('address');

//     if (password.value === confirmpassword.value) {
//         // get details from signup inputs
//         let newUser = {
//             user_firstname: firstname.value,
//             user_no: no.value,
//             user_email: email.value,
//             user_password: password.value,
//             user_address: address.value,
//         }
//         for (let i = 0; i < users.length; i++) {
//             if (users[i].user_email === email.value) {
//                 alert("Email already exists");
//                 return;
//             }
//         }
//         users.push(newUser)

//         localStorage.setItem("users", JSON.stringify(users))
//         window.location.href = "./login.html";
//     }
//     else {
//         alert("Password does not match");
//     }
//     // message.innerHTML = "Thanks" +" "+no.value + " " + "is successfully sign up";
//     // console.log(message);
// }

// function login() {
//     let login_email = document.getElementById('login_email');
//     let login_password = document.getElementById('login_password');

//     for (let i = 0; i < users.length; i++) {
//         if (users[i].user_password == login_password.value && users[i].user_email == login_email.value) {
//             localStorage.setItem("logged in", JSON.stringify(users[i]))
//             window.location.href = "./home.html";
//             break
//         }
//         else if (users[i].user_password !== login_password.value && users[i].user_email !== login_email.value) {
//             // alert("your email or password is incorrect");   
//         }

//         //  if (users[i].user_email !== login_email.value) {
//         //     alert("your email is not registered");
//         // }
//         // else if (users[i].user_password !== login_password.value) {
//         //     alert("your password is incorrect");
//         // }

//     }
// }
// function logout() {
//     localStorage.removeItem("logged in");
//     window.location.href = "./login.html";

// }
// let page = location.href.split("/");
// page = page[page.length - 1];

// let users = []
// let loggedin = {}
// function getAllUsers() {
//     let userInStringForm = localStorage.getItem("users");
//     let loggedinForm = localStorage.getItem("logged in");
//     users = JSON.parse(userInStringForm) || [];
//     loggedin = JSON.parse(loggedinForm);
//     console.log(users);
//     console.log(loggedin);
// }
// getAllUsers();

// function diplayDashboard() {
//     if (page === "home.html") {

//         let userName = document.getElementById('userName');
//         let userAddress = document.getElementById('userAddress');
//         let userEmail = document.getElementById('userEmail');

//         userName.innerText = loggedin.user_firstname + loggedin.user_no;
//         userAddress.innerText = loggedin.user_address;
//         userEmail.innerText = loggedin.user_email;
//         console.log("loggedin.user_firstname: ", loggedin);
//     }
// }
// diplayDashboard();



// // function logincheck() {

//     //  else {
//     //     if (!logindata) {
//     //         window.location.href = "./index.html";
//     //     }
//     // }

// // }
// // logincheck();

// // function signupCheck() {
// //     let signupdata = localStorage.getItem("users");

// //     if (page === "index.html") {

// //         // if (signupdata) {
// //         //     window.location.href = "./login.html";
// //         // }
// //         if (!signupdata) {
// //             window.location.href = "./index.html";
// //         }

// //         // } else {
// //         // }
// //     }
// // }
// //     signupCheck();
//     function signup() {
//         // let message = document.getElementsById('Thanks');
//         let firstname = document.getElementById('firstname');
//         let no = document.getElementById('no');
//         let email = document.getElementById('email');
//         let password = document.getElementById('password');
//         let confirmpassword = document.getElementById('confirmpassword');
//         let address = document.getElementById('address');

//         if (password.value === confirmpassword.value) {
//             // get details from signup inputs
//             let newUser = {
//                 user_firstname: firstname.value,
//                 user_no: no.value,
//                 user_email: email.value,
//                 user_password: password.value,
//                 user_address: address.value,
//             }
//             for (let i = 0; i < users.length; i++) {
//                 if (users[i].user_email === email.value) {
//                     alert("Email already exists");
//                     return;
//                 }
//             }
//             users.push(newUser)

//             localStorage.setItem("users", JSON.stringify(users))
//             window.location.href = "./login.html";
//         }
//         else {
//             alert("Password does not match");
//         }
//         // message.innerHTML = "Thanks" +" "+no.value + " " + "is successfully sign up";
//         // console.log(message);

//     }

//     function login() {
//         let login_email = document.getElementById('login_email').value;
//         let login_password = document.getElementById('login_password').value;

//         let isMatch = false;

//         for (let i = 0; i < users.length; i++) {

//             if (users[i].user_email === login_email) {

//                 if (users[i].user_password === login_password) {
//                     localStorage.setItem("logged in", JSON.stringify(users[i]))
//                     isMatch = true;
//                     window.location.href = "./home.html";
//                     break
//                 }
//             }
//         }

//         if (!isMatch) {
//             alert("your email or password is incorrect");
//         }
//     }
//     function logout() {
//         // let logindata = localStorage.getItem("logged in");

//         // if (page === "login.html" || page === "index.html") {

//         //     if (logindata) {
//         //         window.location.href = "./home.html";
//         //     }

//         // }
//         // else {

//         localStorage.removeItem("logged in");
//         window.location.href = "./index.html";
//         // }
//     }


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
        console.log("loggedin.user_firstname: ", loggedin);
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
    console.log(!signupdata);
    console.log(!logindata);
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
                break
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
        document.getElementById('password').setAttribute("type", "text");
    }
    else {
        document.getElementById('password').setAttribute('type', 'password');
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

// let loggedinForm = localStorage.getItem("logged in");
// loggedin = JSON.parse(loggedinForm) || {};

let updateName = document.getElementById('updateName').value = users[userIndex].user_firstname;
let updateEmail = document.getElementById('updateEmail').value = users[userIndex].user_email;
let updateNumber = document.getElementById('updateNumber').value = users[userIndex].user_no;
let updateAddress = document.getElementById('updateAddress').value = users[userIndex].user_address;

console.log(users[userIndex]);

function edit() {

    let updateName = document.getElementById('updateName').value;
    let updateEmail = document.getElementById('updateEmail').value;
    let updateNumber = document.getElementById('updateNumber').value;
    let updateAddress = document.getElementById('updateAddress').value;

    users[userIndex].user_firstname = updateName;
    users[userIndex].user_no = updateNumber;
    users[userIndex].user_email = updateEmail;
    users[userIndex].user_address = updateAddress;

    localStorage.setItem("users", JSON.stringify(users[userIndex]));
    localStorage.setItem("logged in", JSON.stringify(users[userIndex]));

    users[userIndex] = localStorage.getItem("users");
    users[userIndex] = JSON.parse(users[userIndex]);

    document.getElementById('userName').innerText = users[userIndex].user_firstname;
    document.getElementById('userEmail').innerText = users[userIndex].user_email;
    document.getElementById('userNumber').innerText = users[userIndex].user_no;
    document.getElementById('userAddress').innerText = users[userIndex].user_address;
    console.log(users[userIndex]);
    modal.style.display = "none";
    
    let eyeIcon = document.getElementById('icon');
    if (eyeIcon.classList.contains('fa-solid fa-eye')) {
        eyeIcon.classList.remove('fa-solid fa-eye');
        eyeIcon.classList.add('fa-solid fa-eye-slash');
    }
    else {
        eyeIcon.classList.remove('fa-solid fa-eye-slash');
        eyeIcon.classList.add('fa-solid fa-eye');
    }
    
    

}
var userName = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("password");




function saveData(){
    if(email.value == "" || email.value ==! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, password.value === ""){
        swal("Please enter correct Email or Password.");
    }
else{
    localStorage.setItem("User Name", userName.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Password", password.value);
    window.location.assign("./login.html")
    clearForm();
}
}

function clearForm(){
    email.value = "";
    password.value = "";
}













// function addStudent() {
//     var allUserNames = localStorage.getItem('User Name');
//     if (allUserNames) {
//         allUserNames = JSON.parse(allUserNames);
//     }
//     else {
//         allUserNames = [];
//     }
//     allUserNames.push(userName.value);
//     allUserNames = JSON.stringify(allUserNames);
//     localStorage.setItem('User Name', allUserNames);
//     window.location.assign("./login.html");
//     clearForm();


//     var allEmails = localStorage.getItem('Email');
//     if (allEmails) {
//         allEmails = JSON.parse(allEmails);
//     }
//     else {
//         allEmails = [];
//     }
//     allEmails.push(userName.value);
//     allEmails = JSON.stringify(allEmails);
//     allEmails.setItem('Email', allEmails);
//     window.location.assign("./login.html");
//     clearForm();


//     var allPasswords = localStorage.getItem('Password');
//     if (allPasswords) {
//         allPasswords = JSON.parse(allPasswords);
//     }
//     else {
//         allPasswords = [];
//     }
//     allPasswords.push(userName.value);
//     allPasswords = JSON.stringify(allPasswords);
//     allPasswords.setItem('Password', allPasswords);
//     window.location.assign("./login.html");
//     clearForm();
// }


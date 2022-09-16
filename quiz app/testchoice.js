var heading = document.getElementById("testchoiceh1");
var userName = localStorage.getItem("User Name");

heading.innerHTML = "Welcome, Mr " + userName;


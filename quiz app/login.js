
function login(){
    var LoginEmail = document.querySelector("#Lo-email");
    var LoginPassword = document.querySelector("#Lo-password");
    var emailValue = localStorage.getItem("Email");
    var passwordValue = localStorage.getItem("Password");
    
    if(LoginEmail.value === emailValue && LoginPassword.value === passwordValue){
        window.location.assign("./testchoice.html")
        
    }
    else if(LoginEmail.value == "" || LoginPassword.value === ""){
        swal("Please enter Email or Password.");

    }
    else{
        swal("Wrong password or email!");

    }
    }



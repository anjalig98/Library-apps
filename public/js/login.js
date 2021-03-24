let email = document.getElementById("email");
      let erroremail = document.getElementById("erroremail");

var sub = document.getElementById("submit");


function validate(){
    let regval=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z0-9]{2,3})(.[a-z]{2,3})?$/;
    // let regval=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(regval.test(email.value)){
        erroremail.innerHTML="";
        return true;
    }else if(email.value==""){
        erroremail.innerHTML="Email Cannot be empty!!";
        erroremail.style.color="red";
        return false;
    }
    else{
        erroremail.innerHTML="Email format is invalid'";
        erroremail.style.color="red";
        return false;
    }
}
    
    
var pass = document.getElementById('pass');
var errorpass = document.getElementById('errorpass');
errorpass.innerHTML="";
function pswd(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    if(strongRegex.test(pass.value)){
        errorpass.innerHTML="";
        return true;
    }else if(pass.value==""){
        errorpass.innerHTML="Password cannot be empty";
        return false;
    }
    else{
        errorpass.innerHTML="Password format is not correct";
        return false;
    }
}
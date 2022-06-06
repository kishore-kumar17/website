var attempt = 5; //  5 attempts so no work.
function validate(){
var username = document.getElementById("name").value;
var mail = document.getElementById("mail").value;
var password = document.getElementById("password").value;

if ( username == "Kumaran" && mail == "kk@gmail.com" && password == "0987654321" ){
alert ("Login successfully");
window.location = "website1.html"; 
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt so pleace watch the placeholder and print it;");
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("mail").disabled = true;
document.getElementById("password").disabled = true;
return false;
}
}
}






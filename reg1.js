function myfunction(){
    var name = document.frm.name;

    var dob = document.frm.dob;

    var gen = document.frm.gen;

    var mnum = document.frm.mnum;

    var mail = document.frm.mail;

    var pay = document.frm.pay;


}

function function1(){
    var x = document.forms["frm"]["name"].value;
    if (x == "") {
      alert("fill the name first");
      return false;
}
return true;

}
if(dob>=2000){


document.getElementById("dob");
alert("your not allwoed");

}










var attempt = 3; // Variable 5 count only
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

function validation() {
    var nama = document.getElementById("Username").value;
    var password = document.getElementById("password").value;
    if (nama != "" && password !="") {
        alert('login berhasil');
        window.location="index.html"
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}

function validasiregistrasi(){
var nama = document.getElementById("Username").value;
var password = document.getElementById("password").value;
var email = document.getElementById("email").value;
var repass = document.getElementById("repass").value;
if (nama != "" && password !="" && email !="" && repass!="") {
    alert('login berhasil');
}else{
    alert('Anda harus mengisi data dengan lengkap !');
    }
}

var input = document.getElementById("password");
var text = document.getElementById("Username");
input.addEventListener("keyup", function(event) {

if (event.getModifierState("CapsLock")) {
text.style.display = "block";
    } else {
text.style.display = "none"
    }
})


function passwordStrength(p){
var status = document.getElementById('status');

var regex = new Array();
regex.push("[A-Z]");
regex.push("[a-z]");
regex.push("[0-9]");
regex.push("[!@#$%^&*]");

var passed = 0;
for(var x = 0; x < regex.length;x++){
if(new RegExp(regex[x]).test(p)){
console.log(passed++);
 }
}

var strength = null;
var color = null;

switch(passed){
    case 0:
    case 1:
    case 2:
        strength = "Tidak Aman";
        color = "#FF3232";
        break;
    case 3:
        strength = "Cukup Aman";
        color = "#E1D441";
        break;
    case 4:
        strength = "Sangat Aman";
        color = "#27D644";
    }
status.innerHTML = strength;
status.style.color = color;
}


function pass(){
var pass = document.getElementById('password');
var show = document.getElementById('show');
if(pass.type == 'password'){
pass.type = 'text';
show.innerHTML = 'Sembunyikan';
    }else{
pass.type = 'password';
show.innerHTML = 'Lihat Password'; 
    }
}
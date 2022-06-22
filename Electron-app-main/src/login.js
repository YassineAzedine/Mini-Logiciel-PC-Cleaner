

const ipc = require('electron').ipcRenderer
let btnlogin;
let email; 
let password;

window.onload = function() { 
 console.log('clicked');
  email = document.getElementById("email")
 
  password = document.getElementById("password")
  
  btnlogin = document.getElementById("login")

  btnlogin.onclick = function(e){
    e.preventDefault()
  console.log('login');

    
   const obj = {email:email.value, password:password.value }

   console.log("🚀 ~ file: login.js ~ line 21 ~ obj", obj)
   ipc.invoke("login", obj)
  }
}
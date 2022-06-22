
'use-strict';
 
const ipcRendererd = require('electron').ipcRenderer;

window.onload = function() { 
  
  
let email = document.getElementById("emailreg")
 let username = document.getElementById("username")


 
  let password = document.getElementById("passwordreg")
  let btnregister = document.getElementById("register")
  email = document.getElementById("email")
 
  password = document.getElementById("password")
  btnlogin = document.getElementById("login")


if(btnlogin){
  console.log('cczczlcadazdzzddada ');
  btnlogin.onclick = function(e){
    e.preventDefault()
  console.log('login');

    
   const obj = {email:email.value, password:password.value }

   console.log("🚀 ~ file: login.js ~ line 21 ~ obj", obj)
   ipcRendererd.invoke("login", obj)
  }





  }else if(btnregister){
    btnregister.onclick = function(e){
      console.log('clicked');
      e.preventDefault()
  
    console.log('register');
      
     const objj = {email:email.value, password:password.value , username:username.value }
  
     console.log("🚀 ~ file: register.js ~ line 27 ~ objj", objj)
     ipcRendererd.invoke("register", objj)
  
  
  }
  
 
  }else{
    console.log('no data');
  }
}

const { app, BrowserWindow, ipcMain, Notification } = require('electron');


const path = require('path'); 
let db = require('./database')

var win;
let winlogin;


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      // preload:path.join(__dirname, 'index.js')
    }
  })

  win.loadFile('src/index.html')
  win.webContents.openDevTools();
}

function loginWindow () {
  winlogin = new BrowserWindow({
   width: 800,
   height: 600,
   webPreferences: {
    nodeIntegration: true,
    contextIsolation:true,
    // devTools:false,
     preload:path.join(__dirname, 'login.js'),
     preload:path.join(__dirname, 'register.js'),

     
     
   }
   
 })

 winlogin.loadFile('src/login.html')
 winlogin.webContents.openDevTools();
}



app.whenReady().then(loginWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.handle('login', (event, obj) => {
  
  validatelogin(obj)
});
ipcMain.handle('register', (event, objj) => {
  console.log("🚀 ~ file: main.js ~ line 66 ~ ipcMain.handle ~ objj", objj)
  register(objj)
});
function register(objj) {
  console.log("🚀 ~ file: main.js ~ line 70 ~ register ~ objj", objj)
  const { username,email, password } = objj 


  let sql = "INSERT into users(username,email,password)values(?,?,?)";

   db.query(sql, [username,email,password] , (error, results, fields) => {
   console.log("🚀 ~ file: main.js ~ line 64 ~ db.query ~ results", results)
 
 
   
  //  if(error) throw error;
     if(error){ console.log(error);}
   
     if(results){
      new Notification({
        title:"register",
        body: 'Registration Successful. Please Login '
      }).show()
       
      
        
      }else{
        console.log('err');
      
      }
     
   });
 }
 



function validatelogin(obj) {
 const { email, password } = obj 
 const sql = "SELECT * FROM users WHERE email=? AND password=?"
  db.query(sql, [email, password], (error, results, fields) => {


  
    // if(error){ console.log(error);}
  
    if(results.length > 0){
     
      
       if( createWindow ()){
        win.show()
       }
     
       winlogin.close()
       
     }else{
       new Notification({
         title:"login",
         body: 'email ou mot de passe incorrect'
       }).show()
     }
    
  });
}


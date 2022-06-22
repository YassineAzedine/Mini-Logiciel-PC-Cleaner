const fs = require("fs");
const path = require("path");
const fastFolderSize = require('fast-folder-size')
const directory = "C:/Users/Youcode/temp/";
let db = require('./database')
// C:/Users/Youcode/AppData/Local/Temp

document.getElementById("btn2").style.display = "none";
let i = 0;

// const nmbr = (directory)=>{


  function history() {
 let dataarry = []
 
 
    fs.readdir(directory, (err, files) => {
      
    console.log("🚀 ~ file: fsFile.js ~ line 17 ~ history ~ files", files)
    if(files.length === 0){
      document.getElementById("txt").innerHTML = "No file found!";

    }else{
      dataarry.push(files.length)
      let jsondata = JSON.stringify(dataarry)
 localStorage.setItem("datanmbr",jsondata)


      }


    });

   
   

    fastFolderSize(directory, (err, bytes) => {
      if (err) {
        throw err
      }
      let sizehistory = bytes/1000000.0
      console.log("🚀 ~ file: fsFile.js ~ line 43 ~ fastFolderSize ~ sizehistory", sizehistory)
   
      var sizee = [];
      console.log("🚀 ~ file: fsFile.js ~ line 46 ~ fastFolderSize ~ sizee", sizee)
     
    //

    var sizee = [];
    console.log("🚀 ~ file: fsFile.js ~ line 46 ~ fastFolderSize ~ sizee", sizee)

    sizee.push(sizehistory)
sizee.find(item =>{
  if(item !==sizehistory){
    let sql = "INSERT into historique(size)values(?)";
   
    db.query(sql, [sizee] , (error, results, fields) => {
    console.log("🚀 ~ file: fsFile.js ~ line 58 ~ db.query ~ results", results)
   //  console.log("🚀 ~ file: fsFile.js ~ line 57 ~ db.query ~ results", results)
 
       
     });
  console.log("🚀 ~ file: fsFile.js ~ line 50 ~ fastFolderSize ~ item", item)
    
  }else{
  console.log('node data');

  }
})
    //
  
   if(sizee.length !== 0 && sizehistory !== sizee[0]){
  
    let sql = "INSERT into historique(size)values(?)";
   
    db.query(sql, [sizee] , (error, results, fields) => {
    console.log("🚀 ~ file: fsFile.js ~ line 58 ~ db.query ~ results", results)
   //  console.log("🚀 ~ file: fsFile.js ~ line 57 ~ db.query ~ results", results)
 
       
     });
     const sqll = "SELECT * FROM historique"
     db.query(sqll, (error, results, fields) => {
 console.log(results)

 

     })
 
   }else {
// let specialsize =sizee.indexOf(sizehistory) 
//     sizee.push(sizehistory)
sizee.push(sizehistory)


  
 

   }
    


      let sizadata = JSON.stringify(sizee)
      localStorage.setItem("datasize",sizadata)
      // document.getElementById("btnsize").innerHTML = size + 'Mb';
      // document.getElementById("btn2").style.display = "block";
  
    
    // if (i == 0) {
    //   i = 1;
    //   let elem = document.getElementById("myBar");
      
    //   document.getElementById("btnsize").style.display = "block";
    //   document.getElementById("btn").style.display = "none";
    //   document.getElementById("sizes").style.display = "block";
    //   document.getElementById("sidebar").style.display = "none";
  
    // }
   
  })



    }
    // console.log('Start remove', directory);
    // fs.readdir(directory, (err, files) => {
    //   console.log("🚀 ~ file: fsFile.js ~ line 111 ~ fs.readdir ~ files", files)
    //   if (err) throw err;
      
    //   if (files.length === 0) {
    
    //     document.getElementById("txt").innerHTML = "No file found!";
    //     document.getElementById("btn2").style.display = "block";
    //     return;
    //   } else {
        
    //     for (const file of files) {
    //       document.getElementById("txt").innerHTML =
    //         files.length + " files deleted!";
    //       fs.unlink(path.join(directory, file), (err) => {
    //         if (err) remove(path.join(directory, file));
    //         document.getElementById("btn2").style.display = "block";
    //         document.getElementById("btnsize").style.display = "none";
  
    //         return;
    //       });
    //     }
    //   }
    // });
  


const size = () => {
 
  fastFolderSize(directory, (err, bytes) => {
    if (err) {
      throw err
    }
    let size = bytes/1000000.0
    
  
  
 
   
    document.getElementById("btnsize").innerHTML = size + 'Mb';
    document.getElementById("btn2").style.display = "block";

  
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    
    document.getElementById("btnsize").style.display = "block";
    document.getElementById("btn").style.display = "none";
    document.getElementById("sizes").style.display = "block";
    document.getElementById("sidebar").style.display = "none";

  }
 
})

}



const move = (files) => {
 
 



  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    
    document.getElementById("myProgress").style.display = "block";
    document.getElementById("btnsize").style.display = "none";
        
    

    document.getElementById("btn").style.display = "none";
    document.getElementById("sidebar").style.display = "none";


    let width = 1;
    let id = setInterval(frame, 20);

    function frame() {
      if (width >= 100) {
        // -----------------------------------
        remove(directory)
        // -----------------------------------
        clearInterval(id);
        i = 0;
        elem.style.display = "none";
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};


function remove(directory) {
  console.log('Start remove', directory);
  fs.readdir(directory, (err, files) => {
    console.log("🚀 ~ file: fsFile.js ~ line 111 ~ fs.readdir ~ files", files)
    if (err) throw err;
    
    if (files.length === 0) {
  
      document.getElementById("txt").innerHTML = "No file found!";
      document.getElementById("btn2").style.display = "block";
      return;
    } else {
      for (const file of files) {
        document.getElementById("txt").innerHTML =
          files.length + " files deleted!";
        fs.unlink(path.join(directory, file), (err) => {
          if (err) remove(path.join(directory, file));
          document.getElementById("btn2").style.display = "block";
          document.getElementById("btnsize").style.display = "none";

          return;
        });
      }
    }
  });
}
const home = () =>{
  location.reload(); 
}

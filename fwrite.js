const fs = require('fs');

fs.writeFile('calc1','console.log("sagar save")', (err)=>{

    console.log(err);
    console.log("data saved in the calc1");
    
    })
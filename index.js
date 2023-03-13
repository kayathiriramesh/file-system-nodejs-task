const express = require("express");

const app = express();

const fs = require("fs");


    fs.writeFile("Message.txt", "Hello World",
    function (err) {
        if (err) throw err;
        console.log("saved");
    });

    fs.writeFile("./index.txt",'This My Page',
    function (err) {
        if (err) throw err;
        console.log("saved");
    });

    fs.readFile("./Message.txt",{encoding:"utf-8"},
    function(err,data){
        if (err) throw err;
        console.log(data)
    })

    fs.readdir("./",
     function (err, data) {
         if (err) throw err;
         console.log(data)
    })
    
    fs.watchFile("./index.txt",function(curr,prev){
        console.log(curr);
        console.log(prev);
})
    app.listen(5001);
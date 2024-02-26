// console.log("My first Node js projct");
var express = require('express');
var app = express();

app.listen(3002);

app.get("/", (req,res) =>{
    res.send("we are inside our first implementation of micro service");
})



console.log("My first microservice is runnning live at @http://localhost:3002" );

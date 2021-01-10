const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Namaskar");
});

app.get("/contactMe", function(req, res){
    res.send("Contact me at : eshan18.09@gmail.com");
});

app.get("/aboutMe", function(req, res){
    res.send("My name is Eshan Bhatt. I'm am a front-end Web Developer");
})

app.get("/skills", function(req, res){
    res.send("<ul><li>DS Algo</li><li>Front-end Web Dev</li><li>SQL</li></ul>")
})

app.listen(3000, function(){
    console.log("Server started at port 3000");
});

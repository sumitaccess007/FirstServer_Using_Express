const express = require("express");

const app = express();

app.get("/", function(req, res){
   res.send("<h1>Hey, This is Response</h1>")
});

app.get("/contact",function (req, res) {
   res.send("My Email - sumitaccess007@gmail.com");   
});

app.get("/about", function (req, res){
   res.send("This is first server created using Express Framework");
});

app.listen(3000, function(){
   console.log("Server started on port 3000");
});



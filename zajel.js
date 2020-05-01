const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
mongoose.connect('mongodb://localhost/zajel' , {useNewUrlParser: true ,  useUnifiedTopology: true });

app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended : false})); 
app.use(express.static("public"));

app.get("/" , function(req , res){
   res.render('index');
})

app.post("/" , function(req , res){
    
})

app.listen(8000, function(){
    console.log("Server started in port 8000");
})

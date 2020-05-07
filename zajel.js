const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use(express.urlencoded({extended : false})); 

const calenderRouter = require('./routes/calender');

mongoose.connect('mongodb://localhost/zajel' , {useNewUrlParser: true ,  useUnifiedTopology: true });

app.set('view engine' , 'ejs');
app.use(express.static("public"));
app.use('/events', calenderRouter);
var MongoClient = require('mongodb' , {useUnifiedTopology: true}).MongoClient;

app.get("/" , function(req , res){
   res.render('events/index' );
})

app.post('/saved' , function(req , res){

   var url = "mongodb://localhost:27017";
// create a client to mongodb

// make client connect to mongo service
   MongoClient.connect(url, function(err, client) {
    var db = client.db('zajel');
    // document to be inserted
    var doc = { 
        date: req.body.date,
        name: req.body.name, 
        Stime: req.body.Stime,
        Etime: req.body.Etime,
        tage: req.body.tage};
    // insert document to 'users' collection using insertOne
    db.collection("calendar").insertOne(doc, function(err, res) {
        if (err) Console.log("Data is not inserted");
    });
});
   res.render("events/index" );
})


app.get('/getEvent' , function(req , res){
    var url = "mongodb://localhost:27017";
    // create a client to mongodb
        var MongoClient = require('mongodb').MongoClient;
    // make client connect to mongo service
       MongoClient.connect(url, function(err, client) {
   
        var db = client.db('zajel');
        db.collection("calendar").find().toArray(function(err, items) {
           if(err) Consle.log("")    
       res.render("events/index2"  , {data: items});        
    });
       });
    });

app.listen(8000, function(){
    console.log("Server started in port 8000");
})


  
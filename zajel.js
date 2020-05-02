const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const calenderRouter = require('./routes/calender');
const app = express();

mongoose.connect('mongodb://localhost/zajel' , {useNewUrlParser: true ,  useUnifiedTopology: true });

app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended : false})); 
app.use(express.static("public"));
app.use( '/events', calenderRouter);


app.get("/" , function(req , res){
   res.render('events/index');
})

app.post('/saved' , function(req , res){

var url = "mongodb://localhost:27017";
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;

// make client connect to mongo service
MongoClient.connect(url, function(err, client) {

    var db = client.db('zajel');
    // document to be inserted
    var doc = { name: req.body.name, 
        Stime: req.body.Stime,
        Etime: req.body.Etime,
        tage: req.body.tage,};
    
    // insert document to 'users' collection using insertOne
    db.collection("calendar").insertOne(doc, function(err, res) {
        if (err) throw err;
        console.log("Document inserted");
    
    });
});
   res.render("events/index");
})

app.listen(8000, function(){
    console.log("Server started in port 8000");
})


  
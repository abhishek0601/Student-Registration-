var http=require('http');
var mysql=require('mysql');
var express=require('express');
const a=express();
var bodyParser=require('body-parser');
const port=8080;
a.set('view engine','pug');
a.get('/',function(req,res){
  res.sendFile('index.html',{root:__dirname})
});
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database="student"

});
con.connect(function(err)
{
  if(err){
    console.log("Error in connection");
  }
  else
  {
    console.log("Connected!!!");
  }

});

app.post('/submit',function(req,res){
  var sql="INSERT INTO details VALUES(null,'"+req.body.name+"','"+req.body.email"','"+req.body.gender"','"+req.body.course+"')"
});

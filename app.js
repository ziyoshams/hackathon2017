const express = require('express');
const hbs = require('hbs');
var request = require('request');

var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'hbs');

app.get('/', function(req, res){
  request({
        url: `http://api.reimaginebanking.com/accounts?key=4dbdf27c939b12bc9ccb1ab97e7a800c`,
        json: true
      }, function(error, response, body){
        if(!error){
          res.send(body);
        }
      });
});







app.listen(port, function(){
  console.log(`Success, its running on port ${port}`);
});

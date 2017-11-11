const express = require('express');
const hbs = require('hbs');
const request = require('request');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;
app.set('view engine', 'hbs');

app.get('/', function(req, res){
  // request({
  //       url: `http://api.reimaginebanking.com/accounts?key=4dbdf27c939b12bc9ccb1ab97e7a800c`,
  //       json: true
  //     }, function(error, response, body){
  //       if(!error){
  //         var arr = Array.from(body.results);
  //         var newArr = arr.filter(function(x){
  //           return x.type == "Checking" && x.balance > 40000;
  //         });
  //         res.send(newArr);
  //       }else{
  //         console.log(error);
  //       }
  //     });

  res.render('index.hbs');
});

app.post('/form', function(req, res){
  res.render('form.hbs', {
    username: req.body.user_name,
    email: req.body.user_mail,
    message: req.body.user_message
  });
});

app.listen(port, function(){
  console.log(`Success, its running on port ${port}`);
});

var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(request,response){
  response.send('Hello from my library');
});

app.listen(port,function(){
  console.log('Listening on ' + port);
});

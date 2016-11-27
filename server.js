var express = require('express');
var body_parser = require('body-parser');
var app = express(); 

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
	response.render('index');
	

});




app.listen(3000);
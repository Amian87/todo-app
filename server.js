var express = require('express');
var body_parser = require('body-parser');
var app = express(); 


app.get('/todos', function(request, response){
	response.send('index.html');
	

});




app.listen(3000);
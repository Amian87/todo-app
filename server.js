var express = require('express');
var bodyParser = require('body-parser');
var Storage = require('./storage');
var app = express(); 

var todoStore = new Storage("todolist");

if (!todoStore.getValue()) {
		todoStore.initialize();
	}

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.render('index');
	                  
});

app.get('/api/todo', function(req, res){
	return res.json(todoStore.getValue());

});

app.post('/api/todo', function(req, res){
	todoStore.saveValue(req.body.item)
	return res.send("success");

});



app.listen(3000);

// create delete request and verify running on postman. On your public todo app use jquery.ajax to display to data.
// move everything to server put and post.
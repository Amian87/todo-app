var express = require('express');
var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.urlencoded({ extended: false });
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

app.post('/api/todo', parseUrlEncoded, function(req, res){
	todoStore.saveValue(req.body.item)
	return res.send("success");

});

app.delete('/api/todo', function(req, res){
	todoStore.removeValue(req.body.item)
	console.log(req.body.item);
	return res.send("value deleted");

});

app.listen(3000);

// create delete request and verify running on postman. On your public todo app use jquery.ajax to display to data.
// move everything to server put and post (use server local storage).


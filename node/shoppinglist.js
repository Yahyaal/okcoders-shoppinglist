//Main js file of our shopplist app
var express = require('express'); //import the express module

var app =express();  			//Create our app object that holds our routes

app.listen(3000, function(err) {	// start listning on port 3000
	console.log('shoppinglist listning on http://localhost:3000');
});

app.use('/', express.static('./app'));	// serve our static HTML files

app.get('/listitems', function(req, res) {
	res.json([1,2,3]);
});

app.get('/users', function(req, res) {
	res.json(['yahya','adam','mark']);
});
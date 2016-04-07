var express = require('express');
var app = express();
var eventEmitter = require('./index');

var callbackData = eventEmitter.hotel;
var name = callbackData.hotelName;
var log = callbackData.logger;
var output = eventEmitter.output;

app.get('/', function(req, res){
	console.log("Hotel Name: "+name);
	console.log(log);
	var resMsg = "Hotel Name: " + callbackData.hotelName +"<br>Hotel Rating: " 
								+ callbackData.starCount+"<br>Log file:<br>"+log;
	res.send(resMsg);
})

app.listen(2507);
console.log('listening on port 2507');
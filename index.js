'use strict'

var hotelRate = require('./rate_hotel');
var eventConfig = require('./rate_hotel/config');
var hotel = new hotelRate("Paradise");
var output = "Server started\n"+hotel.hotelName;

hotel.on(eventConfig.CHECK, function(){
	console.log("Name: "+hotel.hotelName);
	console.log("Rating: "+hotel.starCount);
});

hotel.on(eventConfig.LOG, function(){
	console.log("History: "+hotel.logger);
});

hotel.addStar();
hotel.addStar();
hotel.addStar();
hotel.removeStar();

output += "\n Current ranking is "+hotel.starCount;

module.exports.hotel = hotel;
module.exports.output = output;
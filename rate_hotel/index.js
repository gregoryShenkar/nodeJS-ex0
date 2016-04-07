'use strict'

var EventEmitter = require('events');
var eventConfig = require('./config').events;

module.exports = class HotelRate extends EventEmitter{
	constructor(hotelName){
		super();
		this.hotelName = hotelName
		this.starCount = 0;
		this.logger = "";
	}

	addStar(){
		if(this.starCount <= 5){
			this.starCount++;
			var date = new Date();
			this.loggerUpdate('Star Added', date);
			this.emit(eventConfig.CHECK);
		}
	}

	removeStar(){
		if(this.starCount >= 0){
			this.starCount--;
			var date = new Date();
			this.loggerUpdate('Star Removed', date);
			this.emit(eventConfig.CHECK);
		}
	}

	loggerUpdate(data, time){
		this.logger += data+" --- "+time+"<br>"+"\n";
	}

	getLog(){
		this.emit(eventConfig.LOG);
	}
}
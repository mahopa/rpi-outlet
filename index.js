// Modules
var express = require('express');
var app = express();
var gpio = require('pi-gpio');
var pin = 11;
//Routes
app.get('/', function(req, res){
	gpio.read(pin,function(err, value){
	res.json({"value":value});	
	console.log(value);

});
});

app.get('/on',function(req, res){ 
gpio.open(pin, "output", function(err) {
    gpio.write(pin, 1, function() {
//        gpio.close(pin);
	console.log('On');
	res.json({status: true});
    });
});
});

app.get('/off',function(req, res){ 
gpio.open(pin, "output", function(err) {
    gpio.write(pin, 0, function() {
        gpio.close(pin);
	console.log('Off');
	res.json({status:false});
    });
});
});

// Start server 
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

var express = require('express');
var router = express.Router();
var t = require('../server');

router.route('/')
	.post(function(req, res){
		var message = req.body.message;

		var reply = t.bot.reply(message);
		console.log(reply);
		
	});

module.exports = router;	
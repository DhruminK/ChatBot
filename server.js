var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes/basic');
var rive = require('rivescript');

var bot = new rive();

bot.loadDirectory("./brain", l_done, l_err);

function l_done(l_c){
	console.log("Load # "+l_c+" completed!");

	bot.sortReplies();

	var app = express();

	app.use(bodyParser.json());


	app.post("/", getRep);

	app.listen(8000, function(){
		console.log("Listening on Port : 8000");
	});
}

function l_err(l_c , err)
{
	console.log("Error loading batch # "+ l_c +":" + err + "\n");
}

function getRep(req , res){
	var user = req.body.username;
	var message = req.body.message;
	var vars = req.body.vars;

	for( var key in vars)
	{
		if(vars.hasOwnProperty(key)){
			bot.setUservar(user, key, vars[key]);
		}
	}

	console.log(message);

	var reply = bot.reply("local-user", message, this);

	res.json({ message:reply });
}
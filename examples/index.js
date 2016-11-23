var ai = require("../api.js");

const {Bot, Elements, Buttons} = require('facebook-messenger-bot');
const superagent = require("superagent");
const express = require("express");
const bot = new Bot("EAAamrFjmbOMBAKqijcsYoIU4lWfDVatSLzfflwI4tepRpPTeDAZCHCwZAxZAJmkmnJVTgg5pZAqJszbDiZBAQgUwvLSFJOppaIa26qk7vSVwcOQ1dpfDELyoQlsSsfaGfMY5EjQAo8dCch3LZC70ZBcIJgssYvZCduknJYrx89ygbAZDZD", "testing123");

bot.on('message', message => {
    const {sender} = message;
		console.log(message);
    sender.fetch('first_name').then(function() {	
			ai.query(
				{
					"key": "b045fc89e5084aa2bd4a72197b293696", 
					"query": message.text, 
					"sessionId" : sender.id
				},function(resp) {
				var response = resp.body;
				if (response.result.source == "domains") {
					//no intent
					var reply = response.result.fulfillment.speech;
				} else {
					//has intent
					//handle intent here
					//show buttons etc
				}
				var out = new Elements();
				out.add({text: reply});							
				bot.send(sender.id, out);	
			});				
		});
  });
 
const app = express();
app.use('/facebook', bot.router());
app.listen("7497");

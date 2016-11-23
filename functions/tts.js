const fs = require("fs");
const superagent = require("superagent");

const apiAiBaseURL = "https://api.api.ai/v1";
const apiAiPathQuery = "/query";
const apiAiPathTts = "/tts";

var text = "How are you today?";
var v = "20150910";
var lang = "en-US";


module.exports = {
	processTextToSpeech : function(_options, callback) {
		_options = _options || {};
		text = _options.text || text;
		v = _options.v || v;
		lang = _options.lang || lang;		
		if (!(_options.key) || _options.key == undefined) {
			console.log(err);
			throw new Error ("No API Key inputted");
		}

		superagent.get(`${apiAiBaseURL}${apiAiPathTts}`)
		.query({text})
		.query({v})
		.set("Accept-language", lang)
		.set("Authorization", `Bearer ${_options.key}`)
		.end(function(err, response){
			if (err) {
				console.log(err);
				throw new Error ("Something went wrong in connecting to API.AI");
			}
			var stream = (response).pipe(fs.createWriteStream('xyz.mp3'));
			stream.on('error', function() {
				throw new Error ("Something went wrong in processing the text to speech");				
			})				
			stream.on('finish', function () { 
				callback("xyz.mp3");
			});
		})
	}
}


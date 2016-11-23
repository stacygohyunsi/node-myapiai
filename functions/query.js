const superagent = require("superagent");

const apiAiBaseURL = "https://api.api.ai/v1";
const apiAiPathQuery = "/query";
const apiAiPathTts = "/tts";

var query = "How are you today?"
var v = "20150910";
var lang = "en";
var sessionId = 1;

module.exports = {
	processQuery : function(_options, callback) {
		_options = _options || {};
		query = _options.query || query;
		v = _options.v || v;
		lang = _options.lang || lang;		
		sessionId = _options.sessionId || sessionId;

		if (!(_options.key) || _options.key == undefined) {
			console.log(err);
			throw new Error ("No API Key inputted");
		}

		superagent.get(`${apiAiBaseURL}${apiAiPathQuery}`)
			.query({query})
			.query({v})
			.query({sessionId})
			.query({lang})
			.set("Authorization", `Bearer ${_options.key}`)
			.end(function(err,resp){
				if (err) {
					console.log(err);
					throw new Error ("Something went wrong in connecting to API.AI");
				}
				callback(resp);
			})
	}
}


var myapiai = {
	query: require("./functions/query.js").processQuery,
	tts: require("./functions/tts.js").processTextToSpeech
}
module.exports = myapiai;

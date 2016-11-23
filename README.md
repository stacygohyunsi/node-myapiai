# node-myapiai
Allows user to add Api.Ai functions into Node for use with the MS Bots framework or other bots such as Facebook Messenger etc.

### To handle simple queries
ai.query() takes in two inputs (_options, callback). 
_ Options include:

```
key : String (MANDATORY)
 - This can be found in Api.Ai
 - if not included, will throw err.

query : String 
 - This is what the bot receives from the user as message.
 - if not included, will use default - "How are you today?"

v : String
 - if not included, will use default - 20150910.

lang : String
 - if not included, will use default - en.

sessionId : String
 - if not included, will use default - 1.
```

## Example usage 
See examples folder for detailed example

```
// ...
			ai.query(
				{
					"key": [INSERT API.AI KEY HERE], 
					"query": [INSERT USER'S MESSAGE HERE], 
					"sessionId" : [INSERT SESSION ID HERE]
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
				//send back to user
			});	
// ...
```
### To handle simple queries

```
Coming soon
```
## Changelog
### 0.0.1
Initial release
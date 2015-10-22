var tinderbot = require('tinderbot');
var bot = new tinderbot();

bot.FBClientId = 514426458;
bot.FBClientSecret = '1ef1123ab970871f4381266e6c87033f';

var isauth = bot.client.isAuthorized();
console.log(isauth);

bot.mainLoop = function() {
	console.log("hi");
};


bot.live();

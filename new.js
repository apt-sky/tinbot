var tinder = require('tinderjs');
var _ = require('underscore')
var client = new tinder.TinderClient();

var FACEBOOK_TOKEN = "CAAGm0PX4ZCpsBAPDtuMLSyWKt0iA5hYS6skqPLUI7FNoLM04TiszrsmTJB2VffolwFV9tvZCbjIqpfKDIbkoZCpF1LEZBZBwZAZC2uDMPjX6cH04zY0DctlCSP61rWwTC6GFThmtp008mqxjzmlpe1Xn9wDGGr5LlY7axykFoZAhNJ2ZBFfgZC4wS9I2jyggwLlEgHPQ7lu5vZCJpwM9PxZBZCpsmMNQpL2NCZBQQZD";
var FACEBOOK_ID = "514426458";
var TINDER_ID = "54dd52e57b79de557782a9af";
var TINDER_TOKEN = "fd8708cf-d151-46e4-894f-167f8d65531d";
var TINDER_API_TOKEN = "fd8708cf-d151-46e4-894f-167f8d65531d";


client.authorize(FACEBOOK_TOKEN, FACEBOOK_ID, function() {

	// client.getUser(TINDER_ID, function (error, data) {
	// 	console.log(data);
	// })

	// client.getHistory(function (error,data){
	// 	console.log(data);
	// })

	// client.getUpdates(function (error,data) {
	// 	console.log(data);
	// })
	
	// var defaults = client.getDefaults();
	// var recs_size = defaults.globals.recs_size;
	// console.log(recs_size);

	// client.getRecommendations(recs_size, function(error, data){
	// 	console.log(data);
	// 	_.chain(data.results)
	// 	 .pluck('_id')
	// 	 .each(function(id){
	// 	 	client.like(id, function(error,data){
	// 	 		if(data) {		 			
	// 	 			console.log(data);
	// 	 		}
	// 	 	})
	// 	 })
	// });

 });


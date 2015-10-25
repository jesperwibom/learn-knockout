// this js create a global object literal called require
// the filename and object name is arbitrary and you can use any names you want
var require = {

	//your baseUrl
	baseUrl: "",

	//list all paths to your dependecises
	paths: {
		"knockout": "../../bower_components/knockout/dist/knockout",
		"jquery": "../../bower_components/jquery/dist/jquery",
		"req-text": "../../bower_components/text/text"
	},

	//in shims you can specify if a certain lib has its own dependencies
	//first take the name from the path reference above
	//then set the object member 'deps' to an array containing all the dependencies
	//example given if knockout would depend on jquery

	//schim: {
		//"knockout":{
		//	deps:["jquery"]
		//}
	//}
}

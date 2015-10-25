//the startup.js is a 'require.js' module-definition
//the startup lists our dependencies as we named them in our config file
//and instanciate them to the functions argument
//we then get a ko variable and a $ variable to use in our code
define(["jquery","knockout"],function($,ko){

	//in the startup file we will register our components
	ko.components.register("mycomponent",{
		//instead of harcoding view and view-model in the registration object
		//we are using a require property
		require: "../components/my-component/my-component-viewmodel"
	});
	ko.applyBindings();
});

define(["knockout", "req-text!../../../my-component/my-component-view.html"], function(ko, myComponentTemplate){
	function MyComponent(params){
		var self = this;
		self.username = ko.observable();
		self.username(params.name);
		return self;
	}
	//the viewModel will instanciate a new component for every tag using it
	return { viewModel: MyComponent, template: myComponentTemplate };
});

function MainController ($scope) {
	console.log('Hello World');
	$scope.message = "Hello World";
};

MainController.$inject = ['scope'];
export  { MainController };
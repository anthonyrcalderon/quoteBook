var app = angular.module("quoteBook");

app.controller("mainCtrl", function($scope, dataService) {
	$scope.foo = "asdf";

	$scope.quotes = dataService.getData();

	$scope.addText = "Add Text Here";
	$scope.addAuthor = "Add Author Here";
/*	$scope.Quote = {
		text: $scope.addText,
		author: $scope.addAuthor
	}*/
	// Didn't work....

	$scope.addQuote = function(addObj) {
		dataService.addData(addObj);
	}

	$scope.removeText = "Remove this Quote!";

	$scope.removeQuote = function(quote) {
		dataService.removeData(quote);
	}


	$scope.filterAuthor = "Filter by Author";

	$scope.filterData = function(author) {
		dataService.filterData(author);
	}
});
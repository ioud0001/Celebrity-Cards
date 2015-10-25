angular.module('Booya')

/*
Create a value called myVar under "scope". 
In the HTML page under MainCtrl we can now call {{myVar}} and 
it will display the info we need 
.controller('MainCtrl', function($scope){
	//$scope.myVar = "hello!" 
}); 
*/
.controller('MainCtrl', function($scope, $http, Celebrity){
	// business logic goes here
	$scope.myVar = "hello world"; 
	//$scope.all = Items.getAll(); 
	$scope.allData;
	
	
	//$http({method: 'GET', url:'data/test.json'})
	Celebrity.getAll()
	.then(function(response){
		$scope.allData = response.data; 
	}, function(response){
		alert("Something went wrong..."); 
	});

})
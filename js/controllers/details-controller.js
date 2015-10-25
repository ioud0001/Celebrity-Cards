angular.module('Booya')

.controller('DetailsCtrl', function($scope, $routeParams, Celebrity){
	// business logic goes here
	$scope.itemID = $routeParams.itemID;
	$scope.selected = {};  


Celebrity.getOne($scope.itemID)
	.then(function(response){
		var celebrities = response.data.celebs; 
		
		celebrities.forEach(function(i){
			//alert("values i.id: " + i.id + " scope itemID: " + $scope.itemID);
			   
			if (i.id == $scope.itemID){
				$scope.selected = i; 
				
			}
			
		}); 
	}, function(response){
		alert("Something went wrong"); 
	});
});
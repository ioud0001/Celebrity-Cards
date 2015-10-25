// JavaScript Document
angular.module('Booya')
.factory('Celebrity', function CelebrityFactory($http){
	return {
		getAll: function(){
			return $http({method: 'GET', url:'data/people.json'});
		},
		getOne: function(id){
			return $http({method: 'GET', url:'data/people.json'});
		}
	}
}); 
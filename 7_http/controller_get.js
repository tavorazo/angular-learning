angular.module("MyFirstApp", [])
.controller("FirstController", function($scope, $http){
	$scope.posts = [];
	//hace unapeticion asincronica y retorna un dato promix
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
			console.log($scope.posts.length);
			$scope.lon = $scope.posts.length;
		})
		.error(function(){

		})

});

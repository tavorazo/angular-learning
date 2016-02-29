angular.module("MyFirstApp", [])
.controller("FirstController", function($scope, $http){
	$scope.posts = [];//crear arrego para los post
	$scope.loading = true;
	//hace unapeticion asincronica y retorna un dato promix
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			$scope.posts = data; //se guarda ese json en lel arreglo "posts"
			$scope.loading = false;
		})
		.error(function(){
			$scope.loading = false;
		})
});

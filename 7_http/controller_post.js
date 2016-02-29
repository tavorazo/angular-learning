angular.module("MyFirstApp", [])
.controller("FirstController", function($scope, $http){
	$scope.posts = [];//crear arrego para los post
	$scope.newPost = {}; //crear json para nuevo post
	//hace unapeticion asincronica y retorna un dato promix
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data); //imprime el json en consola
			$scope.posts = data; //se guarda ese json en lel arreglo "posts"
		})
		.error(function(){

		})
	//post a json place holder
	$scope.addPost = function () {
		//en http post, se anexa el url y el cuerpo json
		$http.post("http://jsonplaceholder.typicode.com/posts", {
			title : $scope.newPost.title,
			body: 	$scope.newPost.body,
			userId: 1
		})
			.success(function(data, status, headers, config){
				$scope.posts.push($scope.newPost);
				$scope.addPost = {};
			})
			.error(function(data, status, headers, config){
				
			})
	}
});

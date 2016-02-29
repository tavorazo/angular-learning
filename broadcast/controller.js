angular.module("myModule", [])
  .controller("nameController", function($scope){
 	$scope.text= "texto normal";
 	setTimeout(function(){
 		$scope.$apply(function(){
 			$scope.text = "texto despues de 3 segundos";
 		});
 	}, 2000);
 	// document.querySelector("#myBtn").addEventListener("click", function(){
 	// 	$scope.$apply(function(){
 	// 		$scope.text = "texto despues de click";
 	// 	});
 	// });
 });
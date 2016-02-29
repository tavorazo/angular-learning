angular.module("myModule", [])
 .filter("removeHTML", function(){
 	return function(texto){
 		return String(texto).replace(/<[[^>]]+>/gm, '');
 	}
 })

 .controller("filtrerController", function($scope){
 	$scope.mi_html = "<p>Esto esta entre etiquetas</p>";
 	$scope.mi_json = {};
 	$scope.mi_json.title = "hola" ;
 	$scope.mi_json.body = "hola body ." ;
 	$scope.costo = 34;

 });
//2.html
// angular.module("nombre del modulo", dependecias de angular que importaremos a la app)
// retorna una referencia  a la aplicacion
angular.module("MyFirstApp", [])

.controller("FirstController", function($scope){
	$scope.nombre = "Octavio R";
	//para 5.html
	$scope.comentarios = [
		{
			comentario:"Hola esto es un comentario prueba 1",
			username: "gladys"
		},
		{
			comentario:"Hola este es otro comenario prueba 2",
			username: "tavo"
		},
	];
	$scope.nuevoComentario = { };
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = { };
	}
});

//video 6, minimizar las variables, convertir el seguno parametro en arreglo (toda la funcon)

// .controller("FirstController", ["$scope" , function(x){
// 	x.nombre = "Octavio R";
// 	//para 5.html
// 	x.comentarios = [
// 		{
// 			comentario:"Hola esto es un comentario prueba 1",
// 			username: "gladys"
// 		},
// 		{
// 			comentario:"Hola este es otro comenario prueba 2",
// 			username: "tavo"
// 		},
// 	];
// 	x.nuevoComentario = { };
// 	x.agregarComentario = function(){
// 		x.comentarios.push(x.nuevoComentario);
// 		x.nuevoComentario = { };
	
// 	}
// } ] );
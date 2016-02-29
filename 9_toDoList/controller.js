angular.module("toDoList", ["LocalStorageModule"])
 .controller("toDoController", function($scope, localStorageService){
 	// recoje los datos que estan en cache
 	if (localStorageService.get("angular-todolist")) {
 		$scope.toDo = localStorageService.get("angular-todolist");
 	}else{
	 	$scope.toDo = [];
 	}

 	/*Resultado esperado
		{
			acrividad : descripcion de actividad
			fecha: '3-03-15 2:00pm'
		}
 	*/

 	$scope.addActv = function(){
 		$scope.toDo.push($scope.newActv);
 		$scope.newActv = {};
 		localStorageService.set("angular-todolist", $scope.toDo); //actualizar losd atos en cache
 	}
 	$scope.clean = function(){
 		$scope.toDo = [];
 		localStorageService.set("angular-todolist", $scope.toDo); //actualizar losd atos en cache
 	}



 });
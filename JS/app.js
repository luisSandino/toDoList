angular.module('myToDoList', ['ngStorage'] )
.controller('todoController', function($scope, $localStorage) {

	$scope.$storage = $localStorage.$default({
      listas: []
      
    });
	
	
	$scope.listas = $localStorage.listas;

	$scope.agregarTarea= function() {
		$scope.listas.push($scope.nuevaTarea);
		$scope.nuevaTarea={};
		
		
	};

	

	$scope.borrarTarea= function(index) {
		$scope.listas.splice(index, 1);
		
	};

	

   
});



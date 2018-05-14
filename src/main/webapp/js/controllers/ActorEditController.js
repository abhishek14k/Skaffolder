// START - USED SERVICES
/*
 *	ActorService.create
 *		PARAMS: 
 *		
 *
 *	FilmService.findBycast
 *		PARAMS: 
 *					Objectid key - Id della risorsa cast da cercare
 *		
 *
 *	ActorService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	ActorService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ActorService  
 * FilmService  
 */
// END - REQUIRED RESOURCES

app.controller('ActorEditController', ['$scope', '$location', '$routeParams', '$q', 'ActorService', 'FilmService', 'FilmService',
    function ($scope, $location, $routeParams, $q, ActorService , FilmService , FilmService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = ActorService.get({_id: $scope.id});
        	$scope.external._Filmcast = FilmService.findBycast({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new ActorService();
        	$scope.external._Filmcast = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/actors/');
    		});
    	}
    	
    	$scope.remove = function(){
    		ActorService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/actors/');
    		});
    	}
    	
    		
        //manage External relation cast
        		
    	$scope.list_Filmcast = FilmService.query();
    	
}]);
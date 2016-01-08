angular.module('comics').controller('comicsController',function($scope,$http){

      $http.get('assets/json/comics.json').success(function(data) {
        $scope.listacomics=data;
      });

	  
      $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;

      };

      $scope.genrelist=function(){
      	var list=[];
		list.push("All");
      		for (comic in $scope.listacomics){
      			var newGenre=$scope.listacomics[comic].genre;

      			if (list.indexOf(newGenre) <0) {
    				list.push(newGenre);				 
				}      			
      		}
      	return list;	
      }

       $scope.characterslist=function(){
      	var list=[];
      		list.push("All");
      		for (comic in $scope.listacomics){
      			var newChar=$scope.listacomics[comic].character;

      			if (list.indexOf(newChar) <0) {
    				list.push(newChar);				 
				}      			
      		}
      	return list;	
      }

           $scope.editoriallist=function(){
      		var list=[];
			list.push("All");
      		for (comic in $scope.listacomics){
      			var newEditorial=$scope.listacomics[comic].editorial;

      			if (list.indexOf(newEditorial) <0) {
    				list.push(newEditorial);				 
				}      			
      		}
      	return list;	
      }
      
});
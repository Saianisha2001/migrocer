// Code goes here

(function() {
  'use strict';
  
  angular.module('MyApp', ['angular.filter'])
    .controller('MyController', ['$scope', '$http',
      function($scope, $http) {
        $http.get('data.json')
          .success(function(data, status, header, config) {
            $scope.behaviors = data;
            $scope.selectedBehavior = $scope.behaviors[0];
        });
        
        // $scope
        
        $scope.$watch('selectedCategory',function(newVal){
          console.log('newValue ',newVal);
            if(!newVal){
            $scope.selectedCategory = undefined;
          }
        })
      }
    ]);
}());
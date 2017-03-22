angular.module('csvApp', [])
  .controller('CsvDataController', function($scope,$http) {    
    $http.get('http://localhost:8090/techcrunchs')
    .success(function(response){
        $scope.dataList = response.lists;
    });
    $scope.doRefresh = function(){
       $http.get('http://localhost:8090/techcrunchs')
        .success(function(response){
            $scope.dataList = response.lists;
        });
    };
});

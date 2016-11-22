angular.module("words2JoinAPP")
.controller("game-ctrl",function($scope,$http,$routeParams,$location){
    console.log("game controller");
    $scope.player = $routeParams.player;
    $scope.words= [];
    $scope.addWord = function(){
            console.log("new word");
            $scope.words.push($scope.newWord);
            $scope.score = $scope.newWord.length;  
            $scope.newWord = "";
             
        }

});
/**
 * http://usejsdoc.org/
 */
angular.module('TodoApp',[])
.controller('TodoCtrl',function($scope) {
	$scope.todos = [
	                {text:'learn angular',done:true},
	                {text:'build an angular app',done:false},
	                {text: 'Use test integrattion',done: false}
	                ];
	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.TodoText, done:false});
		$scope.todoText = '';
	};	
});
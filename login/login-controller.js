/**
 * Created by gaudua on 1/6/2017.
 */


(function(){
    'use strict';

    angular.module('learningAngular.login')
        .controller('LoginCtrl', LoginController);

    LoginController.$inject = ['$scope', '$state', '$rootScope', 'loginDataLayer'];

    function LoginController($scope, $state, $rootScope, loginDataLayer){
    	
    	$scope.loginName= '';
    	$scope.password= '';
    	
    	
    	
    	$scope.login = function(name, passwd){
    		//$state.go('dashboard');
    		$rootScope.myName = name;
    		
    		var response;
    		
    		response = loginDataLayer.getloginDetails(name, passwd);
    		
    		response.then(function(responseData){
    			console.log(responseData);
    			
    			$scope.responseData = responseData;

    		});
    		
    		
    	}
		
		
    	
        
    };

})(angular);
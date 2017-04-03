/**
 * Created by gaudua on 1/6/2017.
 */


(function(){

    'use strict';

    angular.module('learningAngular.login')
        .factory('loginDataLayer', loginDataLayer);

    loginDataLayer.$inject = ["$http", "$q"];

    function loginDataLayer($http, $q){

        return{
            getloginDetails: getloginDetails
        };

        function getloginDetails(data){
           
            var url = 'https://jsonplaceholder.typicode.com/posts/1';
          
            var deferred = $q.defer();
            $http({
                url: url,
                method: "GET"
            }).success(function (response) {
                //alert('success');
                deferred.resolve(response);
            }).error(function (ee, status, headers, config) {
                alert('error');
                deferred.reject(status);
            });
            return deferred.promise;
        }

        


    };

})();

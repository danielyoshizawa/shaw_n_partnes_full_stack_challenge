angular.module('Palindrome', [])
    .controller('PalindromeController', ['$scope', '$http', '$httpParamSerializerJQLike'
        , function (scope, http, httpParamSerializerJQLike) {
            scope.result = "Result";

            console.log("Controller");

            scope.checkIfPalindrome = function(palindrome) {

            console.log("Inside function");

            var url = "http://127.0.0.1:8081/check_palindrome";
            var config = {
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded",
                    'Authorization': null
                }};

            var data = {
                palindrome: palindrome
            };

            http.post(url,httpParamSerializerJQLike(data), config).then(function successCallback(response){
                scope.result = response;
            }, function errorCallback(response){
                scope.result = response;
            });
        };

    }]);
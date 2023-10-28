// <reference path="angular.min.js" />

// Create an Angular module named "myModule" with an empty dependency []
var myApp = angular
   .module("myModule", [])
   // Define a controller named "myController" and inject $scope into it
   .controller("myController", function ($scope) {

     // Define an array of employee objects
     var employees = [
      { name: "Ben", gender: "Male", salary: 55000, city: "London" },
      { name: "Sara", gender: "Female", salary: 68000, city: "Chennai" },
      { name: "Mark", gender: "Female", salary: 57000, city: "London" },
      { name: "Pam", gender: "Female", salary: 53000, city: "Chennai" },
      { name: "Todd", gender: "Male", salary: 60000, city: "London" }
     ];

     // Associate the array of employees with $scope to make it accessible in the HTML
     $scope.employees = employees;

     // Define a search function that checks if the item matches the search text
     $scope.search = function (item) {
        // Check if searchText is undefined and if so, return true (no filtering)
        if($scope.searchText == undefined) {
          return true;
        } else {
          // Check if the item's name or city matches searchText (case-insensitive)
          if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || 
            item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
            return true; // If there's a match, return true (the item should be displayed)
          }
        }

        return false; // If there's no match, return false (the item should not be displayed)
     }
   });


// Javascript Entry Point
import angular from 'angular';

 import { MainController } from "./controllers.main";

angular
.module('app', [])
 .controller('MainController', MainController)

// .controller('MainController', function($scope) {
// 	console.log($scope);
// });


/**
 * Created by ashish on 30/6/14.
 */

var jsTraining = (function (angular) {
  "use strict";

  var jsTraining = angular.module("jsTraining", ["ngAnimate", "ngRoute", "ngResource", "angular-gestures"]);
  jsTraining.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when("/index", {
              templateUrl:  "app/partials/indexSlide.html",
              controller:   "IndexCtrl",
              controllerAs: "ctrl"
            })
      .when("/training/:trnId", {
              templateUrl:  "app/partials/trainigIndexSlide.html",
              controller:   "TrainingCtrl",
              controllerAs: "ctrl"
            })
      .when("/training/:trnId/agenda", {
              templateUrl:  "app/partials/agendaSlide.html",
              controller:   "TemplateCtrl",
              controllerAs: "ctrl"
            })
      .when("/training/:trnId/template/:sldId", {
              templateUrl:  "app/partials/templateSlide.html",
              controller:   "TemplateCtrl",
              controllerAs: "ctrl"
            })
      .when("/training/:trnId/bullets/:sldId", {
              templateUrl:  "app/partials/bulletsSlide.html",
              controller:   "TemplateCtrl",
              controllerAs: "ctrl"
            })
      .when("/training/:trnId/subBullets/:sldId", {
              templateUrl:  "app/partials/subBulletsSlide.html",
              controller:   "TemplateCtrl",
              controllerAs: "ctrl"
            })
      .otherwise({
                   redirectTo: "/index"
                 });
  }]);

  return jsTraining;
})(angular);
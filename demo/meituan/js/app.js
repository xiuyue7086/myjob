/**
 * Created by hxsd on 2017/1/18.
 */
angular.module("myapp", ["ionic"]);
angular.module("myapp")
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("tour", {
                url: "/tour",
                templateUrl: "templates/tour/tour.html"
            })
            .state("home", {
                url: "/home",
                templateUrl: "templates/home/home.html",
                controller: "homeCtrl"
            })
            .state("mine", {
                url: "/mine",
                templateUrl: "templates/mine/mine.html",
                controller: "mineCtrl"
            })
            .state("order", {
                url: "/order",
                templateUrl: "templates/order/order.html",
                controller: "orderCtrl"
            });
        $urlRouterProvider.otherwise("/tour");
    })
    .controller("myctrl", function ($scope,$state) {
        $scope.showtab=false;
        $scope.$on("$ionicView.beforeEnter",function(){
            console.log($state.current.name);
            if($state.current.name=="home"){
                $scope.showtab=true;
            }
        })
    });
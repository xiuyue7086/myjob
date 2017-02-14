/**
 * Created by hxsd on 2017/1/19.
 */
angular.module("myapp")
    .controller("homeCtrl", function ($scope, $http,$ionicScrollDelegate,$ionicSideMenuDelegate) {
        $scope.items = [
            {
                "imgsrc":"images/json_01.jpg",
                "discount":1.9,
                "attr":"唐狮tonlion男装专场",
                "remain":6
            },
            {
                "imgsrc":"images/json_02.jpg",
                "discount":0.8,
                "attr":"丝柏舍女装移动端专场",
                "remain":3
            },
            {
                "imgsrc":"images/json_03.jpg",
                "discount":3.3,
                "attr":"糖力TAMMY TANGS原创设计师简...",
                "remain":9
            },
            {
                "imgsrc":"images/json_04.jpg",
                "discount":1.2,
                "attr":"索菲丝尔裤子专场",
                "remain":10
            }
            ];
        $scope.doRefersh = function () {
            var url = "data/shop.json";
            // 向服务器端请求新的数据
            $http.get(url)
                .success(function (data) {
                    // 使用请求回来的新数据替换原来的数据
                    $scope.items = data;
                })
                .finally(function () {
                    // 广播消息给框架，通知其下拉刷新结束，撤销相应的图标和文字
                    $scope.$broadcast("scroll.refreshComplete");
                });
        };
        $scope.loadMore = function(){
            var url = "data/shop.json";
            // 向服务器请求数据
            $http.get(url)
                .success(function(data){
                    // 将返回的数据追加到已有的数据后面
                    Array.prototype.push.apply($scope.items,data);
                })
                .finally(function(){
                    // 通知框架，上拉结束，撤销相应的加载图标
                    $scope.$broadcast("scroll.infiniteScrollComplete");
                });
        };
        $scope.top = function(){
            $ionicScrollDelegate.scrollTop(true);
        };
        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    });
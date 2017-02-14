/**
 * Created by hxsd on 2017/1/19.
 */
angular.module("myapp")
    .controller("homeCtrl", function ($scope, $http,$ionicScrollDelegate) {
        $scope.items = [
            {
                "name": "港式小吃",
                "howlong": "31分钟到达",
                "howmuch": "起送价￥20|配送费￥1",
                "ps": "新用户立减17元",
                "now": "162",
                "imgsrc": "images/lucky1.jpg"
            },
            {
                "name": "港式小吃",
                "howlong": "31分钟到达",
                "howmuch": "起送价￥20|配送费￥1",
                "ps": "新用户立减17元",
                "now": "162",
                "imgsrc": "images/lucky2.jpg"
            },
            {
                "name": "港式小吃",
                "howlong": "31分钟到达",
                "howmuch": "起送价￥20|配送费￥1",
                "ps": "新用户立减17元",
                "now": "162",
                "imgsrc": "images/lucky3.jpg"
            }];
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
        $scope.show=false;
        $scope.now=function(){
            if($scope.show==false){
                $scope.show=true
            }else{
                $scope.show=false
            }
        }

    });
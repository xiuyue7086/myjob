angular.module("myapp")
    .controller("orderCtrl", function ($scope,$http,$ionicListDelegate) {
        $scope.orders=[
            {
                name:"格香客",
                time:"2017-01-21 17:35",
                value:46,
                state:"待评价",
                imgsrc:"images/gexiangke.jpg"
            },
            {
                name:"港式小吃",
                time:"2017-01-21 10:19",
                value:34,
                state:"待评价",
                imgsrc:"images/gangshi.jpg"
            }
        ]
        $scope.config = {
            showDelete:false,
            showReorder:false
        };
        // 删除一个item
        $scope.remove = function(product){
            // 先找到要删除对象在数组中的索引位置
            var index = $scope.orders.indexOf(product);
            // 执行删除操作
            $scope.orders.splice(index,1);
        };


        $scope.loadMore = function(){
            var url = "data/orders.json";
            // 向服务器请求数据
            $http.get(url)
                .success(function(data){
                    // 将返回的数据追加到已有的数据后面
                    Array.prototype.push.apply($scope.orders,data);
                })
                .finally(function(){
                    // 通知框架，上拉结束，撤销相应的加载图标
                    $scope.$broadcast("scroll.infiniteScrollComplete");
                });
        };

    })

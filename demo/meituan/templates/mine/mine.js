angular.module("myapp")
    .controller("mineCtrl", function ($scope, $http, $ionicPopup, $timeout) {
        var url = "data/guest.json";
        $http.get(url).success(function (data) {
            $scope.customer = data;
        });
        $scope.showPopup = function () {
            $scope.data = {};

            // 一个精心制作的自定义弹窗
            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.wifi">',
                title: '请做出评价',
                subTitle: '客观公正',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if (!$scope.data.wifi) {
                                //不允许用户关闭，除非他键入wifi密码
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });

            $timeout(function () {
                myPopup.close(); //由于某种原因3秒后关闭弹出
            }, 3000);
        };
    });

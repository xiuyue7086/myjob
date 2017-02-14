/**
 * Created by Administrator on 2017-01-20.
 */

//注册控制器
myapp.controller("registerCtrl",function($scope,$state,userData){
    //验证注册账号是否已经存在
    $scope.validLoginId=function(){
        $scope.idErr=false;
        if($scope.loginId && userData.validRegisterId($scope.loginId)){
            $scope.idErr=true;
        };
    };
    //验证两次输入密码是否一致
    $scope.validPsd=function(){
        $scope.psdErr=false;
        if($scope.password && $scope.againPsd && $scope.password!=$scope.againPsd){
            $scope.psdErr=true;
        }
    };
    //注册
    $scope.register=function(){
        userData.register($scope.loginId,$scope.nk,$scope.password);
        $state.go("home");
    };
});
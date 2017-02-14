/**
 * Created by hxsd on 2017/1/17.
 */

//主模块
var myapp = angular.module("myapp", ["ionic", "ngMessages"]);

//配置路由
myapp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("tour", {url: "/tour", templateUrl: "templates/tour/tour.html"})//引导页
        .state("home", {url: "/home", templateUrl: "templates/home/home.html", controller: "homeCtrl"})//首页
        .state("login", {url: "/login", templateUrl: "templates/login/login.html", controller: "loginCtrl"})//登录页面
        .state("register", {
            url: "/register",
            templateUrl: "templates/register/register.html",
            controller: "registerCtrl"
        })//登录页面

    //默认引导页
    $urlRouterProvider.otherwise("/tour");
});

myapp.factory("userData", function ($http) {
    //用户数据
    var users = [];
    //当前用户数据
    var user = {
        userId: null,
        userNk: null
    };

    //读取记录用户信息的JSON数据
    $http.get("data/user.json")
        .success(function (data) {
            users = data;
        });

    return {
        //验证登录账号和密码是否正确
        validLogin: function (userId, userPsd) {
            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].userId == userId && users[i].userPsd == userPsd) {
                    user.userId = userId;
                    user.userNk = users[i].userNk;
                    flag = true;
                    return flag;
                }
                ;
            }
            ;
            return flag;
        },
        //获取登录用户数据
        getUser: function () {
            return user;
        },
        //验证注册账号是否已经存在
        validRegisterId: function (userId) {
            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].userId == userId) {
                    flag = true;
                    return flag;
                }
                ;
            }
            ;
            return flag;
        },
        register: function (id, nk, psd) {
            user.userId = id;
            user.userNk = nk;
        },
    };
});




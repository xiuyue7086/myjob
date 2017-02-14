// JavaScript Document
$(function(){
    var header=$(".header");
    var x=header.find('select').val();
    var url="http://wthrcdn.etouch.cn/weather_mini?city="+x;
    $.getJSON(url,function(data){
        header.find(".tem").find("span").html(data.data.wendu);
        header.find(".type").find("span").html(data.data.forecast[0].type);
    });
    header.find("select").on("change",function(){
        x=header.find('select').val();
        url="http://wthrcdn.etouch.cn/weather_mini?city="+x;
        $.getJSON(url,function(data){
            header.find(".tem").find("span").html(data.data.wendu);
            header.find(".type").find("span").html(data.data.forecast[0].type);
        });
    });
});

$(function () {
    $(function () {
        var s1=$("div.s1");
        var timer;
        var timer1;
        var pop = s1.find(".popup");
        s1.find(".nav").find("ul").find("li").each(function (index) {
            var _this=this;
            $(this).on("mouseenter", function () {
                $(this).addClass("ab").siblings("li").removeClass("ab");
                timer = setTimeout(function () {
                        clearTimeout(timer1);
                        pop.show();
                        pop.find(".p1").eq(index).show().siblings(".p1").hide();
                    }
                    , 200);
            });
            $(this).on("mouseleave", function () {
                clearTimeout(timer);
                timer1 = setTimeout(
                    function () {
                        $(_this).removeClass("ab");
                        pop.hide();
                        pop.find(".p1").hide();
                    }
                    , 200);
            });
        });
        pop.find(".p1").each(function(){
            $(this).on("mouseenter",function(){
                clearTimeout(timer1);
            });
        });
        pop.find(".p1").each(function(){
            $(this).on("mouseleave",function(){
                s1.find(".nav").find("ul").find("li").each(function(){
                    $(this).removeClass("ab");
                    pop.hide();
                    pop.find(".p1").hide();

                });
            });
        });
    });
    //var wrap = document.getElementsByClassName("wrap")[0]
    //var nav = wrap.getElementsByClassName("nav")[0]
    //var ul = nav.getElementsByTagName("ul")[0]
    //var li = nav.getElementsByTagName("li")
    //var popup = wrap.getElementsByClassName("popup")[0]
    //var p1 = popup.getElementsByClassName("p1")
    //var timer = null
    //var timerr = null
    //for (var i = 0; i < li.length; i++) {
    //    li[i].index = i
    //    li[i].onmouseover = function () {
    //        clearTimeout(timer);
    //        for (var j = 0; j < p1.length; j++) {
    //            p1[j].style.display = "none"
    //            li[j].className = ""
    //        }
    //        this.className = "ab"
    //        popup.style.display = "block"
    //        p1[this.index].style.display = "block"
    //    }
    //    li[i].onmouseout = function () {
    //        timer = setTimeout(function () {
    //            popup.style.display = "none"
    //            for (var j = 0; j < p1.length; j++) {
    //                li[j].className = ""
    //            }
    //        }, 200)
    //    }
    //}
    //popup.onmouseenter = function (ev) {
    //    clearTimeout(timer);
    //    this.style.display = "block";
    //};
    //popup.onmouseleave = function () {
    //    this.style.display = "none";
    //    for (var j = 0; j < p1.length; j++) {
    //        li[j].className = ""
    //    }
    //};
//---------------------------------------------------------	
//	var banner=document.getElementsByClassName("banner")[0]
//	var oUl=banner.children[0]
//	var aLi=oUl.children
//	var ol=banner.children[1]
//	var aBtn=ol.children
//	var n=0;
//	var li_w=aLi[0].offsetWidth
//	oUl.style.width=li_w*aLi.length+"px"
//	function run(){
//		for(var j=0;j<aBtn.length;j++){
//			aBtn[j].className=" "
//		}
//		aBtn[n].className="ac"
//	}
//	for(var i=0; i<aBtn.length; i++){
//		aBtn[i].index=i;
//		aBtn[i].onclick=function(){
//			n=this.index;
//			run();
//			hxsd_tools.move(oUl,{"left":-li_w*n});
//			};
//		};
//
//	function $show(){
//		n++
//		if(n==aLi.length){ //判断
//			n=0;
//		};
//		run();
//		hxsd_tools.move(oUl,{"left":-li_w*n});
//	}
//	timerr=setInterval($show,2000); //定时器
//	banner.onmouseover=function(){ //鼠标移入 停止
//		clearInterval(timerr);
//		};
//	banner.onmouseout=function(){ // 移出
//		timerr=setInterval($show,2000);
//		};
//	var prevBtn=document.getElementsByClassName("prevBtn")[0]
//	var nextBtn=document.getElementsByClassName("nextBtn")[0]
//	prevBtn.onclick=function(){
//		n--
//		if(n<0){n=0}
//		run()
//		hxsd_tools.move(oUl,{"left":-li_w*n})
//
//	}
//	nextBtn.onclick=function(){
//		n++
//		if(n>=aLi.length-1){n=aLi.length-1};
//		run();
//		hxsd_tools.move(oUl,{"left":-li_w*n})
//	}
    $(function () {
        var n = 0;
        var timer;
        var banner = $("div.banner");
        var ol = banner.find("ol").find("li");
        var ul = banner.find("ul").find("li");
        function run1() {
            timer = setInterval(function () {
                n++;
                if (n >= 4) n = 0;
                play123()
            }, 2000);
        }
        run1();
        function play123() {
            ol.each(function () {
                $(this).removeClass("ac");
            });
            ol.eq(n).addClass("ac");
            ul.find("img").finish().animate({"opacity": 0}, 500, function () {
                ul.find("img").attr("src", "images/s" + n + ".jpg").animate({"opacity": 1}, 500)
            });
        }
        banner.find("a.nextBtn").on("click", function () {
            n++;
            if (n >= 4) n = 0;
            play123()
        });
        banner.find("a.prevBtn").on("click", function () {
            n--;
            if (n < 0) n = 3;
            play123()
        });
        banner.on("mouseenter", function () {
            clearInterval(timer);
        });
        banner.on("mouseleave", function () {
            run1()
        });
        ol.each(function (index) {
            $(this).on("click", function () {
                n = index;
                $(this).addClass("ac").siblings().removeClass("ac");
                ul.find("img").finish().animate({"opacity": 0}, 500, function () {
                    ul.find("img").attr("src", "images/s" + index + ".jpg").animate({"opacity": 1}, 500)
                });
            });
        });
    });

//-----------------------------------------------------------------------------------------
//    var allbox = document.getElementsByClassName("allbox")[0]
//    var section = allbox.getElementsByTagName("section")
//    var s5 = document.getElementsByClassName("s5")[0]
//    var title = s5.getElementsByClassName("title")[0]
//    var ooul = title.getElementsByTagName("ul")[0]
//    var ooli = ooul.getElementsByTagName("li")
//
//    for (var i = 0; i < ooli.length; i++) {
//        ooli[i].index = i
//        ooli[i].onmouseover = function () {
//            for (var j = 0; j < ooli.length; j++) {
//                section[j].style.display = "none"
//            }
//            section[this.index].style.display = "block"
//        }
//
//    }
//})
    $(function(){
        $(".s5").find(".title").find("ul").find("li").each(function(index){
            var _this=this;
            $(this).on("mouseover",function(){
                $(_this).addClass("spe").siblings("li").removeClass("spe");
                $(".s5").find(".center").find(".allbox").find("section").eq(index).show().siblings().hide();
            });
        });
    });
});
//--------------------------------------------------------------------------------
$(function () {
    var adiv=$("body>div:gt(4):lt(12)");
    var list=$("ul.LocationFloorList");
    $("div.nav_dw").find("ul").eq(1).find("li").find("a.a6").on("click",function(){
        $("html,body").animate({
            // 以hash值为id选择器
            scrollTop:$(".header").offset().top
        },600);
    });
    $(window).on("scroll",function(){
        if($(document).scrollTop()>$("div.s2").offset().top){
            $("ul.LocationFloorList").show();
        }else{
            $("ul.LocationFloorList").hide();
        }
        var n=$(document).scrollTop()-adiv.eq(0).offset().top;
        if(n<0) n=0;
        var x=parseInt(n/adiv.eq(1).height());
        list.find("li").eq(x).addClass("cc").siblings().removeClass("cc");
    });

    list.find("li").each(function(index){
        var _this=this;
        $(this).on("click",function(){
            $(_this).addClass("cc").siblings().removeClass("cc");
            $("html,body").finish().animate({
                scrollTop:adiv.eq(index).offset().top
            },600);
        });
    });

    //var LocationFloorList = document.getElementsByClassName('LocationFloorList')[0];
    //var aLi = LocationFloorList.getElementsByTagName('li');
    //var aFloor = document.getElementsByClassName('floor');
    //var arr = [];
    //
    ////-------------------------------------------------
    //
    //for (var i = 0; i < aFloor.length; i++) {
    //    var json = {};
    //    json.name = i;
    //    json.offsetTop = aFloor[i].offsetTop;
    //    arr.push(json);
    //}
    //
    //window.onscroll = function () {
    //    //显示楼层编号-------------------------------------------------
    //    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    //
    //    // 根据楼层滚动位置，定位编号------------------------------------------------
    //    var last_arr = [];
    //    for (var j = 0; j < arr.length; j++) {
    //        if (arr[j].offsetTop < scrolltop + 400) {//400为接近屏幕的敏感区
    //            last_arr.push(arr[j].name);
    //        }
    //    }
    //
    //    var li_index = last_arr[last_arr.length - 1];
    //
    //    for (var l = 0; l < aFloor.length; l++) {
    //        aLi[l].className = '';
    //    }
    //
    //    //页面上部如果有内容，没有楼层会放入新数组，产生错误
    //    last_arr.length == 0 ? aLi[0].className = 'cc' : aLi[li_index].className = 'cc';
    //
    //
    //    //点击编号，跳转到相对楼层-----------------------------------------------
    //    for (var i = 0; i < aFloor.length; i++) {
    //        aLi[i].index = i;
    //        aLi[i].onclick = function () {
    //            var start = document.documentElement.scrollTop || document.body.scrollTop;
    //            var end = arr[this.index].offsetTop;
    //            move(start, end)
    //        }
    //    }
    //    //move-------------------------------------------------------
    //    var timer;
    //
    //    function move(start, end) {
    //        var dis = end - start;
    //        var count = parseInt(1500 / 30);
    //        var n = 0;
    //        clearInterval(timer);
    //        timer = setInterval(function () {
    //            n++;
    //            var a = 1 - n / count;
    //            var step_dis = start + dis * (1 - a * a * a * a);
    //            window.scrollTo(0, step_dis);
    //            if (n == count) {
    //                clearInterval(timer);
    //            }
    //
    //        }, 30)
    //    }
    //
    //}
    //
})	;
	

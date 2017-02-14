// JavaScript Document
//拖拽
function drag(obj,title){
	title=title || obj;
	title.onmousedown=function(ev){
		ev=ev||window.event;
		//计算鼠标在盒子内的位置
		var disX=ev.clientX-obj.offsetLeft;
		var disY=ev.clientY-obj.offsetTop;
		document.onmousemove=function(ev){
			var l=ev.clientX-disX;
			var t=ev.clientY-disY;
			if(l>document.documentElement.clientWidth-obj.offsetWidth){
				l=document.documentElement.clientWidth-obj.offsetWidth
			}
			if(l<0){
				l=0
			}
			if(t>document.documentElement.clientHeight-obj.offsetHeight){
				t=document.documentElement.clientHeight-obj.offsetHeight;
			}
			if(t<0){
				t=0
			}
			obj.style.left=l+"px";
			obj.style.top=t+"px";
		}
		document.onmouseup=function(){
			document.onmousemove=null;
		}
		return false;
	};
};
//绝对居中
function Center(obj){
	obj.style.display="block";
	var screenW=document.documentElement.clientWidth;
	var screenH=document.documentElement.clientHeight;
	function run(){
	obj.style.left=(screenW-obj.offsetWidth)/2+"px";
	obj.style.top=(screenW-obj.offsetheight)/2+"px";
	}
	window.onresize=function(){
		run(obj);
	}
	run()
};

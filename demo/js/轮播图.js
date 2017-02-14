// JavaScript Document
documentReady(function(){
	var oDiv=document.getElementsByClassName("banner")[0];
	var oUl=oDiv.getElementsByTagName("ul")[0];
	var aLi=oUl.getElementsByTagName("li");
	var oOl=oDiv.getElementsByTagName("ol")[0];
	var aBtn=oOl.getElementsByTagName("li");
	var li_w=hxsd_tools.getStyle(aLi[0], 'width');//图片的宽度
	//aLi[0].style.opacity=1;
	
	var pBtn=document.getElementById('prevBtn');
	var nBtn=document.getElementById('nextBtn');
	
	
	var n=0;//当前显示图片索引
	var timer;
	oDiv.onmouseover=function(){
		clearInterval(timer)
	};
	oDiv.onmouseout=function(){
		play()
	};
	
		
	//添加点击事件
	for(var i=0; i<aBtn.length; i++){
		aBtn[i].index=i;//发拍照
		aBtn[i].onclick=function(){
			clearInterval(timer)
			if(n!=this.index){
				slideItem(n,this.index);
				n=this.index;
				changeAc();
			}
			play();
		};
	};
	
	pBtn.onclick=function(){
		clearInterval(timer)
		if(n<1){
			n=aLi.length;
			slideItem(0,aLi.length-1);
		}else{
			slideItem(n,n-1);
		};
		n--;
		changeAc();
		play()
	}

	nBtn.onclick=function(){
		clearInterval(timer)
		n++;
		if(n>aLi.length-1){
			n=0;
			slideItem(aLi.length-1,0);
		}else{
			slideItem(n-1,n);
		};
		changeAc();
		play()
	};
	function play(){
	timer=setInterval(function(){
		n++;
		if(n>aLi.length-1){
			n=0;
			slideItem(aLi.length-1,0);
		}else{
			slideItem(n-1,n);
		};
		changeAc();
	},3000)}
	play()
	
	
	function slideItem(a,b){
		aLi[a].style.display='block';
		aLi[a].style.opacity=1;
		
		aLi[b].style.display='block';
		aLi[b].style.opacity=0;
		
		move(aLi[a],'opacity',0,1000);
		move(aLi[b],'opacity',100,1000,function(){
			aLi[a].style.display='none';
		});
	};
	
	
	function changeAc(){
		for(var j=0; j<aBtn.length; j++){
			aBtn[j].className='';
		};
		aBtn[n].className='ac';
	}
})
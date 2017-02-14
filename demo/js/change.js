// JavaScript Document
documentReady(function(){
	var oPage4=document.getElementsByClassName("page4")[0];
	var oTitle=oPage4.getElementsByClassName("title")[0]
	var aLi=oTitle.getElementsByTagName("li");
	var aCon=oPage4.getElementsByClassName("con");
	for(var k=0;k<aLi.length;k++){
		aCon[k].style.display="none";
		aCon[0].style.display="block";
		aLi[k].index=k
		aLi[k].onmouseover=function(){
			for(var j=0;j<aLi.length;j++){
				aLi[j].className="";
				aLi[this.index].className="spe";
				aCon[j].style.display="none"
				aCon[this.index].style.display="block"
			}
		}
	}
})
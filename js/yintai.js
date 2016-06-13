$(function(){
weixin()
shoujiyintai()
wodedingdan()
gouwudai()
banner()
for(var i=0;i<10;i++){
bannerx(i)
}
bannerxia()
for(var i=0;i<12;i++){
	tubk(i)
}
for(var i=0;i<8;i++){
	baihuobk(i)
}
baihuo()
for(var i=0;i<9;i++){
	banner1(i)
}
for(var i=0;i<6;i++){
	banner2(i)
}
for(var i=0;i<36;i++){
	loucengbk(i)
}
function weixin(){
		var d=$(".wx")[0]
		var y=$(".wx-left")[0]
		var yin=$(".wx-right")[0]
		addEvent(d,"mouseover",function(){
			yin.style.display="block"
		})
		addEvent(d,"mouseover",function(){
			y.style.display="block"
		})
		addEvent(d,"mouseout",function(){
			y.style.display="none"
		})
		addEvent(d,"mouseout",function(){
			yin.style.display="none"
		})			
}
function shoujiyintai(){
		var y=$(".phone-link-y")[0]
		var d=$(".phone-link")[0]
		addEvent(d,"mouseover",function(){
			y.style.display="block"
		})
		addEvent(d,"mouseout",function(){
			y.style.display="none"
		})			
}	
function wodedingdan(){
		var y=$(".myyt-y")[0]
		var d=$(".myyt")[0]
		addEvent(d,"mouseover",function(){
			y.style.display="block"
		})
		addEvent(d,"mouseout",function(){
			y.style.display="none"
		})		
}	
function gouwudai(){
		var y=$(".shop-y")[0]
		var d=$(".shop-d")[0]
		addEvent(d,"mouseover",function(){
			y.style.display="block"
		})
		addEvent(d,"mouseout",function(){
			y.style.display="none"
		})		
}
function banner(){
	var box=$(".wrap-banner")[0]
	var tu=$(".wrap-banner-k")
	var yuan=$(".dians-s")
	var left=$(".wrap-banner-left")[0]
	var right=$(".wrap-banner-right")[0]
	var h=box.offsetWidth
	var n=0
	var next=0
	var flag=true
	var t=setInterval(move,1500)
	box.onmouseover=function(){
		clearInterval(t)
	}
	box.onmouseout=function(){
		t=setInterval(move,1500)
	}
	left.onclick=function(){
		move1()
	}
	right.onclick=function(){
		move()
	}
		function move(){
			if(!flag){
				return
			}
			flag=false
			next=n+1
			if(next>=tu.length){
				next=0
			}
			for(var i=0;i<yuan.length;i++){
				yuan[i].style.background="gray"
			}
			yuan[next].style.background="red"
			tu[next].style.opacity=0
			tu[next].style.left=0
			animate(tu[n],{opacity:0},500)
			animate(tu[next],{opacity:1},500,function(){
				flag=true
			})
			n=next
		}
		function move1(){
			if(!flag){
				return
			}
			flag=false
			next=n-1
			if(next<0){
				next=tu.length-1
			}
			for(var i=0;i<yuan.length;i++){
				yuan[i].style.background="gray"
			}
			yuan[next].style.background="red"
			tu[next].style.opacity=0
			tu[next].style.left=0
			animate(tu[n],{opacity:0},500)
			animate(tu[next],{opacity:1},500,function(){
				flag=true
			})
			n=next
		}
		for(var i=0;i<yuan.length;i++){
			yuan[i].index=i
			yuan[i].onclick=function(){
				if(this.index<n){
					for(var i=0;i<yuan.length;i++){
						yuan[i].style.background="gray"
					}
					yuan[this.index].style.background="red"
					tu[this.index].style.left=0
					tu[this.index].style.opacity=0
					animate(tu[n],{opacity:0},500)
					animate(tu[this.index],{opacity:1},500)
					n=this.index
				}
				else if(this.index>n){
					for(var i=0;i<yuan.length;i++){
						yuan[i].style.background="gray"
					}
					yuan[this.index].style.background="red"
					tu[this.index].style.left=0
					tu[this.index].style.opacity=0
					animate(tu[n],{opacity:0},500)
					animate(tu[this.index],{opacity:1},500)
					n=this.index
				}
						
			}
		}
}
function bannerx(n){
		var y=$(".xxk")[n]
		var d=$(".banner-xk-zi")[n]
		addEvent(d,"mouseover",function(){
			y.style.display="block"
		})
		addEvent(d,"mouseout",function(){
			y.style.display="none"
		})		
}
function bannerxia(){
		var y=$(".wb-a-xia");
		var d=$(".wb-a");
		for(var i=0;i<d.length;i++){
			d[i].index=i
			d[i].onmouseover=function(){
					for(var i=0;i<d.length;i++){
						d[i].style.borderBottom="0"
						y[i].style.display="none"
					}
					d[this.index].style.borderBottom="4px solid #e5004f"
					y[this.index].style.display="block"
				}
		}
}
function tubk(n){
	var k=$(".wb-a-xia-k")[n]
	var yi=$(".bk-1")[n]
	var er=$(".bk-2")[n]
	var san=$(".bk-3")[n]
	var si=$(".bk-4")[n]
	k.onmouseover=function(){
		animate(yi,{width:222},500)
		animate(er,{height:262},500)
		animate(san,{width:221},500)
		animate(si,{height:261},500)
	}
	k.onmouseout=function(){
		animate(yi,{width:1},500)
		animate(er,{height:1},500)
		animate(san,{width:1},500)
		animate(si,{height:1},500)
	}
}
function baihuobk(n){
	var k=$(".bh-a-aaa-er-k")[n]
	var yi=$(".bk-11")[n]
	var er=$(".bk-22")[n]
	var san=$(".bk-33")[n]
	var si=$(".bk-44")[n]
	k.onmouseover=function(){
		animate(yi,{width:200},500)
		animate(er,{height:250},500)
		animate(san,{width:199},500)
		animate(si,{height:249},500)
	}
	k.onmouseout=function(){
		animate(yi,{width:1},500)
		animate(er,{height:1},500)
		animate(san,{width:1},500)
		animate(si,{height:1},500)
	}
}
	function baihuo(){
			var y=$(".bh-a-aaa")
			var d=$(".bh-a-aa-zi")
			for(var i=0;i<d.length;i++){
				d[i].index=i
				d[i].onmouseover=function(){
						for(var i=0;i<d.length;i++){
							d[i].style.borderBottom="0"
							y[i].style.display="none"
						}
						d[this.index].style.borderBottom="3px solid #e5004f"
						y[this.index].style.display="block"
					}
			}
	}

	function banner1(n){
	var box=$(".fashion-left-xia-lun")[n]
	var tu=$(".fashion-lunbo",box)
	var zuo=$(".fashion-l")[n]
	var you=$(".fashion-y")[n]
	var n=0
	var next=0
	zuo.onclick=function(){
		move1()
	}
	you.onclick=function(){
		move()
	}
		function move(){
			next=n+1
			if(next>=tu.length){
				next=0
			}
			tu[next].style.left=170+"px"
			animate(tu[n],{left:-170},500)
			animate(tu[next],{left:0},500)
			n=next
		}
		function move1(){
			next=n-1
			if(next<0){
				next=tu.length-1
			}
			tu[next].style.left=-170+"px"
			animate(tu[n],{left:170},500)
			animate(tu[next],{left:0},500)
			n=next
		}
}
function banner2(n){
	var box=$(".fashion-c")[n]
	var tu=$(".fashion-c-tu",box)
	var yuan=$(".fashion-c-yuan",box)
	var zuo=$(".fashion-c-zuo")[n]
	var you=$(".fashion-c-you")[n]
	var h=box.offsetWidth
	var n=0
	var next=0
	var flag=true
	var t=setInterval(move,1500)
	box.onmouseover=function(){
		clearInterval(t)
	}
	box.onmouseout=function(){
		t=setInterval(move,1500)
	}
	zuo.onclick=function(){
		move1()
	}
	you.onclick=function(){
		move()
	}
		function move(){
			if(!flag){
				return
			}
			flag=false
			next=n+1
			if(next>=tu.length){
				next=0
			}
			for(var i=0;i<yuan.length;i++){
				yuan[i].style.background="gray"
			}
			yuan[next].style.background="red"
			tu[next].style.left=h+"px"
			animate(tu[n],{left:-h},500)
			animate(tu[next],{left:0},500,function(){
				flag=true
			})
			n=next
		}
		function move1(){
			if(!flag){
				return
			}
			flag=false
			next=n-1
			if(next<0){
				next=tu.length-1
			}
			for(var i=0;i<yuan.length;i++){
				yuan[i].style.background="gray"
			}
			yuan[next].style.background="red"
			tu[next].style.left=-h+"px"
			animate(tu[n],{left:h},500)
			animate(tu[next],{left:0},500,function(){
				flag=true
			})
			n=next
		}
		for(var i=0;i<yuan.length;i++){
			yuan[i].index=i
			yuan[i].onclick=function(){
				if(this.index<n){
					for(var i=0;i<yuan.length;i++){
						yuan[i].style.background="gray"
					}
					yuan[this.index].style.background="red"
					tu[this.index].style.left=-h+"px"
					animate(tu[n],{left:h},500)
					animate(tu[this.index],{left:0},500)
					n=this.index
				}
				else if(this.index>n){
					for(var i=0;i<yuan.length;i++){
						yuan[i].style.background="gray"
					}
					yuan[this.index].style.background="red"
					tu[this.index].style.left=h+"px"
					animate(tu[n],{left:-h},500)
					animate(tu[this.index],{left:0},500)
					n=this.index
				}
						
			}
		}
}
function loucengbk(n){
	var k=$(".fashion-you")[n]
	var yi=$(".bk-111")[n]
	var er=$(".bk-222")[n]
	var san=$(".bk-333")[n]
	var si=$(".bk-444")[n]
	k.onmouseover=function(){
		animate(yi,{width:270},500)
		animate(er,{height:180},500)
		animate(san,{width:269},500)
		animate(si,{height:179},500)
	}
	k.onmouseout=function(){
		animate(yi,{width:1},500)
		animate(er,{height:1},500)
		animate(san,{width:1},500)
		animate(si,{height:1},500)
	}
}


function aah(){
        var floor=$(".fash");
        var lis=$(".lie")[0];
        var liss=$(".lies");
        var width=lis.offsetWidth;/*获取元素的宽度*/
        var height=lis.offsetHeight;/*获取元素的高度*/
        var ch=document.documentElement.clientHeight;/*获取窗口的高度*/
        var cw=document.documentElement.clientWidth;/*获取窗口的宽度*/
        lis.style.top=(ch-height)/2+"px";/*获取楼层控制的开关的居中问题*/
        var flag2=true;
        var arr=[
          {name:"时尚潮流"},
          {name:"潮流女装"},
          {name:"精品男装"},
          {name:"时尚鞋靴"},
          {name:"潮流箱包"},
          {name:"美容护肤"},
          {name:"运动户外"},
          {name:"内衣配饰"},
          {name:"婴童家居"},
          {name:"返回顶部"}
        ]
        for(var i=0;i<liss.length;i++){/*for循环控制楼层控制时间*/
          liss[i].index=i;/*对所需的图片和楼层控制进行编号*/
          liss[i].onclick=function(){/*创建楼层控制的点击事件*/
            if(flag2){
              flag2=false;
               for(var i=0;i<liss.length;i++){
                liss[i].innerHTML="";
                liss[i].style.background="transparent"
                /*通过for循环来控制所需的
                此时的楼层的背景颜色*/
              }
                  liss[this.index].style.background="#C81623";
                  liss[this.index].innerHTML=arr[this.index]["name"]
                  liss[this.index].style.fontSize=18+'px';
                  liss[this.index].style.color='#fff';
                  if(this.index==9){
                  	var obj=document.documentElement.scrollTop? document.documentElement:document.body;/*浏览器的兼容问题，用三元运算符进行控制*/
                  	/*定义楼层到顶部的高度，*/
                  	  liss[9].style.background="#C81623";
                      animate(obj,{scrollTop:0},1000,function(){
                        flag2=true;
                        liss[9].style.background="transparent";
                        liss[9].innerHTML="";
                      }); /*创建滚动的动画效果*/ 
                  }else{
                  	var obj=document.documentElement.scrollTop? document.documentElement:document.body;/*浏览器的兼容问题，用三元运算符进行控制*/
                      var top=floor[this.index].offsetTop;/*定义楼层到顶部的高度，*/
                      animate(obj,{scrollTop:top},1000,function(){
                        flag2=true;
                      }); /*创建滚动的动画效果*/ 
                  }
              
            }
          }
        }
        var flag=true;
        var flag1=true;
         window.onscroll=function(){
          if(!flag2){
            return
          }
          var obj=document.documentElement.scrollTop? document.documentElement:document.body;/*浏览器的兼容问题，用三元运算符进行控制*/
          for(var i=0;i<floor.length;i++){
            if(obj.scrollTop>=floor[i].offsetTop-ch+500){/*如果控制的楼层的到顶部得到高度就可以等式不成立的时候进行颜色变换*/
              for(var j=0;j<floor.length;j++){
                 liss[j].innerHTML="";
                 liss[j].style.background="transparent"
              }
                 liss[i].style.background="#C81623";
                 liss[i].innerHTML=arr[i]["name"]
                  liss[i].style.fontSize=18+'px';
                  liss[i].style.color='#fff';
                 // for(var i=0;j<floor.length;i++){
                 //   var aa=floor[j].getAttribute("aa");
                 //   floor[j].src=aa;
                 // }
            }
          }
          if(obj.scrollTop>=floor[0].offsetTop-ch+100){/*通过控制开关，来控制
            透明度的出项，并且控制楼层控制的动态，来控制开关*/
            if(flag){
              flag=false;
              animate(lis,{opacity:1},300,function(){/*当执行此处程序
                ，将本层开关关掉，当动画完成时，打开下个开关开始*/
                flag1=true;
              });
              
            }
          }else{
            if(flag1){
              flag1=false;
              animate(lis,{opacity:0},300,function(){
                /*当执行此处程序
                ，将本层开关关掉，当动画完成时，打开上个开关开始*/
                flag=true;
              }); 
              
            }
          }
         }
}
aah();     
  
function movetu(){
  	var y=$('.banner-right-img')[0];
  	y.onmouseover=function(){
  		animate(y,{right:460},200)
  	}
  	y.onmouseout=function(){
  		animate(y,{right:450},200)
  	}
}
  movetu()
    function flash(){
    	var y=$(".banner-xk-zi");
    	var t=$(".aa-imgs");
    	for(var i=0;i<y.length;i++){
    		y[i].index=i
    		y[i].onmouseover=function(){
    			t[this.index].style.display="block";
    		}
    		y[i].onmouseout=function(){
    			t[this.index].style.display="none"
    		}
    	}
    		
    }
    flash();
    function flass(){
    	var y=$(".cdcd")[0];
    	var t=$(".caidan2")[0];
    		y.onmouseover=function(){
    			t.style.display="block";
    		}
    		y.onmouseout=function(){
    			t.style.display="none"
    		}
    	}
    		
    flass();
});
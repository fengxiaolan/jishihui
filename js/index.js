 /*导入头部和尾部*/
 $(document).ready(function(){

      $.ajax({
         type:"get",
         url:"html/header.html",
         dataType:"html",
         success:function(data){
             var html=data;
            $("#headcon").html(html);
            $.ajax({
               type:"get",
               url:"mock/user.json",
               dataType:"json",
               success:function(user){
                  $(".login").html("欢迎您："+user.user.nickname).css({"width":122,"color":"darkred"});
                  $(".regist").css({"display":"none"});
               }
            })
         },   
         error:function(){ 
             alert('fail'); 
        }  
      });

     $.ajax({
         type:"get",
         url:"html/footer.html",
         dataType:"html",
         success:function(data){
             var html=data;
            $("#footercon").html(html);
         },   
         error:function(){ 
             alert('fail'); 
        }
        }); 

   //登录成功后，换取用户名
     // $.ajax({
     //     url:"mock/user.json",
     //     type:"get",
     //     success:function(html)
     // })



  });  

 // *************************************
 /*右侧固定区域*/
  $(document).ready(function(){
  $(".cart1").mouseenter(function(){
       $(".cart1").stop().css({"background":"#c40000"});   
    })
  $(".cart1").mouseleave(function(){
       $(".cart1").stop().css({"background":"#3f3c3c"})   
    })
     $(".xin").mouseenter(function() {
       $(".xin p").css({"display":"block"});
       $(".xin").css({"background":"#c40000"});
     })
     $(".xin").mouseleave(function() {
       $(".xin p").css({"display":"none"});
       $(".xin").css({"background":"#3f3c3c"})
     })
      $(".history").mouseenter(function() {
       $(".history p").css({"display":"block"});
       $(".history").css({"background":"#c40000"})
     })
        $(".history").mouseleave(function() {
       $(".history p").css({"display":"none"});
       $(".history").css({"background":"#3f3c3c"})
     })
        
        $(".man").mouseenter(function() {
       $(".man .manservice").css({"display":"block"});
       $(".man").css({"background":"#c40000"})
     })
         $(".man").mouseleave(function() {
       $(".man .manservice").css({"display":"none"});
       $(".man").css({"background":"#3f3c3c"})
     })

           $(".ferwei").mouseenter(function() {
       $(".ferwei .erfix").css({"display":"block"});
       $(".ferwei").css({"background":"#c40000"})
     })
         $(".ferwei").mouseleave(function() {
       $(".ferwei .erfix").css({"display":"none"});
       $(".ferwei").css({"background":"#3f3c3c"})
     })

      $(".retop").click(function() {
           $(window).scrollTop(0);
     })   

 });


  /*banner的js***********************************************/
  $(function(){
      // 初始化
     var _imgs = $("#banncon .imgs li"), // 所有轮播的图片盒子
      len = _imgs.length, // 总图片张数
      imgWidth = _imgs.outerWidth,
      currentIndex = 0, // 当前显示图片的索引
      nextIndex = 1, // 即将显示图片的索引
      timer = null; // 计时器id

    // 自动轮播切换
    timer = setInterval(function(){
       move();
    }, 3000);

    //鼠标移入/移出容器范围，停止/启动自动轮播
    $("#banncon").mouseenter(function(){
      clearInterval(timer);
      $("#prev,#next").show();
      
    });
    $("#banncon").mouseleave(function(){
      timer = setInterval(move, 3000);
      $("#prev,#next").hide();
      
    });

    //动态生成小圆点
    var html = "";
    for (let i = 0; i < len; i++) {
      html += `<div class="${i===0?'current':''}"></div>`;
    }
    $("#pages").html(html);
    // 查找出所有小圆点的DOM对象
   
    // 在小圆点上over
    
		 $("#pages").on("click","div",function(){
         // 获取当前点击小圆点的索引
              var index=$(this).index();
              if(index==currentIndex)
                return;
              nextIndex=index;
              move();    
		 });
    
    // 向前翻页
    $("#prev").click(function(){
			nextIndex = currentIndex - 1;
			if (nextIndex < 0)
				nextIndex = len - 1;
			move();
		});
		// 向后翻页
		$("#next").click(move);

    // 轮播切换图片
    function move(){
      // 当前显示的图片淡出
      _imgs.eq(currentIndex).fadeOut(1000);
      // 即将显示的图片淡入
      _imgs.eq(nextIndex).fadeIn(1000);
      // 修改小圆点样式
      $("#pages div").eq(currentIndex).removeClass("current");
     $("#pages div").eq(nextIndex).addClass("current");
      // 修改索引
      currentIndex = nextIndex;
      nextIndex++;
      if (nextIndex === len)
        nextIndex = 0;
    }

});


/******************************************************************/
 /*banner中轮播广告区域（向上滑动）*/
  $(document).ready(function(){
    var len1=$(".public .pubbox .pubul li").length;  //8
    var currIndex1=0;
    var nextIndex1=1;
    var timer1=null;
    $(".pubbox .pubul").css({"height":len1*25+"px"});
    //轮播
    timer1=setInterval(move1,2000);

    //移入移出
    $(".pubbox .pubul").on("mouseenter", ()=>{
         clearInterval(timer1);
    });
    $(".pubbox .pubul").on("mouseleave", ()=>{
      timer1 = setInterval(move1, 2000);
    });

    //广告轮播函数
    function move1(){
      var _top=-1*nextIndex1*25;
      var sul=$(".public .pubul");
        sul.animate({
            "marginTop":_top
        },1000,function(){
          if(nextIndex1>=len1){
            sul.css({"marginTop":"0px"});
          
          sul.find('.pubul li:last').appendTo(sul);   } 
        });       
        //console.log(_top);
       
        nextIndex1++;  
       // console.log(nextIndex1);
      }     
  });



  /***banner中强化的轮播图*******************************************/
 $(function(){
      var imgbox=$(".bancar .bancarq li"),
      len2=imgbox.length,
      imgw=imgbox.outerWidth(),
      currIndex2=1,
      nextIndex2=2,
      timer2=null;

  //复制
  var first=imgbox.eq(0).clone(true),
      last=imgbox.last().clone(true);

  //添加
  $(".bancarq").append(first)
            .prepend(last);

  len2+=2;
  $(".bancarq").width(imgw*len2).css("left",-imgw);

  // 动态添加小圆点
      var html = "";
      for (let i = 0; i < len2 - 2; i++) {
        html += "<div><i></i></div>";
      }

    $(html).appendTo(".smallpage")
           .first().addClass("cent");
      })
  
    $(".bancar").hover(function(){
        // mouseenter
        clearInterval(timer2); 
      }, function(){
        // mouseleave
        timer2 = setInterval(move2, 3000);
      }).mouseleave();

   $(".smallpage").on("click", "div", function(){
        // 获取当前点击小圆点的索引
        var index2 = $(this).index();
        // 判断

        if (index2 + 1 === currIndex2)
          return;
        nextIndex2 = index2 + 1;
        move2();
      });

    // 轮播切换图片的函数
      function move2(){

        // 计算轮播运动定位位置
        var _left = -1 * nextIndex * imgW;
        /* 切换小圆点背景 */
        // 计算当前对应小圆点的索引
        var circleIndex = nextIndex2 - 1;
        if (nextIndex2 === 0)
          circleIndex = len2 - 3;
        else if (nextIndex2 === len2 - 1)
          circleIndex = 0;
        // 添加/删除样式
        $(".smallpage div").eq(circleIndex).addClass("cent")
                 .siblings().removeClass("cent");
        $(".smallpage div.cent i").animate({"width":"40px"},500);

        // 运动定位
        $(".bancar .bancarq").stop().animate({left:_left}, function(){
          // 判断 nextIndex 取值
          if (nextIndex2 >= len2) { // 还原初始状态
            currIndex2 = 1;
            nextIndex2 = 2;
            $(".bancarq").css("left",-imgW);
          } 
          if (currIndex2 === 0) {
            currIndex2 = len2 - 2;
            nextIndex2 = len2 - 1;
            $(".bancarq").css("left", -(len2-2)*imgW);
          }
        });

        // 修改索引值
        currIndex2 = nextIndex2;
        nextIndex2++;
        console.log(len2);
      }





/*************************/
 /*计时器*/
 var timer2=null;
 var date=new Date();
 var endtime=date.setTime(date.getTime()+2*60*60*1000);

 timer2=setInterval(function(){
 	
    var diff=endtime-new Date();
    var seconds=Math.ceil(diff/1000);
    seconds--;
    var _second=seconds%60;
    var _minute=Math.floor(seconds/60)%60;
    var _hour=Math.floor(seconds/(60*60))%24;
    var _day=Math.floor(seconds/(60*60*24));
    
    $(".day").text(("0"+_day).slice(-2));
    $(".hour").text(("0"+_hour).slice(-2));
    $(".minute").text(("0"+_minute).slice(-2));
    $(".second").text(("0"+_second).slice(-2));
 },1000);



 /****************************/
  /*滑动效果*/
/*$(function(){
	$("#slid .sliimg li").hover(function(){
            	$(this).addClass("imactive");
            	$("#slid .sliimg li.ac").removeClass("ac");
         },function(){
            	$(this).removeClass("imactive");
            	$("#slid .sliimg li.ac").addClass("ac");
  }
  );

    $("#slid .sliimg").hover(function(){
      $("#slid .sliimg li").removeClass("ac");
    })
});*/
 


// 阶梯效果******************************

$(function(){
  //窗口的高度
   var winHeight=$(window).height();
   var isShow=false;

   //处理窗口滚动事件
   $(window).scroll(function(){
    if(!isShow){
      //一楼到文档布局的高度
    var docHeight=$(".floor").offset().top;
    //获取滚动高度
    var scroHeight=$(window).scrollTop();
       if(scroHeight>=docHeight-winHeight/2){
            $("#lift").stop().fadeIn(200);
      }else{
        $("#lift").stop().fadeOut(200);
      }

      //滚动处理侧边菜单的汉字的隐藏
      $(".floor").each(function(index,element){
        // 获取当前遍历到楼层前所有布局的高度
          var _top=$(this).offset().top;
          if(scroHeight>=_top-winHeight/2){
             $(".lift_menu li").eq(index).addClass("currlist").children("span").show()
              .end()
              .siblings().removeClass("currlist").children("span").hide();
          }
      });    
    }   
   });

   //处理菜单中菜单项的点击事件
   $(".lift_menu").on("click","li:not(:last)",function(){
    isShow=true;
    // 将当前点击li下的span显示，其它隐藏
       $(this).addClass("currlist").children("span").show()
         .end()
         .siblings().removeClass("currlist").children("span").hide();

        //获取当前的菜单项的索引
        var _index=$(this).index();
        // 计算对应楼层布局结构前的高度
        var _top=$(".floor").eq(_index).offset().top;
        //运动动画效果
        $("html,body").stop().animate({scrollTop:_top},function(){
           isShow=false;
        });
   });

   //hover效果
   $(".lift_menu li").hover(function(){
      $(this).children("span").show();
   },function(){
      if(!$(this).is(".currlist"))
          $(this).children("span").hide();
   })
   //返回顶部
   $(".lift_menu li:last").click(function(){
       // $("html, body").stop().animate({scrollTop:0});
       $(window).scrollTop(0);
   });

});


/**热销推荐js*************************************************/

$(function(){
     $(".hotsug .hottitles li").on("mouseenter",function(){
       //console.log($);
        var index=$(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        $(this).parents(".hotsug").find(".hotpro li").eq(index).show().siblings().hide();
     })

  });



/**一楼tab效果*************************************************/
$(function(){
  $(".oneflist .onetitle li").on("mouseenter",function(){
    var index=$(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(this).parents(".oneflist").find(".ones li").eq(index).show().siblings().hide();
  })

});




// 猜你喜欢***********************************************
$(document).ready(function(){
       // 从 mock/like.json 文件中加载商品数据
     $.getJSON("mock/likepros.json", function(data){
        // 渲染模板
        var html = template("like_list",{likepros:data});
      //  console.log(data);
        // 显示
        $("#sugbuy .sbuy").html(html);
    });

/*var data={likepros:[
  {"id":1,"img":"images/like1.jpg","title":"大基地真空包装水果甜玉米情侣款 4对/啦啦","price":108,"price1":00},
  {"id":2,"img":"images/like2.jpg","title":"大基地真空包装水果甜玉米情侣款 4对/啦啦","price":105,"price1":00},
  {"id":3,"img":"images/like3.jpg","title":"大基地真空包装水果甜玉米情侣款 4对/啦啦","price":104,"price1":00},
  {"id":4,"img":"images/like4.jpg","title":"大基地真空包装水果甜玉米情侣款 4对/啦啦","price":102,"price1":00},
  {"id":5,"img":"images/like5.jpg","title":"大基地真空包装水果甜玉米情侣款 4对/啦啦","price":100,"price1":00}
]}
var html = template("like_list",data);
        // console.log(data);
        // 显示
        $("#sugbuy .sbuy").html(html);
*/

// hover效果
  $("#sugbuy .sbuy .sprod").hover(function(){
    console.log("a");
       $(this).children("p").css({"paddingLeft":"1px"});
       $(this).children("span").css({"paddingLeft":"1px"});
       $(this).children("img").css({"marginLeft":"18px"});

  },function(){
       $(this).children("p").css({"paddingLeft":"5px"});
       $(this).children("span").css({"paddingLeft":"5px"});
       $(this).children("img").css({"margin":"auto"});
  })

});


/*hot效果************************************************/
// hot请求模板效果
$(function(){
     $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
       // console.log(data)
        var data=data[0].hot1;
        var html = template("hotshow_prod",{hot1pros:data});
        $(".hotpro .hot1").html(html);
         //console.log(data[0].hot1);
      });  

     $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[0].hot2;
        var html = template("hotshow_prod2",{hot2pros:data});
        $(".hotpro .hot2").html(html); 
      });  

        $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[0].hot3;
        var html = template("hotshow_prod3",{hot3pros:data});
        $(".hotpro .hot3").html(html); 
      });       
})


/*一楼模板2,3效果*************************************************/
$(function(){
    $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[1].onef1.one2;
        var html = template("oneshow2",{onefloor2:data});
        $(".onetab2").html(html); 
    }); 
    $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[1].onef1.one3;
        var html = template("oneshow3",{onefloor3:data});
        $(".onetab3").html(html); 
    }); 

})

// 二楼23tab
$(function(){
    $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[1].twof2.one2;
        var html = template("twoshow2",{twofloor2:data});
        $(".twotab2").html(html); 
    }); 
    $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[1].twof2.one3;
        var html = template("twoshow3",{twofloor3:data});
        $(".twotab3").html(html); 
    }); 
})

  // 三楼23tab
$(function(){
    $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[1].threef3.one2;
        var html = template("threeshow2",{threefloor2:data});
        $(".threetab2").html(html); 
    }); 
    $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[1].threef3.one3;
        var html = template("threeshow3",{threefloor3:data});
        $(".threetab3").html(html); 
    }); 
})

 // 四楼23tab
$(function(){
    $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[1].fourf4.one2;
        var html = template("fourshow2",{fourfloor2:data});
        $(".fourtab2").html(html); 
    }); 
    $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[1].fourf4.one3;
        var html = template("fourshow3",{fourfloor3:data});
        $(".fourtab3").html(html); 
    }); 
})

//五楼23tab
$(function(){
    $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[1].fivef5.one2;
        var html = template("fiveshow2",{fivefloor2:data});
        $(".fivetab2").html(html); 
    }); 
    $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[1].fivef5.one3;
        var html = template("fiveshow3",{fivefloor3:data});
        $(".fivetab3").html(html); 
    }); 
})

//六楼23tab
$(function(){
    $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[1].sixf6.one2;
        var html = template("sixshow2",{sixfloor2:data});
        $(".sixtab2").html(html); 
    }); 
    $.getJSON("mock/hotshow.json",{dataType:"jsonp"},function(data){
        var data=data[1].sixf6.one3;
        var html = template("sixshow3",{sixfloor3:data});
        $(".sixtab3").html(html); 
    }); 
});



//点击购物车的抛物线
$(function(){
  console.log("a");
   $(".hotpro .hcart").click(function(e){
    console.log("a1");
        var offset=$(".cart1 .cartnum").offset();
        var flyer= $("<img src='images/lazyload.gif' style='width:40px;height:40px; border-radius:50%;'>");
        flyer.fly({
          start:{
            left : e.clientX,
            top : e.clientY
          },
          end:{
            left: offset.left - $(window).scrollLeft(),
            top: offset.top - $(window).scrollTop(),
            width : 0,
            height : 0
          }
      });
      
      $(".cart1 .cartnum").text(1);

      e.preventDefault();
      e.stopPropagation();

 });



});
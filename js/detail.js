$(function(){
      //异步加载头部和尾部
         $.ajax({
         type:"get",
         url:"headpro.html",
         dataType:"html",
         success:function(data){
             var html=data;
            $("#detailheader").html(html);
            $.ajax({
               type:"get",
               url:"../mock/user.json",
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
         url:"footer.html",
         dataType:"html",
         success:function(data){
             var html=data;
            $("#detailfooter").html(html);
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




     //图片详情点击情况
        $(".imglist .smallist").on("click","li",function(){
             var _index=$(this).index();

             $(this).addClass('active').siblings().removeClass('active');
             $(this).parents(".imgcar").find(".bigimg .biglist li").eq(_index).show().siblings().hide();
        })
        //错误
        $(".imglist .pre").on("click",function(){
        	var curindex=$(".smallist li").find("active").index();
        	console.log(curindex);
        })


      // 触碰分享
     	$(".enjoy").hover(function(){
     	$(this).children(".lianjia").show();
	     },function(){
	     	$(this).children(".lianjia").hide();
	     })


    //导入具体页面的旁边的数据
     $.getJSON("../mock/detail.json",{dataType:"jsonp"},function(data){
          var data=data[0].extgood;
          //console.log(data);
          var html=template("deext",{detextends:data});
          $(".showlist .showexe").html(html);   
      })

    //导入详情图片数据
    
     $.getJSON("../mock/detail.json",{dataType:"jsonp"},function(data){
          var data=data[1].infoimg;
        //  console.log(data);
          var html=template("deimg",{deimgs:data});
          $("li.sintroduce .imgfos").html(html);   
      })


    //详情中点击的切换
     $(".showcon .showtitle").on("click","li",function(){
             var _index1=$(this).index();

             $(this).addClass('active').siblings().removeClass('active');
             $(this).parents(".showcon").find(".showtainer li").eq(_index1).show().siblings().hide();
        })
   

   //滚动到什么时候固定导航出来
    var isslid=false;
     $(window).scroll(function(){
      if(!isslid){
       var sliHeight=$(".showcon .showtitle").offset().top;
       var sliscroHeight=$(window).scrollTop();
         if(sliscroHeight>=sliHeight){
            $(".slidheader").stop().fadeIn(300);
         }else{
            $(".slidheader").stop().fadeOut(300);
         }
     }
     })

     // 固定导航出来后点击情况
     $(".slinfo").on("click","li",function(){
         var _index2=$(this).index();
          $(this).addClass('active').siblings().removeClass('active');
            var _top=$(".showcon .showtitle").offset().top;
            //滚动到相应位置
            $("html,body").stop().animate({scrollTop:_top-50});
             //位置的界面随着改变
           
           /*$(".showcon .showtitle li").eq(_index2).addClass("active").siblings().removeClass("active").parent(".showcon")
           .find(".showtainer li").eq(_index2).show().siblings().hide();*/
           $(".showcon .showtitle li").eq(_index2).addClass("active").siblings().removeClass("active");
           $(".showcon .showtainer li").eq(_index2).stop().show().siblings().stop().hide();
     })
     




     })
     
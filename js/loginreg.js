//  注册页面的tab
$(document).ready(function(){
  
   $(".regtitle").on("click","li",function(){
          var _index=$(this).index();
          $(this).addClass("active")
             .siblings().removeClass("active");
           $(this).parents(".regmain1").find(".regmessage li").eq(_index).show().siblings().hide();
   });

});


// 注册正则表达式判断
$(function(){
	//注册手机邮箱
	$(".telinput").blur(function(){
		var telvalue=$(".telinput").val();
	     var reg1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	     var reg2=/^1[3|4|5|8][0-9]\d{4,8}$/;
	     if(reg1.test(telvalue)||reg2.test(telvalue)){
	         $(".regtel>b").stop().css({"visibility":"visible"}); 
	         $(".telalert").stop().css({"visibility":"hidden"});
	     }else{
	     	 $(".telalert").stop().css({"visibility":"visible"});
	     	 $(".regtel>b").stop().css({"visibility":"hidden"}); 
	     }
	   	})
    //验证码输入情况
    $(".checkinput").blur(function(){
    	if($(".checkinput").val()==""){
    		$(".checkalert").css({"visibility":"visible"})
    	}
    })

	// 密码设置^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{6,20}$
	$(".pass1input").blur(function(){
		var regp1=/^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{6,20}$/;
		var pa1value=$(".pass1input").val();
		if(regp1.test(pa1value)){
			$(".nameinfo .setpass b").css({"visibility":"visible"})
			$(".nameinfo .setpass .setpalert").css({"visibility":"hidden"})
		}else{
			$(".nameinfo .setpass .setpalert").css({"visibility":"visible"})
			$(".nameinfo .setpass b").css({"visibility":"hidden"})
		}
	})

	// 重新输入密码(未成功)
	$(".repepass").blur(function(){
		console.log("a");
		var pa1=$(".pass1input").val();
		var pa2=$(".pass2input").val();
		if(pa1==pa2){
			$(".repepass>b").css({"visibility":"visible"}); 
			$(".repepass>b").css({"visibility":"hidden"}); 
		}else{
			$(".repepalert").css({"visibility":"visible"}); 
			$(".repepass>b").css({"visibility":"hidden"}); 
		}
	})

// 第二注册页面
           



    //选择地址
    var url1 = "http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&level=1",
	url2 = "http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&level=1&page=2";
		$.when($.ajax(url1), $.ajax(url2)).then(function(data1, data2){
			var provinces = data1[0].showapi_res_body.data.concat(data2[0].showapi_res_body.data);
			var html = "";
			$.each(provinces, function(){
				html += `<option value='${this.id}'>${this.areaName}</option>`;
				});
			$(".province").append(html);
			});
 
			/* 省份/城市选择发生改变，则加载省份/城市的下级信息 */
		$(".province, .city").change(function(){
				// 选中项对应的 id
			var val = $(this).val();
				if (val == -1)
					return;
			var url = "http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&parentId=" + val;
				// 异步请求
			$.getJSON(url, (data) => {
					var cities = data.showapi_res_body.data;
					var html = "<option value='-1'>请选择</option>";
					$.each(cities, function(){
						html += `<option value='${this.id}'>${this.areaName}</option>`;
					});
					if($(this).is(".province"))
						$(".city").html(html);
					else
						$(".country").html(html);
				});
			});















    
  })
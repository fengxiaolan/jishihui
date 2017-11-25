$(document).ready(function(){
	// a商品头部引入
      $.ajax({
         type:"get",
         url:"headpro.html",
         dataType:"html",
         success:function(data){
             var html=data;
            $("#allheader").html(html);
            $.ajax({
               type:"get",
               url:"../mock/user.json",
               dataType:"json",
               success:function(user){
                 $.ajax({
                   type:"get",
                   url:"../mock/user.json",
                   dataType:"json",
                   success:function(user){
                      $(".login").html("欢迎您："+user.user.nickname).css({"width":122,"color":"darkred"});
                      $(".regist").css({"display":"none"});
                   }
                  })
               }
            })
         },   
         error:function(){ 
             alert('fail'); 
        }  
      });

      // 商品尾部引入
    $.ajax({
         type:"get",
         url:"footer.html",
         dataType:"html",
         success:function(data){
             var html=data;
            $("#allfooter").html(html); 
         },   
         error:function(){ 
             alert('fail'); 
        }  
      });
})


// 商品的模板
$(function(){
     $.getJSON("../mock/products.json",{dataType:"jsonp"},function(data){
      console.log(data);
        var html = template("allprosid",{allpros:data});
        $(".aproducts").html(html); 
    }); 

   })
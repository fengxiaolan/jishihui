$(document).ready(function(){
 //引入小头部和尾部
   $.ajax({
   	  type:"get",
   	  url:"smallhead.html",
   	  dataType:"html",
   	  success:function(data){
   	  	// console.log(data);
   	  	 var html=data;
   	  	 $("#shopheader").html(html);
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
   	  	 $("#shopfooter").html(html);
   	  },
   	  error:function(){ 
          alert('fail'); 
      }  
   })

//购物车的详情情况
$.getJSON("../mock/shopcarts.json",{dataType:"jsonp"},function(data){
        console.log(data);
       var html=template("shopcarta",{shopcarts:data});
      $(".cartlist").html(html);
      });      



//购物车处理情况
//删除
$(".cartlist .cartgoods").on('click','.dele',function(){
   var row=$(this).parents('.cartgoods');
   //商品从cookie中删除
    console.log(row);
   //行删除
   row.remove();

})



})
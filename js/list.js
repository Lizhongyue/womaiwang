
//循环商品列表
$(function()
{
	$.ajax({
		type:"get",
		url:"json/list.json",
		async:true,
		success:function(data)
		{
			for(var i = 0; i < data.length; i++)
			{
				var $id = data[i].id;
				var $img = data[i].img;
				var $price = data[i].price;
				var $title = data[i].title;
				var $rated = data[i].rated;
				var $li = $('<li data-id='+ $id+' data-price='+ $price +' data-rated='+ $rated +'><div class="tab_content"><div class="pImg"><a href="#"><img src="img/list/'+$img+'" class="lazyload"/></a></div><div class="price"><b>￥</b>'+$price+'</div><div class="list_title"><p><a href="#">'+$title+'</a></p></div><div class="rated"><span class="evaluated">已评价<a href="#"><em>'+$rated+'</em></a></span><span class="collection"><b class="coll"></b>收藏</span><span class="addCart"><b class="coll"></b>加入购物车</span></div></div></li>');
				$li.appendTo(".product_list ul");
                
			}
			
			
			//飞入购物车效果
			var num = 0;
			$(".product_list ul li").find(".addCart").bind("click",function(evt)
			{
				evt.stopPropagation();
//				var $index = $(this).parents("li").index();
//				console.log($index);
//				var $pic = data[$index].img
				var $pic = $(this).parent().parent().find(".pImg img").attr("src");
				//console.log($pic);
				$(this).parents("li").find(".pImg").append('<div class="imgbox"><img src="'+ $pic +'"/></div>');
				var $imgbox = $(this).parents("li").find(".pImg").find(".imgbox");
				var $shop = $(".shop");
				
				//起始位置
				var $beginLeft = $imgbox.offset().left;
				var $beginTop = $imgbox.offset().top;
				
				//终止位置
				var $lastLeft = $shop.offset().left ;
				var $lasttop = $shop.offset().top + 50;
				
				var $left = $lastLeft - $beginLeft;
				var $top = $lasttop - $beginTop;
				
				$imgbox.animate(
					{
						"left":$left,
						"top": $top,
						"opacity":0
					},1000,function()
					{
						$imgbox.remove();
					})
				num++;
				$shop.find(".count").html(num);
				$(".cart a b").html(num);
				
			});
			
		    //加入购物车	
	    
		    var $count = $(".count");
		    var arr = [];
		   	if(getCookie("cart"))
		   	{
		   	  	 var str = getCookie("cart");
		   	  	 arr = eval(str);
		   	}
	   	
		    $(".addCart").bind("click",function()
		    {
		   	  
		   	   var $di = $(this).parent().parent().parent().attr("data-id");
		   	   var obj = {id:$di,count:1};
		   	   
		   	   putInCart(arr,obj);
		   	   setCookie("cart",JSON.stringify(arr),10);
		   	   
		    })
		    function putInCart(arr,obj)
		    {
		  	     for(var i=0;i<arr.length;i++)
		  		 {
		  	 		if(arr[i].id == obj.id)
		  	 		{
		  	 			arr[i].count = Number(arr[i].count)+ Number(obj.count);
		  	 			break;
		  	 		}
		  	     }
		  	     if(i==arr.length)
		  	    {
		  	 	    arr.push(obj);
		  	    }
		    }

			
				
			//跳转到详情页 并获取其id
			$(".product_list ul").find("li").click(function()
			{
				localStorage.setItem("proId", $(this).attr("data-id"));
				
			    window.open("detail.html");
			})
	
		}
	})
})


 



var $sort = $(".sort1");
var $pA = $sort.find("a");
//添加边框
$pA.bind("click", function()
{
	$(this).addClass("select").siblings().removeClass("select");
})


//排序 销量
var flags = true;
$sort.find(".sales").bind("click",function()
{
	if(flags)
	{
		var $Oli = $(".product_list ul").find("li").sort(function(a,b)
		{
			return $(a).attr("data-rated") - $(b).attr("data-rated");
		})
		
	}else 
	{
		var $Oli = $(".product_list ul").find("li").sort(function(a,b)
		{
			return $(b).attr("data-rated") - $(a).attr("data-rated");
		})
	}
	  flags = !flags;
	  $Oli.appendTo(".product_list ul");

});

//排序 价格
var flagp = true;
$sort.find(".pri").bind("click",function()
{
	if(flagp)
	{
		var $Oli = $(".product_list ul").find("li").sort(function(a,b)
		{
			return $(a).attr("data-price") - $(b).attr("data-price");
		})
		
	}else 
	{
		var $Oli = $(".product_list ul").find("li").sort(function(a,b)
		{
			return $(b).attr("data-price") - $(a).attr("data-price");
		})
	}
	  flagp = !flagp;
	  $Oli.appendTo(".product_list ul");

});

//排序 评论数
var flagr = true;
$sort.find(".rat").bind("click",function()
{
	if(flagr)
	{
		var $Oli = $(".product_list ul").find("li").sort(function(a,b)
		{
			return $(a).attr("data-rated") - $(b).attr("data-rated");
		})
		
	}else 
	{
		var $Oli = $(".product_list ul").find("li").sort(function(a,b)
		{
			return $(b).attr("data-rated") - $(a).attr("data-rated");
		})
	}
	  flagr = !flagr;
	  $Oli.appendTo(".product_list ul");

});

//排序 综合
var flagc = false;
$sort.find(".comp").bind("click",function()
{
	if(flagc)
	{
		var $Oli = $(".product_list ul").find("li").sort(function(a,b)
		{
			return $(a).attr("data-id") - $(b).attr("data-id");
		})
		
	}else 
	{
		var $Oli = $(".product_list ul").find("li").sort(function(a,b)
		{
			return $(b).attr("data-id") - $(a).attr("data-id");
		})
	}
	  flagc = !flagc;
	  $Oli.appendTo(".product_list ul");

});

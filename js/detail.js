

//获取其id 让其显示对应的商品详情
var $proId = localStorage.getItem("proId");
if($proId==undefined)
{
	$proId=0;
}
$.ajax({
	type:"get",
	url:"json/detail.json",
	async:true,
	success:function(data)
	{
		var $id = data[$proId].id;
		var $pro = data[$proId].pro;
		var $price = data[$proId].price;
		var $Img = data[$proId].Img;
		
		
		
		var $h1 = $('<h1 class="p_title">'+ $pro +'</h1>');
		$h1.appendTo($(".pro_tit"));
		var $span = $('<span class="price"><em>￥</em>'+ $price +'</span>');
		$span.appendTo($(".price_infor"));
		
		//遍利Ul Ol中的图片
		for(var i = 0; i<$Img.length; i++)
		{
			var $li1 = $('<li><img src="img/detail/'+ $Img[i] +'"/></li>');
			$li1.appendTo($(".box"));
			var $li2 = $('<li><img src="img/detail/'+ $Img[i] +'"/></li>');
			$li2.appendTo($(".img_infor ol"));
		}
		
		var $uli = $(".box").find("li");
		var $oli = $(".img_infor").find("ol").find("li");
		
		var $big = $(".big");
		var $small = $(".small");
		
		//让第一个显示
		$uli.eq(0).show();
		$oli.eq(0).addClass("select");
		$big.css({"background":'url(img/detail/'+ $Img[0] +')'})
		
		$oli.hover(function()
		{
			$(this).addClass("select").siblings().removeClass("select");
			$uli.eq($(this).index()).show().siblings().hide();
		    $big.css({"background":'url(img/detail/'+ $Img[$(this).index()] +')'});
		});
		
		
		//加入购物车
	    
	    var $proinput = $(".proinput");
	    var $count = $(".count");
	    var arr = [];
	   	if(getCookie("cart"))
	   	{
	   	  	 var str = getCookie("cart");
	   	  	 arr = eval(str);
	   	}
	   $(".btn_box").find(".buy_btn").bind("click",function()
	   {
	   	  
	   	   var num = $(this).parents(".loadBuy").find(".proinput").val();
	   	   var obj = {id:$id,count:num};
	   	   putInCart(arr,obj);
	   	   setCookie("cart",JSON.stringify(arr),10);
	   	   
	   	   
	   	   
		   $count.html($count.html()*1 + $proinput.val()* 1);
		   $(".cart a b").html($count.html());
		   alert("成功加入该商品");
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
		
		
	//放大镜
	   var scale = 500/400;
	   $small.width(400/scale);
	   $small.height(400/scale);
	   
	   $(".box").hover(function()
	   {
	   	   $big.show();
	   	   $small.show();
	   },function()
	   {
	   	    $big.hide();
	   	    $small.hide();
	   });
	   
	   $(".box").mousemove(function(e)
	   {
	   	  var $left = e.pageX - $(this).offset().left - $small.outerWidth()/2;
	   	  var $top = e.pageY - $(this).offset().top - $small.outerHeight()/2;
	   	  if($left <= 0)
	   	  {
	   	  	 $left = 0;
	   	  }
	   	  if($top <= 0)
	   	  {
	   	  	 $top = 0;
	   	  }
	   	  if($left >= $(this).outerWidth() - $small.outerWidth())
	   	  {
	   	  	  $left = $(this).outerWidth() - $small.outerWidth();
	   	  }
	   	  if($top >= $(this).outerHeight() - $small.outerHeight())
	   	  {
	   	  	  $top = $(this).outerHeight() - $small.outerHeight();
	   	  }
	   	  
	   	  $small.css({left:$left,top:$top});
	   	  $big.css({"backgroundPositionX":-$left*scale,"backgroundPositionY":-$top*scale});
	   	  
	   	     
	   	   
	   })
	
		
		
	}
});










/*点击更多优惠*/
$(function()
{
	var $up = $(".t_up");
	var $down = $(".t_down");
	var $visib = $(".pro_m_line:last");
	
	var $minus = $(".input_minus");
	var $plus = $(".input_plus");
	var $proinput = $(".proinput");
	
	
	$up.click(function()
	{
		$(this).hide();
		$down.show();
		$visib.show();
	});
	$down.click(function()
	{
		$(this).hide();
		$up.show();
		$visib.hide();
	})
	
	
	//点击数量
	$minus.click(function(evt)
	{
		evt.preventDefault();
		var min = $proinput.val() - 1;
		if(min <= 0)
		{
			min = 1;
		}
		$proinput.val(min);
	});
	$plus.click(function(evt)
	{
		evt.preventDefault();
		var max = $proinput.val() * 1 + 1;
		$proinput.val(max);
	});
	
})






//划过 点击商品详情
$(function()
{
	var $dLi = $(".detail_tab li");
	
	var $bn1 = $(".bn1");
	var $bn2 = $(".bn2");
	var $bn3 = $(".bn3");
	var $pic1 = $(".pic1");
	var $pic2 = $(".pic2");
	var $pic3 = $(".pic3");
	var $pc1 = $pic1.offset().top + 140;
	var $pc2 = $pic2.offset().top + 140;
	var $pc3 = $pic3.offset().top + 140;
	$dLi.hover(function()
	{
		$dLi.find("i").hide();
		$(this).find("i").show();
	})
	
	$bn1.click(function()
	{
		
		$('body,html').animate({scrollTop:$pc1},200);
	});
	$bn2.click(function()
	{
		$('body,html').animate({scrollTop:$pc2},200);
	});
	$bn3.click(function()
	{
		$('body,html').animate({scrollTop:$pc3},200);
	})
	
	
	
	
	
});






//滚动滚动条右边显示和隐藏
$(window).scroll(function()
{
	var $show = $(".detail_content").offset().top;
	//var $hide = $(".detail_right").offset().top + $(".detail_right").height();
	
	var $scroll = $(document).scrollTop();
	//console.log($scroll);
	
	var $tab = $(".detail_tab");
	
	if($scroll > $show && $scroll < 3355)
	{
		$(".details_right").show();
	}else
	{
		$(".details_right").hide();
	};
	
	//商品详情悬浮
	
	if($scroll > 803)
	{
		$tab.css("position","fixed");
		$tab.css("top",-7);
		
	}else
	{
		$tab.css("position","relative");
		$tab.css("top",0);
		
	}
	
})

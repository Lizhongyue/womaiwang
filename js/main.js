$(function()
{
	//每日劲爆品
	var $mix = $(".day,.m_left,.m_right");
	/*var $m_left = $(".m_left");
	var $m_right = $(".m_right");*/
	var $m_btn = $(".m_left,.m_right")
	//划入时左右按钮显示
	$mix.hover(function()
	{
		$m_btn.stop().fadeIn();
		
	},function()
	{
		$m_btn.stop().fadeOut();
		
	})
	
	
	//点击按钮时左右切换
	var $day = $(".day");
	$m_btn.click(function()
	{
		if($day.css("left")=="0px")
		{
			
			$day.stop(true,true).animate({"left":"-972"});
			
		}else
		{
			$day.stop(true,true).animate({"left":0});
		}
		
	});
	
	
	
	
	//我买推荐
	var $cix = $(".recom,.c_left,.c_right");
	var $c_btn = $(".c_left,.c_right");
	//划入时左右按钮显示
	$cix.hover(function()
	{
		$c_btn.stop().fadeIn();
	},function()
	{
		$c_btn.stop().fadeOut();
	});
	
	//点击按钮时左右切换
	var $recom = $(".recom");
	$c_btn.click(function()
	{
		if($recom.css("left")=="0px")
		{
			$recom.stop(true,true).animate({"left":"-1210"});
		}else
		{
			$recom.stop(true,true).animate({"left":"0"});
		}
	});
	
	//划入图片left值改变
	var $c_pic = $(".recom img");
	$c_pic.hover(function()
	{
		$(this).stop().animate({"left":"-10"});
	},function()
	{
		$(this).stop().animate({"left":"0"});
	})
	
	
})






//顶部悬浮
$(function()
{
	var $total_container = $(".total_container");
	$(window).scroll(function()
	{
		if($(document).scrollTop()>700)
		{
			$total_container.fadeIn(1000);
			$total_container.addClass("zTop");
		}else
		{
			$total_container.fadeOut(1000);
			$total_container.removeClass("zTop");
		}
	})
	
	var $blur = $(".blur");
	$blur.focus(function()
	{
		$(this).val("");
	})
})




//侧边栏加载时显示

$(window).scroll(function() {
	$(".floor").each(function(index, ele) {
		
		var $scroll = $(document).scrollTop();
		var $offset = $(ele).offset().top;
		
		if($scroll + $(ele).height() > $offset)
		{
			$(".float_nav").show();
			$(".float_nav").find("li").removeClass("curr").siblings("li").eq(index).addClass("curr");
		} 
		else if($scroll + 4000 <= $offset)
		{
			
			$(".float_nav").hide();
		}
	})
})

//点击跳转到列表页
$(function()
{
	var $goto = $(".nav_t li,.cont .title a");
	$goto.click(function()
	{
		location.href = "list.html";
	})
})








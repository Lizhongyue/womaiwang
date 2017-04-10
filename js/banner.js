//右边服务公告栏
$(function()
{
	var $serve = $(".p_title li");
	var $cot = $(".cont_wrap .cot");
	
	$serve.hover(function()
	{
		$serve.removeClass("hot");
		$(this).addClass("hot");
		$cot.css({display:"none"}).eq($(this).index()).css({display:"block"})
	})
})




//轮播图
$(function()
{
	var $Uli = $(".big_img li");
	var $Oli = $(".btn_num li");
	var $button = $(".button");
	var $left = $(".left");
	
	var $right = $(".right");
	
	var $btn = $(".button,.big_img li img");
	var k = 0;
	var timer = setInterval(fn1,3000);
	//滑入滑出
	$btn.hover(function()
	{
		clearInterval(timer);
		$button.show();
	    
	},function()
	{
		$button.hide();
		timer = setInterval(fn1,3000);
	})
	//左右按钮
	$left.click(function()
	{
		
		k--;
		if(k==-1)
		{
			k = $Uli.size() - 1;
		}
		plays(k);
	});
	$right.click(fn1);
	
	//点击缩略图
	$Oli.hover(function()
	{
		clearInterval(timer);
		k = $(this).index();
		plays(k);
		timer = setInterval(fn1,3000);
	});
	
	function fn1()
	{
		k++;
		if(k == $Uli.size())
		{
			k=0;
		}
		plays(k);
	}
	function plays(k)
	{
		$Uli.eq(k).stop(true,true).fadeIn(1000).siblings().stop(true,true).fadeOut(1000);
		// $Uli.eq(k).show().siblings().hide();
		
		$Oli.eq(k).addClass("hover").siblings().removeClass("hover");
	}
	
})

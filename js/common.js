
//接收账号
var userName = localStorage.getItem("userName");
if(userName)
{
	$(".nav_l").find(".welcome").html(userName+",您好!");
	$(".nav_r").find(".login span").html(userName);
	$(".nav_r").find(".login a").html("账户首页");
	$(".nav_l").find(".logi").hide();
	$(".nav_l").find(".regis").hide();
	$(".nav_l").find(".exit").show();
	
}else
{
	 $(".nav_l").find(".welcome").html("hi,欢迎来我买网!");
	 $(".nav_r").find(".login span").html("您还没有登录!");
	 $(".nav_r").find(".login a").html("登录");
	 $(".nav_l").find(".logi").show();
	 $(".nav_l").find(".regis").show();
	 $(".nav_l").find(".exit").hide();
}

//退出

$(".nav_l .exit").bind("click",function()
{
	localStorage.removeItem("userName");
	location.reload();
})



//头部
$(function()
{
		//点击当前城市
		var $site_like = $(".site_like");
		var $sitecont = $(".sitecont");
		var $closebtn = $(".closebtn");
		var $oA = $(".city_name a");
		var $oP = $(".sitecont p span");
		var $otext = $(".site .text");
		$site_like.click(function()
		{
			$(".site").toggleClass("curre");
			$sitecont.toggle();
		});
		
		$closebtn.click(function()
		{
			
			$(".site").removeClass("curre");
			$sitecont.css({"display":"none"});
		});
		$oA.click(function()
		{
			//console.log($(this));
			//console.log($(this).html());北京
			
			$oP.html($(this).html());
			$otext.html($(this).html()+"<i class='arrow'></i>");

		});
						
				
		//划入我的账户 客户服务
		var $mycount1 = $(".mycount1");
		var $mycount2 = $(".mycount2");
		
		var $mycount_cont1 = $(".mycount_cont1");
		var $mycount_cont2 = $(".width76");
		var timer=null;
		$mycount1.hover(function()
		{
			$mycount_cont1.css({display:"block"});
		},function()
		{
		     $mycount_cont1.css({display:"none"});
		
		});
		$mycount2.hover(function()
		{
			$mycount_cont2.css({display:"block"});
		},function()
		{
		     $mycount_cont2.css({display:"none"});
		
		});
				
				
		//input点击时内容消失
		var $bt1 = $(".bt1");
		$bt1.focus(function()
		{
			$(this).val("");
		});
		
		
		//购物车划入时显示
		var $min_cart = $(".min_cart");
		var $cart_cont = $(".cart_cont");
		$min_cart.hover(function()
		{
			$cart_cont.css({display:"block"});
		},function()
		{
			$cart_cont.css({display:"none"});
		});

	});
			






//右边侧边栏
$(function()
{
	var $wm_tab = $(".wm_tab");
	$wm_tab.hover(function()
	{
		$(this).addClass("special");
	},function()
	{
		$(this).removeClass("special");
	})
	
	
	//点击返回顶部
	$(".go_top").click(function()
	{
		$('body,html').animate({scrollTop:0},200);
	});
	
	
	//点击购物车侧边栏显示
     $(".shop").click(function()
     {
     	if($(".wm_toolbar").css("right")=="-276px")
     	{
     		$(".wm_toolbar").stop().animate({"right":0});
     	}else
     	{
     		$(".wm_toolbar").stop().animate({"right":-276});
     	}
     	
     	
     });
     
     $(".pop_title em").click(function()
     {
     	$(".wm_toolbar").stop().animate({"right":-276});
     })
     
	
	
});







//样式的变换

function active1(ele)
{
	$(ele).css({"border": "1px solid #7FCBFE","box-shadow":"0px 0px 3px #7FCBFE"});
	$(ele).parents(".info").find(".error .show1").show();
	$(ele).parents(".info").find(".error .show2").hide();
	$(ele).parents(".info").find(".error .success").hide();
}

function active2(ele)
{
	$(ele).css({"border": "1px solid #f77799","box-shadow":"0px 0px 3px #f77799"});
	$(ele).parents(".info").find(".error .show2").show();
	$(ele).parents(".info").find(".error .show1").hide();
	$(ele).parents(".info").find(".error .success").hide();
}


//验证
$(".btn_aleft").bind("click",function(e)
{
	 e.preventDefault();
	 var $userName = $(".username").val();
	 var $passWord = $(".password").val();
	 var $againPwd = $(".againpwd").val();
	 var $telPhone = $(".tel").val();
	 var $code = $(".code").val();
	 
	 if($userName == "")
	 {
	 	active2(".username");
	 	$(".username").parents(".info").find(".error .show2 span").html("请输入用户名");
	 	
	 }else if($userName == "")
	 {
	 	active2(".password");
	 	$(".password").parents(".info").find(".error .show2 span").html("请输入密码");
	 }else if($againPwd == "")
	 {
	 	$(".againpwd").parents(".info").find(".error .show2 span").html("请再次输入密码");
	 }else if($telPhone == "")
	 {
	 	$(".tel").parents(".info").find(".error .show2 span").html("请输入手机号");
	 }else if($code == "")
	 {
	 	$(".code").parents(".code").find(".error .show2 span").html("请输入验证码");
	 }else
	 {
	 	if($(".username").hasClass("ok") && $(".password").hasClass("ok") && $(".againpwd").hasClass("ok") && $(".tel").hasClass("ok") && $(".code").hasClass("ok"))
	 	{
	 		register($userName , $passWord);
	 	}
	 }
})


//调用走秀接口
function register(userId, userPwd)
{
	$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{
		"status": "register",
		"userID": userId,
		"password":userPwd
	},function(data)
	{
		if(data == 0)
		{
			active2(".username");
			$(".show2").find("span").html("用户名已被注册")
		}else if(data ==1)
		{
			alert("注册成功");
			window.location = "login.html";
		}
	})
}

//验证用户名
$(".username").bind("focus",function()
  {
  	var $userName = $(".username").val();
  	if($userName == "")
  	{
  		$(this).parents(".info").find(".error .show1 span").html("请输入用户名");
  		active1(this);
  	}
  })
$(".username").bind("blur",function()
{
	var $userName = $(".username").val();
	var $show1 = $(this).parents(".info").find(".error .show1");
	var $show2 = $(this).parents(".info").find(".error .show2");
	var $success = $(this).parents(".info").find(".error .success");
	var $text2 = $(this).parents(".info").find(".error .show2 span");
	if($userName == "")
	{
		$text2.html("请输入用户名");
		active2(this);
	}else
	{
		var userReg = /^\w{6,20}$/
		if(userReg.test($userName))
		{
			$success.show();
			$show1.hide();
			$show2.hide();
			$(this).addClass("ok");
		}else
		{
			$success.hide();
			$show1.hide();
			$show2.show();
			$text2.html("用户名输入不合法");
			
		}
	}
	
	
	
})


//验证密码
$(".password").bind("focus",function()
  {
  	var $passWord = $(".password").val();
  	if($passWord == "")
  	{
  		$(this).parents(".info").find(".error .show1 span").html("请输入密码");
  		active1(this);
  	}
  });
  
  
 $(".password").bind("blur",function()
{
	var $passWord = $(".password").val();
	var $show1 = $(this).parents(".info").find(".error .show1");
	var $show2 = $(this).parents(".info").find(".error .show2");
	var $success = $(this).parents(".info").find(".error .success");
	var $text2 = $(this).parents(".info").find(".error .show2 span");
	if($passWord == "")
	{
		$text2.html("请输入密码");
		active2(this);
	}else
	{
		var wordReg = /^[\x21-\x7E]{6,20}$/
		if(wordReg.test($passWord))
		{
			$success.show();
			$show1.hide();
			$show2.hide();
			$(this).addClass("ok");
		}else
		{
			$success.hide();
			$show1.hide();
			$show2.show();
			$text2.html("密码输入不合法");
			
		}
	}
});


//确认密码
$(".againpwd").bind("focus",function()
  {
  	var $againPwd = $(".againpwd").val();
  	if($againPwd == "")
  	{
  		$(this).parents(".info").find(".error .show1 span").html("请再次输入密码");
  		active1(this);
  	}
  });
  
  
 $(".againpwd").bind("blur",function()
{
	var $againPwd = $(".againpwd").val();
	var $show1 = $(this).parents(".info").find(".error .show1");
	var $show2 = $(this).parents(".info").find(".error .show2");
	var $success = $(this).parents(".info").find(".error .success");
	var $text2 = $(this).parents(".info").find(".error .show2 span");
	if($againPwd == "")
	{
		$text2.html("请再次输入密码");
		active2(this);
	}else
	{
		var $firstPwd = $(".password").val();
		if($firstPwd == $againPwd)
		{
			$success.show();
			$show1.hide();
			$show2.hide();
			$(this).addClass("ok");
		}else
		{
			$success.hide();
			$show1.hide();
			$show2.show();
			$text2.html("两次密码输入不一致");
			
		}
	}
});


//手机号
$(".tel").bind("focus",function()
  {
  	var $telPhone = $(".tel").val();
  	if($telPhone == "")
  	{
  		$(this).parents(".info").find(".error .show1 span").html("请输入手机号");
  		active1(this);
  	}
  });
  
  
 $(".tel").bind("blur",function()
{
	var $telPhone = $(".tel").val();
	var $show1 = $(this).parents(".info").find(".error .show1");
	var $show2 = $(this).parents(".info").find(".error .show2");
	var $success = $(this).parents(".info").find(".error .success");
	var $text2 = $(this).parents(".info").find(".error .show2 span");
	if($telPhone == "")
	{
		$text2.html("请输入手机号");
		active2(this);
	}else
	{
		var phoneReg = /^1(3|5|7|8)\d{9}$/
		if(phoneReg.test($telPhone))
		{
			$success.show();
			$show1.hide();
			$show2.hide();
			$(this).addClass("ok");
		}else
		{
			$success.hide();
			$show1.hide();
			$show2.show();
			$text2.html("手机号输入不合法");
			
		}
	}
});

//验证码

//随机产出验证码
var $codo = $(".codo");
var $codoa = $(".incode a")

 var arr = ["code1.jpg","code2.jpg","code3.jpg","code4.jpg","code5.jpg","code6.jpg","code7.jpg","code8.jpg","code9.jpg","code10.jpg"];
var arr1=["kygj","nk2y","fhyz","bztc","euda","eeg9","qf3x","2dtr","guqy","pqpn"];
var num=0;
$codo.click(function()
{
    num = Math.floor(Math.random() * 10);
    $codo.find("img").attr("src","img/login/"+arr[num]);
    
});
$codoa.click(function()
{
    num = Math.floor(Math.random() * 10);
    $codo.find("img").attr("src","img/login/"+arr[num]);
    
});


$(".code").bind("focus",function()
  {
  	var $code = $(".code").val();
  	if($code == "")
  	{
  		$(this).parents(".info").find(".error .show1 span").html("请输入验证码");
  		active1(this);
  	}
  });
  
  
 $(".code").bind("blur",function()
{
	var $code = $(".code").val();
	var $show1 = $(this).parents(".info").find(".error .show1");
	var $show2 = $(this).parents(".info").find(".error .show2");
	var $success = $(this).parents(".info").find(".error .success");
	var $text2 = $(this).parents(".info").find(".error .show2 span");
	if($code == "")
	{
		$text2.html("请输入验证码");
		active2(this);
	}else
	{
		var $Code = arr1[num];
		if($Code == $code.toLowerCase())
		{
			$success.show();
			$show1.hide();
			$show2.hide();
			$(this).addClass("ok");
		}else
		{
			$success.hide();
			$show1.hide();
			$show2.show();
			$text2.html("验证码输入错误");
			
		}
	}
});





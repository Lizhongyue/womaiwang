//验证
$(".btn_left").bind("click", function(e)
{
	e.preventDefault();
	var $userName = $(".user").val();
	var $passWord = $(".pwd").val();
	if($userName == "")
	{
		$(".login_e").show();
		$(".login_e").find("span").html("请输入用户名");
	}else if($passWord == "")
	{
		$(".login_e").show();
		$(".login_e").find("span").html("请输入密码");
	}else
	{
		$(".user").css({"border":"1px solid #ccc","box-shadow":"none"});
		$(".pwd").css({"border":"1px solid #ccc","box-shadow":"none"});
		login($userName, $passWord);
	}
	
})

//调用接口
function login(userId, userPwd)
{
	$.get("http://datainfo.duapp.com/shopdata/userinfo.php",
	{
		"status": "login",
		"userID": userId,
		"password": userPwd
	},function(data)
	{
		if(data == 0)
		{
			$(".login_e").show();
			$(".login_e").find("span").html("用户名不存在");
		}else if(data == 2)
		{
			$(".login_e").show();
			$(".login_e").find("span").html("用户名或者密码不正确");
		}else
		{
			localStorage.setItem("userName",$(".user").val());
			alert("登录成功");
			window.location = "index.html";
		}
	})
}

//用户名
$(".user").bind("focus", function()
{
	active1($(this));
});
$(".user").bind("blur", function()
{
	active2($(this));
})

//密码
$(".pwd").bind("focus", function()
{
	active1($(this));
});
$(".pwd").bind("blur", function()
{
	active2($(this));
})





function active1(ele)
{
	$(ele).css({"border":"1px solid #7FCBFE","box-shadow":"0px 0px 3px #7FCBFE"});
}

function active2(ele)
{
	$(ele).css({"border":"1px solid #f77799","box-shadow":"0px 0px 3px #f77799"});
}








//接收账号
var userName = localStorage.getItem("userName");
if(userName)
{
	$(".nickname").html(userName+",您好!");
	$(".none").eq(1).hide();
	$(".none").find(".lo").hide();
	$(".none").find(".quit").show();
}else
{
	$(".nickname").html("Hi,欢迎来我买网,");
	$(".none").eq(1).show();
	$(".none").find(".lo").show();
	$(".none").find(".quit").hide();
}

//点击退出
$(".quit").bind("click",function()
{
	localStorage.removeItem("userName");
	location.reload();
})




$(function()
{
	var goodsarr=[];
	if(getCookie("cart"))
	{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
		var str = getCookie("cart");
		var arr = eval(str);
		
		$.get("json/cart.json",function(obj)
		{
			var str = obj;
			created(str);
		})
		function created(obj)
		{
			for(var i = 0;i<arr.length;i++)
			{
				for(var key in obj)
				{
					if(arr[i].id == key)
				     {
				     	obj[key].id=arr[i].id;
				     	obj[key].count=arr[i].count;
				     	obj[key].isChecke=true;
				     	goodsarr.push(obj[key]);
				     }
				}

			}
			console.log(goodsarr);
			var vm= new Vue({
			  el: '#shopping',
			  data: {
			    goodsarr: goodsarr,
			    checked:true
			  },
			  methods: {
			  	setnum:function(msg,index){
			  		if(msg=='-'){
			  			if(this.goodsarr[index].count>1){
			  				this.goodsarr[index].count--;
			  			}
			  		}else{
			  			this.goodsarr[index].count++;
			  		}
			  	},
			  	deletgoods:function(index){
			  		this.goodsarr[index].count='del';
			  		var cararr=[];
			  		for(var i=0;i<arr.length;i++){
			  			if(arr[i].id!=this.goodsarr[index].id){
			  				cararr.push(arr[i]);
			  			}
			  		}
			  		arr=cararr;
	       	   	    setCookie("cart",JSON.stringify(arr),10);
	       	   	    if(arr.length==0)
				    {

					     setCookie("cart","",0);
						 location.reload();
			        }
			  	},
			  	checkboxchange:function(){
			  		if(this.checked){
			  			for(var i=0;i<this.goodsarr.length;i++){
			  				this.goodsarr[i].isChecke=true;
			  			}
			  		}else{
			  			for(var i=0;i<this.goodsarr.length;i++){
			  				this.goodsarr[i].isChecke=false;
			  			}
			  		}
			  	}
			  },
			  computed: {
				    // 仅读取，值只须为函数
				    titelprice: function () {
				    	var price=0;
				      	for(var i=0;i<this.goodsarr.length;i++){
			  				if(this.goodsarr[i].isChecke&&this.goodsarr[i].count!='del'){
			  					price=this.goodsarr[i].price*this.goodsarr[i].count+price;
			  				}
			  			}
			  			return price;
				    },
				    titelcount:function(){
				    	var count=0;
				      	for(var i=0;i<this.goodsarr.length;i++){
			  				if(this.goodsarr[i].isChecke&&this.goodsarr[i].count!='del'){
			  					count=this.goodsarr[i].count*1+count;
			  				}
			  			}
			  			return count;
				    }
				}
			})
			//划过7天不支持退换
			var $day = $(".days i");
			$day.hover(function()
			{
				$(this).siblings().show();
			},function()
			{
				$(this).siblings().hide();
			})
		}
	}else
	{
		$(".order_w_con").html('您的购物车是空的,赶快行动吧!');
		$(".order_w_con").css({"font-size":"20px","color":"#606060","border":0,"padding":"50px"});
		$(".order_amount").remove();
	}
})
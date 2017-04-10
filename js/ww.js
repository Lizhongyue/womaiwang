
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
		//动态创建商品
		function created(obj)
		{
			
			/*for(var key in obj)
			{
				
				for(var i = 0;i<arr.length;i++)
			     {
				     if(arr[i].id == key)
				     {
				     	var $content_type = $('<div class="content_type "><div class="ct1 cont1 ct_zp"><div><input type="checkbox" checked="checked" class="fl"  /><a href="#" class="img_a"><img src="img/list/'+ obj[key].src +'" /></a><div class="fl cont1_cent"><a href="#">'+obj[key].name+'</a><div class="sevendays"><p class="days"><i></i><span>不支持七天无理由退换</span></p><div class="clear"></div></div></div></div><div class="clear"></div></div><div class="ct1 cont2">￥'+obj[key].price+'</div><div class="ct1 cont3"><div class="oper reduce"></div><div class="input_goods"><input  value="'+arr[i].count+'"class="item_amount"/></div><div class="oper plus"></div><div class="clear"></div></div><div class="ct1 cont4">1</div><div class="ct1 cont5"><span class="tol">￥'+(obj[key].price*arr[i].count).toFixed(2) +'</span></div><div class="ct1 cont6"><a href="javascript:;">收藏</a><br /><a href="javascript:void(0)" class="del" data-id='+key+'>删除</a></div><div class="clear"></div></div>');
				     	$content_type.appendTo($(".order_w_con"));
				       // tamount+=(arr[i].count)*1;
				     	//total+=(obj[key].price*arr[i].count)*1;
				     }
			    }
			}*/
			for(var i = 0;i<arr.length;i++)
			{
				for(var key in obj)
				{
					if(arr[i].id == key)
				     {
				     	goodsarr.push(obj[key]);
				     	var $content_type = $('<div class="content_type "><div class="ct1 cont1 ct_zp"><div><input type="checkbox" checked="checked" class="fl"  /><a href="#" class="img_a"><img src="img/list/'+ obj[key].src +'" /></a><div class="fl cont1_cent"><a href="#">'+obj[key].name+'</a><div class="sevendays"><p class="days"><i></i><span>不支持七天无理由退换</span></p><div class="clear"></div></div></div></div><div class="clear"></div></div><div class="ct1 cont2">￥'+obj[key].price+'</div><div class="ct1 cont3"><div class="oper reduce"></div><div class="input_goods"><input  value="'+arr[i].count+'"class="item_amount"/></div><div class="oper plus"></div><div class="clear"></div></div><div class="ct1 cont4">1</div><div class="ct1 cont5"><span class="tol">￥'+(obj[key].price*arr[i].count).toFixed(2) +'</span></div><div class="ct1 cont6"><a href="javascript:;">收藏</a><br /><a href="javascript:void(0)" class="del" data-id='+key+'>删除</a></div><div class="clear"></div></div>');
				     	$content_type.appendTo($(".order_w_con"));
				       // tamount+=(arr[i].count)*1;
				     	//total+=(obj[key].price*arr[i].count)*1;
				     }
				}
				
			}
			/*$(".num em").html(tamount);
			$(".money").html('￥'+total.toFixed(2));
			$(".money_total").html($(".money").html());*/
			//点击数量
			var $reduce = $(".reduce");
			//var $input_goods = $(".input_goods");
			var $plus = $(".plus");
			var $index = 0;
			 $plus.each(function(i)
			 {
			 	 $(this).click(function()
			     {
				
					var $imount = $(this).parent().find(".item_amount");
				    var $tol = $(this).parents(".content_type").find(".tol");
				    var $cont2 = $(this).parents(".content_type").find(".cont2");
			        var $cot2 = $cont2.html().substring(1);
					var $num = $(".num em");
			        var max = $imount.val()* 1 + 1;
			        $imount.val(max);
			        $tol.html("￥"+(max*$cot2).toFixed(2));
			        total();
			        
			        arr[i].count = max;
			        setCookie("cart",JSON.stringify(arr),10);
		           
			    })
			 })
				
			
				
			$reduce.each(function(i)
			{
				$(this).click(function()
			    {
					var $imount = $(this).parent().find(".item_amount");
				    var $tol = $(this).parents(".content_type").find(".tol");
				    var $cont2 = $(this).parents(".content_type").find(".cont2");
			        var $cot2 = $cont2.html().substring(1);
					var $num = $(".num em");
			        var min = $imount.val()* 1 - 1;
			        if(min<=-1)
			        {
			        	min = 0;
			        }
			        $imount.val(min);
			        $tol.html("￥"+(min*$cot2).toFixed(2));
			        total();
		            arr[i].count = min;
		           setCookie("cart",JSON.stringify(arr),10);
		           
		           
		           
			    })
			
		      
		       
			});
			//点击全选
            var $opt = $(".cont1").find("input");
            var $checkall = $(".checkall");
            var $it_a = $(".item_amount");
            var arr1 = [];
            var arr2 = [];
             $it_a.each(function(y)
            {
            		
            	var a = $it_a.eq(y).val();
            	var b = $(".tol").eq(y).html().substring(1);
            	
            	arr1.push(a);
            	arr2.push(b);
            		
            })
            $checkall.click(function()
            {
            	
            	if(this.checked)
            	{
            		$opt.prop("checked",true);
            		$it_a.each(function(y)
            		{
            			$it_a.eq(y).val(arr1[y]);
            			$(".tol").eq(y).html("￥"+arr2[y])
            		});
            		total();
            		
            	}else
            	{
            		$opt.prop("checked",false);
            		$(".tol").html("￥"+0.00);
					$(".item_amount").val(0);
					total();
            		
            	}
            })
           
			
			//点击各商品是否选中
			function select()
			{
				$opt.each(function(k)
				{
				
					var x = $(".tol").eq(k).html();
					var c = $(".item_amount").eq(k).val();
					$opt.eq(k).click(function()
					{
						if(this.checked)
						{
							$(".tol").eq(k).html(x);
							$(".item_amount").eq(k).val(c);
							total();
						}else
						{
							$(".tol").eq(k).html("￥"+0.00);
							$(".item_amount").eq(k).val(0);
							total();
						}
					})
				})
				
			}
			select();
			//计算总钱数
			function total()
			{
				var tamount=0;
			    var total=0;
				var $itm = $(".item_amount");
				var $tola = $(".tol");
				
				
				$itm.each(function(i)
				{
					//console.log($itm.eq(i).val());
					tamount += $itm.eq(i).val() * 1;
					//console.log($tola.eq(i).html().substring(1))
					total += $tola.eq(i).html().substring(1)*1;
					
				})
				//console.log(tamount);
				//console.log(total);
				$(".num em").html(tamount);
				$(".money").html('￥'+total.toFixed(2));
				$(".money_total").html($(".money").html());
				$(".amount").html(tamount);
			}
			total();
			
			
			//删除商品
	       var $del = $(".del");
	       $del.each(function(i)
	       {
	       	   $del.eq(i).click(function()
	       	   {
	       	   	   $(this).parents(".content_type").remove();
	       	   	   total();
	       	   	   for(var j = 0;j<arr.length;j++)
	       	   	   {
	       	   	   	    if($(this).attr("data-id") == arr[j].id)
	       	   	   	    {
	       	   	   	    	arr.splice(j,1);
	       	   	   	    }
	       	   	   }
	       	   	    setCookie("cart",JSON.stringify(arr),10);
	       	   	    if(arr.length==0)
				    {
					     setCookie("cart","",0);
						 location.reload();
			        }
	       	   })
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

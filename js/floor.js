//楼层

	$.ajax({
	type: "get",
	url: "json/floor.json",
	async: true,
	success:function(str)
	{
		
		 obj = str;
		 //动态加载楼层
		 addFloor(obj);
		 
		 //给楼层添加动画
		 addanimate();
		 //轮播图
		 Carousel(floor1);
		 Carousel(floor2);
		 Carousel(floor3);
		 Carousel(floor4);
		 Carousel(floor5);
		 Carousel(floor6);
   	 }
	});
	function addFloor(obj)
    {
       var $floor1 = $(".floor1");
       var $floor2 = $("floor2"); 
       var $floor3 = $(".floor3");
       var $floor4 = $(".floor4");
       var $floor5 = $(".floor5");
       var $floor6 = $(".floor6");
          	
       for(var key in obj)
       {
          //console.log(obj[key]);
          var title = obj[key].floorl.title;
          var tit = obj[key].floorr.tit;
          // console.log(tit);
          var con = obj[key].floorl.con;
          var Img = obj[key].floorl.con.cata.img;
          var adv = obj[key].floorr.com.adv;

          var name1 = obj[key].floorr.com.trans.name1;
          var images1 = obj[key].floorr.com.trans.images1;
          var price1 = obj[key].floorr.com.trans.price1;
          var name2 = obj[key].floorr.tab.name2;
          var images2 = obj[key].floorr.tab.images2;
          var price2 = obj[key].floorr.tab.price2;
          
          var n = key.substring(5);
          //console.log(n);
          
          
          //左边模块
          var $h3 = $("<h3/>").appendTo($(".floor"+n+" .floor_l"));
          $h3.html("<i></i>"+title);
          
          var $con = $("<div class=con/>").appendTo($(".floor"+n+" .floor_l"));
          
         var $png = $("<span class=png/>").appendTo($con);
         var $clearfix = $("<ul class='png clearfix'/>").appendTo($con);
         var $pic =$("<div class=pic/>").appendTo($con);
         var $OA = $("<a/>").appendTo($pic);
         var $img = $("<img/>").appendTo($OA);
         $img.attr("src","img/index/"+con.pic);
         $png.html(con.num);
         
         for(var key in Img)
         {
          	 var $li=$("<li/>").appendTo($clearfix);
          	 var $i=$("<i/>").appendTo($li);
          	 var $a=$("<a/>").appendTo($li);
                                                                        $i.css("background-image","url(img/index/"+Img[key]+")");
          	 		
          	 $a.html(con.cata.cont[key]);
         }
         
         //右边模块
         var $tit = $("<ul class='tit clearfix'/>").appendTo($(".floor"+n+" .floor_r"));
         var $com = $("<div class='com tab'/>").appendTo($(".floor"+n+" .floor_r"));
         var $tab = $("<div class='com tab'/>").appendTo($(".floor"+n+" .floor_r"));
         $com.css("display","block");
         var $tul = $("<ul class='transparency_wrap clearfix'/>");
         $tul.appendTo($tab);	 	
         for(var key in tit)
         {
          	var $rli = $("<li/>").appendTo($tit);
          	$rli.eq(key).addClass("cur");
          	$rli.html(tit[key]);
         }
         var $adv = $("<div class=adv/>");
         $adv.appendTo($com);
         var $transparency_wrap = $("<ul class=transparency_wrap/>");
         $transparency_wrap.appendTo($com);
         var $slider_btn = $("<div class='slider_btn drop-layer'/>");
         $slider_btn.appendTo($adv);
         $slider_btn.html("<a href='javascript:void(0)' class='fl prev'><</a><a href='javascript:void(0)' class='fr next'>></a>");
         var $rul = $("<ul class='fig'/>");
         $rul.appendTo($adv);
         var $slider_num = $("<ol class=slider_num/>");
          	 
         $slider_num.appendTo($adv);
         $slider_num.html("<li class='hov'></li><li></li>");
         for(var key in adv)
         {
          	 var $sli = $("<li/>");
          	 $sli.appendTo($rul);
          	 var $sa = $("<a href='#'></a>");
          	 $sa.appendTo($sli);
          	 var $si = $("<img class=lazyload/>");
          	 $si.appendTo($sa);
          	 $si.attr("src","img/index/"+adv[key]);
          	 	
         }
         
          for(var key in name1)
          {
          	  var $tli = $("<li/>");
          	  $tli.eq(key).addClass("first");
          	  $tli.appendTo($transparency_wrap);
          	  var $tdl = $("<dl/>");
          	  $tdl.appendTo($tli);
          	  var $tdt = $("<dt/>");
          	  $tdt.appendTo($tdl);
          	  var $name1 = $("<dd class=name/>");
          	  $name1.appendTo($tdl);
          	  var $price1 = $("<dd class=price/>");
          	  $price1.appendTo($tdl);
          	  var $ta = $("<a href='#'/>");
          	  $ta.appendTo($tdt);
          	  var $timg = $("<img class='lazyload img'/>");
          	  $timg.appendTo($ta);
          	  $timg.attr("src","img/index/"+images1[key]);
          	  $name1.html("<a href='#'>"+name1[key]+"</a>");
          	  $price1.html("<span>￥<span class='bold'>"+price1[key]+"</span></span>");
          }
          
          for(var key in name2)
          {
          	  var $tli2 = $("<li/>");
          	  $tli2.appendTo($tul);
          	  var $tdl2 = $("<dl/>");
          	  $tdl2.appendTo($tli2);
          	  var $tdt2 = $("<dt/>");
          	  $tdt2.appendTo($tdl2);
          	  var $name2 = $("<dd class=name/>");
          	  $name2.appendTo($tdl2);
          	  var $price2 = $("<dd class=price/>");
          	  $price2.appendTo($tdl2);
          	  var $ta2 = $("<a href='#'/>");
          	  $ta2.appendTo($tdt2);
          	  var $timg2 = $("<img class='lazyload img'/>");
          	  $timg2.appendTo($ta2);
          	  $timg2.attr("src","img/index/"+images2[key]);
          	  $name2.html("<a href='#'>"+name2[key]+"</a>");
          	 $price2.html("<span>￥<span class='bold'>"+price2[key]+"</span></span>");
         }
         
         
          	 	
          	 	
       }
    }
	
	function addanimate()
	{
		var $t_pic = $(".transparency_wrap img");
	    $t_pic.hover(function()
	    {
		$(this).stop().animate({"left":"10"});
	    },function()
	    {
		$(this).stop().animate({"left":"0"});
	    });
	    
	    
	    var $floor = $(".floor");
	   
	    for(var i = 0;i < $floor.size();i++)
	    {
	    	 var $Oli = $(".floor").eq(i).find(".tit li");
	         
	        
	         $Oli.hover(function()
	         {
	         	var index = $(this).index();
	         	
	         	var $nowdiv = $(this).parent().parent().find(".tab");
	         	
	         	
	           	$(this).addClass("cur").siblings().removeClass("cur");
	         	$nowdiv.hide().eq(index).show();
	         	
	         	
	         })
	         	
	    	
	    }
	    //第一层
	   /* var $Oli1 = $(".floor1 .tit li");
	    var $Odiv1 = $(".floor1 .tab");
	    
	    $Oli1.hover(function()
	    {
		
		   $Oli1.removeClass("cur");
		   $(this).addClass("cur");
		   $Odiv1.hide().eq($(this).index()).show();
	    });
	    
	    //第二层
	    var $Oli2 = $(".floor2 .tit li");
	    var $Odiv2 = $(".floor2 .tab");
	
	    $Oli2.hover(function()
	    {
		
		   $Oli2.removeClass("cur");
		   $(this).addClass("cur");
		   $Odiv2.hide().eq($(this).index()).show();
	    });
	    
	    //第三层
	    var $Oli3 = $(".floor3 .tit li");
	    var $Odiv3 = $(".floor3 .tab");
	
	    $Oli3.hover(function()
	    {
		
		   $Oli3.removeClass("cur");
		   $(this).addClass("cur");
		   $Odiv3.hide().eq($(this).index()).show();
	    });
	     //第四层
	    var $Oli4 = $(".floor4 .tit li");
	    var $Odiv4 = $(".floor4 .tab");
	
	    $Oli4.hover(function()
	    {
		
		   $Oli4.removeClass("cur");
		   $(this).addClass("cur");
		   $Odiv4.hide().eq($(this).index()).show();
	    });
	     //第五层
	    var $Oli5 = $(".floor5 .tit li");
	    var $Odiv5 = $(".floor5 .tab");
	
	    $Oli5.hover(function()
	    {
		
		   $Oli5.removeClass("cur");
		   $(this).addClass("cur");
		   $Odiv5.hide().eq($(this).index()).show();
	    });
	    //第六层
	    var $Oli6 = $(".floor6 .tit li");
	    var $Odiv6 = $(".floor6 .tab");
	
	    $Oli6.hover(function()
	    {
		
		   $Oli6.removeClass("cur");
		   $(this).addClass("cur");
		   $Odiv6.hide().eq($(this).index()).show();
	    });*/
	    
	    
	    
	}
	
	
	function Carousel(obj)
	{
		
	    var $adv = $(obj).find(".adv");
		var $fig = $(obj).find(".fig");
		var $Img = $(obj).find(".adv ul li")
		var $btn = $(obj).find(".slider_num li")
		var $prev = $(obj).find(".prev");
		var $next = $(obj).find(".next");
		var $Width = $Img.outerWidth();
		$Img.eq(0).clone().appendTo($fig);
		var step = 0;
		var timer;
		timer = setInterval(function()
		{
			step++;
			move();
		},2000);
		//划入时左右按钮显示
		
		$adv.hover(function()
		{
			
			clearInterval(timer);
			$prev.show();
			$next.show();
		},function()
		{
			$prev.hide();
			$next.hide();
			timer=setInterval(function()
			 {
	           step++;
	           move();
              },2000);
		});
		//点击左右按钮
		$prev.bind("click",function()
		{
			if($fig.is(':animated'))
			{
				return;
			}
			step--;
			move();
		});
		
		$next.bind("click",function()
		{
			if($fig.is(':animated'))
			{
				return;
			}
			step++;
			move();
			
		});
		
		
		function move()
		{
			if(step>2)
			{
				step = 1;
				$fig.css("left",0);
			}
			if(step<0)
			{
				step = 1;
				$fig.css("left",-$Width*2);
			}
			var num=step;
            if(num>=2){
               num=0;
            }
			
			$btn.removeClass("hov").eq(num).addClass("hov");
			$fig.stop(true,false).animate({"left":-$Width*step});
		}
		$btn.hover(function()
		{
			step = $(this).index();
			$btn.removeClass("hov");
			$(this).addClass("hov");
			$fig.stop(true,false).animate({"left":-$Width*step});
		});
	}


	
  	

 
          	 	
          	 	
          	 	
          	 	
          	 	
          	 	
          	 	
          	 	
          	 	
          	 		
          	 	
          	 

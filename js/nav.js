$(function()
{
	var $kinds = $(".kinds");
	
    //设置li的划入划出,div的显示和隐藏
    $kinds.hover(function()
    {
    	$(this).find(".sub_kinds").show();
    	
    },function()
    {
    	$(this).find(".sub_kinds").hide();
    });
   var obj;
   $.get("json/nav.json",function(str)
   {
   	   obj = str;
   	   addContent(obj);
   	   
   });
   
   function addContent(obj)
   {
   	  for(var key in obj)
   	  {
   	  	var $sub_kinds = $("<div class=sub_kinds/>");
     		
        var n=key.substring(3)-1;
        $sub_kinds.appendTo($kinds.eq(n));
     	var $kinds_box = $("<div class=kinds_box/>");
     	$kinds_box.appendTo($sub_kinds);
     	var $c_kinds = $("<div class=c_kinds/>");
     	$c_kinds.appendTo($kinds_box);
   		var sub = obj[key];
   		for(var key in sub)
   		{
   			//console.log(sub[key].length);
   			var $sub_head = $("<h4 class=sub_head/>");
     		$sub_head.appendTo($c_kinds);
     		var $sub_cont = $("<ul class=sub_cont/>");
     		$sub_cont.appendTo($c_kinds);
     		var $sub_a = $("<a/>");
     		$sub_a.appendTo($sub_head);
     		$sub_a.html(sub[key][0]+"<i></i>");
     		var u_li = sub[key];
     		for(var i=1;i<u_li.length;i++)
     		{
     			var $sub_kind = $("<li class=sub_kind/>");
     			$sub_kind.appendTo($sub_cont);
     			var $u_a = $("<a/>");
     			$u_a.appendTo($sub_kind);
     			$u_a.html(u_li[i]);
     		}
     		
   			
   		}
   	  }
   }
  
})

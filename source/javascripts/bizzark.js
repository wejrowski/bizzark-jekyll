function init_bizzark(){
  $(document).ready(function(){
  	$("div.work-link").click(function(){
  		window.location = $(this).attr("url");
  		return false;
  	});
  	$("div.work-link").hover(function(){
  		$(this).css("color", "#FFFFFF");
  		$(this).children("a").css("color", "#FFFFFF");
  		$(this).children(1).children(0).children(0).css("color", "#FFFFFF");
  		$(this).children(0).children(".work-hover").fadeTo("fast", 1.0);
  		
  	},function(){
     		$(this).children(0).children(".work-hover").fadeTo("fast", 0);
  		  $(this).children(1).children(0).children(0).css("color", "#1380EC");
     		$(this).css("color", "#000000");
     		$(this).children(1).children(".post-date").css("color", "#000000");
  	});
  });
}
init_bizzark();
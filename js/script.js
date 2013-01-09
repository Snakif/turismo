$(document).ready(function(){
	$("#principal li, #sub1 li, #sub2 li").hide();
	$("#principal ul li:first,#sub1 ul li:first,#sub2 ul li:first").slideDown("Show");

	$(".next").on('click', function(e){
		var padre = $(this).parent();
		var cant =   $("ul li", padre).size();
		e.preventDefault();
		$("ul li", padre).each(function(i){
			if($(this).is(':visible')) {
				$(this).hide();
				if (i == (cant-1)){
					$("ul li:first", padre).fadeIn("Show");
					return false;
				}else{
					$(this).next().fadeIn("Show");
					return false;
				}
			}
		});
	});


/*
	$("#principal ul li").mouseenter(function() {
		$(this).find(".texto").stop().slideDown("Show").animate({top:'216px' },{ queue:false, duration:300 });
    });


	if (screen.width<1920){
	    $("#sub1 ul li").mouseenter(function() {
			$(this).find(".texto").stop().slideDown("Show").animate({top:'532px', left: '450px' },{ queue:false, duration:300 });
	    });
	}else{
		$("#sub1 ul li").mouseenter(function() {
			$(this).find(".texto").stop().slideDown("Show").animate({top:'538px', left: '58px' },{ queue:false, duration:300 });
	    });
	}

    $("#sub2 ul li").mouseenter(function() {
		$(this).find(".texto").stop().slideDown("Show").animate({top:'538px', left: '1009px' },{ queue:false, duration:300 });
    });

    $("#principal ul li").mouseleave(function() {
    	$(this).find(".texto").stop().slideUp("Show").animate({top:'216px' },{ queue:false, duration:300 });

    });

    $("#sub1 ul li").mouseleave(function() {
    	$(this).find(".texto").stop().slideUp("Show").animate({top:'450px', left: '58px' },{ queue:false, duration:300 });

    });

    $("#sub2 ul li").mouseleave(function() {
    	$(this).find(".texto").stop().slideUp("Show").animate({top:'538px', left: '1009px' },{ queue:false, duration:300 });
    });
    */
	corre1()

});

function corre1(){
		var cant = $("#principal ul li").size();
		$("#principal ul li").each(function(i){
			if($(this).is(':visible')) {
				$(this).hide();
				if (i == (cant-1)){
					$("#principal ul li:first").fadeIn("Show");
					return false;
				}else{
					$(this).next().fadeIn("Show");
					//var men = $(this).next().children("img").attr("msj");
					$(this).next()
					//$(this).next().find("li").append(men);
					//console.log(men);
					return false;
				}
			}
		});

		setTimeout('corre2()',2000);
}

function corre2(){
		var cant = $("#sub1 ul li").size();
		$("#sub1 ul li").each(function(i){
			if($(this).is(':visible')) {
				$(this).hide();
				if (i == (cant-1)){
					$("#sub1 ul li:first").fadeIn("Show");
					return false;
				}else{
					$(this).next().fadeIn("Show");
					return false;
				}
			}
		});

		setTimeout('corre3()',2000);
}
function corre3(){
		var cant = $("#sub2 ul li").size();
		$("#sub2 ul li").each(function(i){
			if($(this).is(':visible')) {
				$(this).hide();
				if (i == (cant-1)){
					$("#sub2 ul li:first").fadeIn("Show");
					return false;
				}else{
					$(this).next().fadeIn("Show");
					return false;
				}
			}
		});
		setTimeout('corre1()',2000);
	}
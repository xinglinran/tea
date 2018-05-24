$(function(){
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if ($(window).scrollTop()>=500) {
			$('#bj').animate({
				top:"0px",
				opacity:"1"
			},500);
		}
	})
	})
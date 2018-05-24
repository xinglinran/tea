$(function(){
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if ($(window).scrollTop()>=500) {
			$('#bj').animate({
				top:"0px",
				opacity:"1"
			},500);
			$('#img').delay(400).animate({
				top:"0px",
				opacity:"1"
			},500);
		}
		if ($(window).scrollTop()>=1100) {
			$('#sh').animate({
				top:"0px",
				opacity:"1"
			},500);
			$('#img1').delay(400).animate({
				top:"0px",
				opacity:"1"
			},500);
		}
	})
})
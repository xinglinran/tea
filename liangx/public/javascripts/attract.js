$(function(){
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if ($(window).scrollTop()>=500) {
			$('#ys').animate({
				top:"0px",
				opacity:"1"
			},500);
		}
			if ($(window).scrollTop()>=600) {
			$('#main1').animate({
				top:"0px",
				opacity:"1"
			},800);
		}
		if ($(window).scrollTop()>=1000) {
			$('#zc').animate({
				top:"0px",
				opacity:"1"
			},500);
		}
			if ($(window).scrollTop()>=1100) {
			$('#main2').animate({
				top:"0px",
				opacity:"1"
			},900);
		}
		if ($(window).scrollTop()>=1500) {
			$('#img2').animate({
				top:"0px",
				opacity:"1"
			},900);
			$('#img1').animate({
				top:"0px",
				opacity:"1"
			},900);
		}
		if ($(window).scrollTop()>=1900) {
			$('#lc').animate({
				top:"0px",
				opacity:"1"
			},500);
		}
			if ($(window).scrollTop()>=2100) {
			$('#main3').animate({
				top:"0px",
				opacity:"1"
			},900);
		}
		if ($(window).scrollTop()>=2400) {
			$('#jm').animate({
				top:"0px",
				opacity:"1"
			},500);
		}
			if ($(window).scrollTop()>=2500) {
			$('#main4').animate({
				top:"0px",
				opacity:"1"
			},900);
		}
	})
})
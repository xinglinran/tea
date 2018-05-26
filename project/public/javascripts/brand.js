$(function(){
	$('#mtlCenter').css('transform','translateY(100px)');
	$('#mttlCenter').css('transform','translateY(100px)');

	$(window).scroll(function(){
		if($(window).scrollTop()>=1000){
			$('#mtlCenter').css('transform','translateY(0px)').css('transition','2s');
			$('#mtrOne div:nth-child(1)').css('transform','translateY(0px)').css('transform','rotate(45deg').css('transition','1s');
			$('#mtrTwo div:nth-child(1)').css('transform','translateY(0px)').css('transform','rotate(45deg').css('transition','1.2s');
			$('#mtrThree div:nth-child(1)').css('transform','translateY(0px)').css('transform','rotate(45deg').css('transition','1.4s');
			$('#mtrFour div:nth-child(1)').css('transform','translateY(0px)').css('transform','rotate(45deg').css('transition','1.6s');
			$('#mtrFive div:nth-child(1)').css('transform','translateY(0px)').css('transform','rotate(45deg').css('transition','1.8s');
			$('#mtrSix div:nth-child(1)').css('transform','translateY(0px)').css('transform','rotate(45deg').css('transition','2s');

			$('#mtrh1').css('transform','translateY(0px)').css('transition','1s');
			$('#mtrh2').css('transform','translateY(0px)').css('transition','1.2s');
			$('#mtrh3').css('transform','translateY(0px)').css('transition','1.4s');
			$('#mtrh4').css('transform','translateY(0px)').css('transition','1.6s');
			$('#mtrh5').css('transform','translateY(0px)').css('transition','1.8s');
			$('#mtrh6').css('transform','translateY(0px)').css('transition','2s');

			

		};
		if($(window).scrollTop()>=1500){
			$('#mttlCenter').css('transform','translateY(0px)').css('transition','2s');
			$('#mttrOne div:nth-child(1)').css('transform','translateY(0px)').css('transform','rotate(45deg').css('transition','1s');
			$('#mttrTwo div:nth-child(1)').css('transform','translateY(0px)').css('transform','rotate(45deg').css('transition','1.2s');
			$('#mttrThree div:nth-child(1)').css('transform','translateY(0px)').css('transform','rotate(45deg').css('transition','1.4s');
			$('#mttrFour div:nth-child(1)').css('transform','translateY(0px)').css('transform','rotate(45deg').css('transition','1.6s');
			$('#mttrFive div:nth-child(1)').css('transform','translateY(0px)').css('transform','rotate(45deg').css('transition','1.8s');
			$('#mttrSix div:nth-child(1)').css('transform','translateY(0px)').css('transform','rotate(45deg').css('transition','1s');

			$('#mttrh1').css('transform','translateY(0px)').css('transition','1s');
			$('#mttrh2').css('transform','translateY(0px)').css('transition','1.2s');
			$('#mttrh3').css('transform','translateY(0px)').css('transition','1.4s');
			$('#mttrh4').css('transform','translateY(0px)').css('transition','1.6s');
			$('#mttrh5').css('transform','translateY(0px)').css('transition','1.8s');
			$('#mttrh6').css('transform','translateY(0px)').css('transition','2s');
		}

	})
})
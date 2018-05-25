$(function(){
	var phone;
	var xx = $('#xx')[0];
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if ($(window).scrollTop()>=500) {
			$('#bj').animate({
				top:"0px",
				opacity:"1"
			},500);
		}
		if ($(window).scrollTop()>=1000) {
			$('#lxfs').animate({
				top:"0px",
				opacity:"1"
			},800);
			$('#lxL').animate({
				top:"0px",
				opacity:"1"
			},1300);
			$('#lxR').animate({
				top:"0px",
				opacity:"1"
			},1300);
		}
	})
	$('#inpt1')[0].onfocus = function(){
		this.value="";
	};
	$('#inpt1')[0].onblur = function(){
		this.value="您的姓名";
	};
	$('#inpt2')[0].onfocus = function(){
		this.value="";
		$(xx).animate({
				height: "0px"
			},300);
	};
	$('#inpt2')[0].onblur = function(){
		phone = this.value;
		var pattern = /^1[38]\d{9}$|^14[579]\d{8}$|^15[012356789]\d{8}$|^166\d{8}$|^17[3678]\d{8}$|^19[89]\d{8}$/;
		if(pattern.test(phone)){
			$(xx).animate({
				height: "0px"
			},300);
		}else{
			this.value="您的号码";
			$(xx).animate({
				height: "20px"
			},300);
		}
	};
	$('.inpu')[0].onfocus = function(){
		this.value="";
	};
	$('.inpu')[0].onblur = function(){
		this.value="您的留言";
	};
	
	})
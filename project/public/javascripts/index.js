$(function(){
	$('#loginOut').hide();
	if(window.localStorage.user){
		$('#user').html(window.localStorage.user);
		$('#user').attr('href','javascript:;');
		$('.heatR>div:nth-child(1)').hide();
		$('.heatR>div:nth-child(2)').hide();
		$('#loginOut').show();
	}
	$('#loginOut').on('click',function(){
		// console.log('sss')
		// 
		if(window.localStorage){

			window.localStorage.removeItem('user');
			console.log(window.location);

			window.location.href = '/index';
		}
	})
	// console.log(phone);
	$('.anchor>ul>li:nth-child(2)>a').mouseover(function(){
		$('.anchor>ul>li>span').css('left','-200px')
		$('.anchor>ul>li>span').css('transition','.5s')
		$('.anchor>ul>li:nth-child(2)>a').css('background','rgba(0,0,0,0.5)')
	})
	$('.anchor>ul>li:nth-child(2)>a').mouseout(function(){
		$('.anchor>ul>li>span').css('left','0')
		$('.anchor>ul>li>span').css('transition','.5s')
		$('.anchor>ul>li:nth-child(2)>a').css('background','rgba(0,0,0,0.5)')
	})
	$('.anchor>ul>li:nth-child(2)>span').mouseover(function(){
		$('.anchor>ul>li>span').css('left','-200px')
		$('.anchor>ul>li>span').css('transition','.5s')
	})
	$('.anchor>ul>li:nth-child(2)>span').mouseout(function(){
		$('.anchor>ul>li>span').css('left','0')
		$('.anchor>ul>li>span').css('transition','.5s')
	})

	$('.anchor>ul>li:nth-child(3)>a').mouseover(function(){
		$('.anchor>ul>li:nth-child(3)>div').css('left','-100px')
		$('.anchor>ul>li:nth-child(3)>div').css('transition','.5s')
		$('.anchor>ul>li:nth-child(3)>a').css('background','rgba(0,0,0,0.5)')
	})
	$('.anchor>ul>li:nth-child(3)>a').mouseout(function(){
		$('.anchor>ul>li:nth-child(3)>div').css('left','50px')
		$('.anchor>ul>li:nth-child(3)>div').css('transition','.5s')
		$('.anchor>ul>li:nth-child(3)>a').css('background','rgba(0,0,0,0.5)')
	})
	$('.anchor>ul>li:nth-child(3)>div').mouseover(function(){
		$('.anchor>ul>li:nth-child(3)>div').css('left','-100px')
		$('.anchor>ul>li:nth-child(3)>div').css('transition','.5s')
	})
	$('.anchor>ul>li:nth-child(3)>div').mouseout(function(){
		$('.anchor>ul>li:nth-child(3)>div').css('left','50px')
		$('.anchor>ul>li:nth-child(3)>div').css('transition','.5s')
	})

	$('.anchor>ul>li:nth-child(4)>a').mouseover(function(){
		$('.anchor>ul>li:nth-child(4)>div').css('left','-100px')
		$('.anchor>ul>li:nth-child(4)>div').css('transition','.5s')
		$('.anchor>ul>li:nth-child(4)>a').css('background','rgba(0,0,0,0.5)')
	})
	$('.anchor>ul>li:nth-child(4)>a').mouseout(function(){
		$('.anchor>ul>li:nth-child(4)>div').css('left','50px')
		$('.anchor>ul>li:nth-child(4)>div').css('transition','.5s')
		$('.anchor>ul>li:nth-child(4)>a').css('background','rgba(0,0,0,0.5)')
	})
	$('.anchor>ul>li:nth-child(4)>div').mouseover(function(){
		$('.anchor>ul>li:nth-child(4)>div').css('left','-100px')
		$('.anchor>ul>li:nth-child(4)>div').css('transition','.5s')
	})
	$('.anchor>ul>li:nth-child(4)>div').mouseout(function(){
		$('.anchor>ul>li:nth-child(4)>div').css('left','50px')
		$('.anchor>ul>li:nth-child(4)>div').css('transition','.5s')
	})

	$('.mfR>div').mouseover(function(){
		$(this).animate({width:'69%'},500).siblings().animate({width:'10%'},500);
	});
	$('.mfR>div').mouseout(function(){
		$('.mfR>div').stop();
	});
	$('.mainoR').mouseover(function(){
		$('#xzt').css('transform','rotateX(0deg)');
		$('#xzt').css('transition','.5s');
		$('#xzt').css('opacity','1');
	});
	$('.mainoR').mouseout(function(){
		$('#xzt').css('transform','rotateX(90deg)');
		$('#xzt').css('transition','.5s');
		$('#xzt').css('opacity','0');
	});
	$('#mtTopOne').mouseover(function(){
		$('#mtTopOne>img:nth-child(1)').css('left','600px')
		$('#mtTopOne>img:nth-child(1)').css('transition','.5s')
		$('#mtTopOne>img:nth-child(2)').css('left','0')
		$('#mtTopOne>img:nth-child(2)').css('transition','.5s')
	});
	$('#mtTopOne').mouseout(function(){
		$('#mtTopOne>img:nth-child(1)').css('left','0')
		$('#mtTopOne>img:nth-child(1)').css('transition','.5s')
		$('#mtTopOne>img:nth-child(2)').css('left','-600px')
		$('#mtTopOne>img:nth-child(2)').css('transition','.5s')
	});
	$('#mtTopTwo').mouseover(function(){
		$('#mtTopTwo>img:nth-child(1)').css('left','-600px')
		$('#mtTopTwo>img:nth-child(1)').css('transition','.5s')
		$('#mtTopTwo>img:nth-child(2)').css('left','0')
		$('#mtTopTwo>img:nth-child(2)').css('transition','.5s')
	});
	$('#mtTopTwo').mouseout(function(){
		$('#mtTopTwo>img:nth-child(1)').css('left','0')
		$('#mtTopTwo>img:nth-child(1)').css('transition','.5s')
		$('#mtTopTwo>img:nth-child(2)').css('left','600px')
		$('#mtTopTwo>img:nth-child(2)').css('transition','.5s')
	});
	$('#mtTopThree').mouseover(function(){
		$('#mtTopThree>img:nth-child(1)').css('left','600px')
		$('#mtTopThree>img:nth-child(1)').css('transition','.5s')
		$('#mtTopThree>img:nth-child(2)').css('left','0')
		$('#mtTopThree>img:nth-child(2)').css('transition','.5s')	
	});
	$('#mtTopThree').mouseout(function(){
		$('#mtTopThree>img:nth-child(1)').css('left','0')
		$('#mtTopThree>img:nth-child(1)').css('transition','.5s')
		$('#mtTopThree>img:nth-child(2)').css('left','-600px')
		$('#mtTopThree>img:nth-child(2)').css('transition','.5s')
	});

	$('#hOne').mouseover(function(){
		$('#hOne').css('transform','rotate(360deg)')
		$('#hOne').css('transition','1s')
	})
	$('#hOne').mouseout(function(){
		$('#hOne').css('transform','rotate(0deg)')
		$('#hOne').css('transition','1s')
	})
	$('#hTwo').mouseover(function(){
		$('#hTwo').css('transform','rotate(360deg)')
		$('#hTwo').css('transition','1s')
	})
	$('#hTwo').mouseout(function(){
		$('#hTwo').css('transform','rotate(0deg)')
		$('#hTwo').css('transition','1s')
	})
	$('#hThree').mouseover(function(){
		$('#hThree').css('transform','rotate(360deg)')
		$('#hThree').css('transition','1s')
	})
	$('#hThree').mouseout(function(){
		$('#hThree').css('transform','rotate(0deg)')
		$('#hThree').css('transition','1s')
	})
// 轮播图
	// 轮播图
	var i=0;
	$('.yjt').click(function(){
		$('.heaBottom>div:nth-child(1)').css('transform','translateX(-100%)');
		$('.heaBottom>div:nth-child(1)').css('transition','1s');
		$('.heaBottom>div:nth-child(2)').css('left','0');
		$('.heaBottom>div:nth-child(2)').css('transition','1s');
		$('.yjt').css('border','1px solid #fff');
		$('.zjt').css('border','0');
		i=1;
	})
	$('.zjt').click(function(){
		$('.heaBottom>div:nth-child(1)').css('transform','translateX(0)');
		$('.heaBottom>div:nth-child(1)').css('transition','1s');
		$('.heaBottom>div:nth-child(2)').css('left','100%');
		$('.heaBottom>div:nth-child(2)').css('transition','1s');
		$('.yjt').css('border','0');
		$('.zjt').css('border','1px solid #fff');
		i=0;
	})
	trmer = setInterval(lbt,5000);
	$('#lb1').mouseover(function(){
		clearInterval(trmer);
	})
	$('#lb2').mouseover(function(){
		clearInterval(trmer);
	})
	$('#lb1').mouseout(function(){
		trmer = setInterval(lbt,5000);
	})
	$('.zjt').mouseout(function(){
		trmer = setInterval(lbt,5000);
	})
	$('.yjt').mouseover(function(){
		clearInterval(trmer);
	})
	$('.zjt').mouseover(function(){
		clearInterval(trmer);
	})
	$('.yjt').mouseout(function(){
		trmer = setInterval(lbt,5000);
	})
	$('#lb2').mouseout(function(){
		trmer = setInterval(lbt,5000);
	})
	function lbt(){
		if(i%2==0){
			$('.heaBottom>div:nth-child(1)').css('transform','translateX(-100%)');
			$('.heaBottom>div:nth-child(1)').css('transition','1s');
			$('.heaBottom>div:nth-child(2)').css('left','0');
			$('.heaBottom>div:nth-child(2)').css('transition','1s');
			$('.yjt').css('border','1px solid #fff');
			$('.zjt').css('border','0');
			i=1;
		}else{
			$('.heaBottom>div:nth-child(1)').css('transform','translateX(0)');
			$('.heaBottom>div:nth-child(1)').css('transition','1s');
			$('.heaBottom>div:nth-child(2)').css('left','100%');
			$('.heaBottom>div:nth-child(2)').css('transition','1s');
			$('.yjt').css('border','0');
			$('.zjt').css('border','1px solid #fff');
			i=0;
		}
		
	}

	$('#s').click(function(){
		$('html,body').animate({'scrollTop':'0'},800)
	})
	$('#x').click(function(){
		$('html,body').animate({'scrollTop':'5000'},800)
	})


	$(window).scroll(function(){
		var top=$(window).scrollTop();
		console.log(top)
		if(top>=400){
			$('.mlL').css('transform','scale(1,1)')
			$('.mlL').css('transition','1s');
			$('#guan').css('transform','translateY(0)');
			$('#guan').css('transition','1s');
			$('.mlR').css('transform','scale(1,1)')
			$('.mlR').css('transition','1s');
			$('.mainoR>img').css('transform','translateY(0)');
			$('.mainoR>img').css('transition','1s');
		}
		if (top>=800) {
			$('#xcOne>p>span').css('top','0');
			$('#xcOne>p>span').css('left','6px');
			$('#xcOne>p>span').css('transition','1s');
		}
		if (top>=2400) {
			$('#xcTwo>p>span').css('top','0');
			$('#xcTwo>p>span').css('left','6px');
			$('#xcTwo>p>span').css('transition','1s');
		}
		if (top>=3300) {
			$('#xcThree>p>span').css('top','0');
			$('#xcThree>p>span').css('left','6px');
			$('#xcThree>p>span').css('transition','1s');
		}
		if(top>=1000){
			$('#mtTopOne>img').css('transform','translateX(0)');
			$('#mtTopOne>img').css('transition','1s');
			$('#contentOne>div>span').css('top','0');
			$('#contentOne>div>span').css('transition','1s');
			$('#contentOne>p>span').css('top','0');
			$('#contentOne>p>span').css('transition','1s');
			$('#contentOne>h1>img').css('transform','translateX(0)');
			$('#contentOne>h1>img').css('transition','1s');
		}
		if(top>=1400){
			$('#mtTopTwo>img').css('transform','translateX(0)');
			$('#mtTopTwo>img').css('transition','1s');
			$('#contentTwo>div>span').css('top','0');
			$('#contentTwo>div>span').css('transition','1s');
			$('#contentTwo>p>span').css('top','0');
			$('#contentTwo>p>span').css('transition','1s');
			$('#contentTwo>h1>img').css('transform','translateX(0)');
			$('#contentTwo>h1>img').css('transition','1s');
		}
		if(top>=2000){
			$('#mtTopThree>img').css('transform','translateX(0)');
			$('#mtTopThree>img').css('transition','1s');
			$('#contentThree>div>span').css('top','0');
			$('#contentThree>div>span').css('transition','1s');
			$('#contentThree>p>span').css('top','0');
			$('#contentThree>p>span').css('transition','1s');
			$('#contentThree>h1>img').css('transform','translateX(0)');
			$('#contentThree>h1>img').css('transition','1s');
		}
		if(top>3500){
			$('.mfL>ul>li:nth-child(1)').css('transform','translateX(0)');
			$('.mfL>ul>li:nth-child(1)').css('transition','.5s');
			$('.mfL>ul>li:nth-child(2)').css('transform','translateX(0)');
			$('.mfL>ul>li:nth-child(2)').css('transition','1s');
			$('.mfL>ul>li:nth-child(3)').css('transform','translateX(0)');
			$('.mfL>ul>li:nth-child(3)').css('transition','1.5s');
			$('.mfL>ul>li:nth-child(4)').css('transform','translateX(0)');
			$('.mfL>ul>li:nth-child(4)').css('transition','2s');
		}
		if(top>2500){
			$('.mainThree>ul>li>div').css('transform','translateY(0)');
			$('.mainThree>ul>li>div').css('transition','1s');
		}
		if(top>4000){
			$('.stL').css('transform','translateY(0)');
			$('.stL').css('transition','1s');
			$('.stR').css('transform','translateY(0)');
			$('.stR').css('transition','1s');
			$('.weixin').css('transform','translateY(0)');
			$('.weixin').css('transition','1s');
			$('.shouji').css('transform','translateY(0)');
			$('.shouji').css('transition','1s');
		}
	})

})
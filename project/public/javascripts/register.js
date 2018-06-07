$(function(){
	$('#p1').hide();
	$('#p2').hide();
	$('#p4').hide();
	$('#p5').hide();
	var phone_flag = false;
	var pass_flag = false;
	var repass_flag = false;
	//手机号聚焦
	$('#shoujihao').on('focus',function(){
		$('#p1').hide();
		$('#p2').hide();
	})

	//手机号失焦
	$('#shoujihao').on('blur',function(){
		var phone=$(this).val();
		console.log(phone)
		var pattern = /^1[38]\d{9}$|^14[579]\d{8}$|^15[012356789]\d{8}$|^166\d{8}$|^17[3678]\d{8}$|^19[89]\d{8}$/;

		if(pattern.test(phone)){
			$.ajax({
				url:'/register',
				type:'post',
				data:{phone:phone},
				// async:'true',
				success:function(data){
					console.log(data);
					if(data == '1'){
						// 用户名已注册
						$('#p2').show();
						phone_flag = false;
					}else if(data == '2'){
						// 用户名未注册
						phone_flag = true;
					}
				},
				error:function(err){
					return console.log(err);
				}
			});
		}else{
			$('#p1').show();
		}
	})
	var pass;
	//密码聚焦
	$('#pass').on('focus',function(){
		$('#p3').hide();
		$('#p4').hide();
	})

	//密码失焦
	$('#pass').on('blur',function(){
		$('#p3').hide();
		// var pass = $(this).val();
		var pattern = /^\S{8,20}$/;
		if(pattern.test($(this).val())){
			pass = $(this).val();
			pass_flag = true;
		
		}else{
			$('#p4').show();
			pass_flag = false;
		}
	})
	//确认密码聚焦
	$('#mima').on('focus',function(){
		$('#p5').hide();
	})

	//确认密码失焦
	$('#mima').on('blur',function(){
		var repass = $(this).val();
		if(repass==pass){
				repass_flag = true;
		}else{
			$('#p5').show();
			repass_flag = false;
		}
	})
	// 验证是否可以提交
	$('#register').on('submit',function(){
		// return false;

		if(phone_flag&&pass_flag&&repass_flag){
			return true;
		}else{
			return false;
		}
	})
})
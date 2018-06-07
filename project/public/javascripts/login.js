$(function(){	
	var phone_flag = false;
	var pass_flag = false;
	var repass;
	var phone;
	var pass;

	if ($('#zhanghao').val()!='' && $('#password').val()!='') {
		phone_flag = true;
		pass_flag = true;
	}
	$('#zhanghao').on('focus',function(){
		$('#p6').hide();
		$('#p7').hide();
	})
	$('#zhanghao').on('blur',function(){
		phone=$(this).val();
		var pattern = /^1[38]\d{9}$|^14[579]\d{8}$|^15[012356789]\d{8}$|^166\d{8}$|^17[3678]\d{8}$|^19[89]\d{8}$/;
		if(pattern.test(phone)){
			$.ajax({
				url:'/login',
				type:'post',
				data:{phone:phone},
				// async:'true',
				success:function(data){
					// 判断是否返回密码
					if(data.length){
						phone_flag = true;
						// 得到数据库返回的密码
						repass = data[0].pass;
					}else{
						phone_flag = false;
					}
				},
				error:function(err){
					return console.log(err);
				}
			})
		}else{
			$('#p6').show();
		}
	})
	

	//密码失焦
	$('#password').on('blur',function(){
		var pattern = /^\S{8,20}$/;
		if(pattern.test($(this).val())){
			pass = $(this).val();
			pass_flag = true;					
		}else{
			
			pass_flag = false;
		}
	})
	// 验证是否可以提交
	$('#login').on('submit',function(){
		if(phone_flag&&pass_flag){
			phone=$('#zhanghao').val()
			window.localStorage.setItem('user',phone);
			return true;
		}else{
			return false;
		}
	})


})

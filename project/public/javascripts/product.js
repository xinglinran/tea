$(function(){
	var ul = document.getElementById('mbrmRight')
	var i = 1;
	var input = document.getElementById('wrrsrI');

	function fun(){
		$('#mbLeft').css('left','-600px');
		$('#mbRight').css('right','-1500px');
		$('#mbLeft').animate({left:'0px'},1500);
		$('#mbRight').animate({right:'0px'},1500);	
	}

	window.onload= function(){
		$.ajax({
			url:'/product',
			type:'post',
			data:{},
			success:function(data){		
				for (var i = 0;i<data.length;i++) {
					var li = document.createElement('li');
					li.id = i;
					var img = document.createElement('img');
					var a = document.createElement('a');
					a.href = 'javascript:void(0)';
					var b = document.createElement('a');
					b.href = 'javascript:void(0)';
					var p = document.createElement('p');
					img.src = 'images/'+data[i].ximg;
					$(li).attr('title',data[i].name );
					ul.appendChild(li).appendChild(a).appendChild(img);
					li.appendChild(p).appendChild(b).innerHTML= data[i].name;
					$(li).on('click',function(){
						// console.log($(this).attr('id'));		
						$('.mbrTop').hide();
						fun();
						$('.mbrMain').hide();
						$('.mbrBotton').hide();
						$('#wrap').show();	
						var image = document.getElementById('imga');
						var h1 = document.getElementById('h1');
						var pricea = document.getElementById('pricea');
						var shuomin = document.getElementById('shuomin');
						var ul1 = document.getElementById('ltbMain');
						image.src = "images/"+data[$(this).attr('id')].dimg;
						h1.innerHTML = data[$(this).attr('id')].name;
						pricea.prepend(data[$(this).attr('id')].num);
						shuomin.innerHTML = data[$(this).attr('id')].shuomin;
						for(var i=1;i<7;i++){
							var li = document.createElement('li');
							var img = document.createElement('img');
							var div = document.createElement('div');
							var h3 = document.createElement('h3');
							var a = document.createElement('a');
							ul1.appendChild(li).appendChild(img);
							ul1.appendChild(li).appendChild(div);
							ul1.appendChild(li).appendChild(h3).appendChild(a);
							img.src = "images/"+data[i].ximg;
							div.innerHTML = data[i].num+"元";
							a.innerHTML = data[i].name;
						}
						
					})
				}		
			},
			error:function(err){
				return console.log(err);
			}
		})
	}	
	
	$('#cpzq').on('click',function(){
		input.value =  1;
		i=1;
		$('#chanpinq').hide();
		fun();
		$('.mbrTop').show();
		$('.mbrMain').show();
		$('.mbrBotton').show();		
		$('#chanpin').empty();
		$('#mbrmRight').empty();
		$('#pricea').empty();
		$('#ltbMain').empty();
		$('#wrap').hide();		
		$.ajax({
			url:'/product',
			type:'post',
			data:{},
			success:function(data){
				for (var i = 0;i<data.length;i++) {
					var li = document.createElement('li');
					li.id = i;
					var img = document.createElement('img');
					var a = document.createElement('a');
					a.href = 'javascript:void(0)';
					var b = document.createElement('a');
					b.href = 'javascript:void(0)';
					var p = document.createElement('p');
					img.src = 'images/'+data[i].ximg;
					$(li).attr('title',data[i].name);
					ul.appendChild(li).appendChild(a).appendChild(img);
					li.appendChild(p).appendChild(b).innerHTML= data[i].name;
					$(li).on('click',function(){
						// console.log($(this).attr('id'));
						
						$('.mbrTop').hide();
						fun();
						$('.mbrMain').hide();
						$('.mbrBotton').hide();
						$('#wrap').show();	
					
						var image = document.getElementById('imga');
						var h1 = document.getElementById('h1');
						var pricea = document.getElementById('pricea');
						var shuomin = document.getElementById('shuomin');
						var ul1 = document.getElementById('ltbMain');
						image.src = "images/"+data[$(this).attr('id')].dimg;
						h1.innerHTML = data[$(this).attr('id')].name;
						pricea.prepend(data[$(this).attr('id')].num);
						shuomin.innerHTML = data[$(this).attr('id')].shuomin;	
						for(var i=1;i<7;i++){
							var li = document.createElement('li');
							var img = document.createElement('img');
							var div = document.createElement('div');
							var h3 = document.createElement('h3');
							var a = document.createElement('a');
							ul1.appendChild(li).appendChild(img);
							ul1.appendChild(li).appendChild(div);
							ul1.appendChild(li).appendChild(h3).appendChild(a);
							img.src = "images/"+data[i].ximg;
							div.innerHTML = data[i].num+"元";
							a.innerHTML = data[i].name;
						}	
					})
				}
			},
			error:function(err){
				return console.log(err);
			}
		});
	})

	$('#sanz').on('click',function(){
		input.value =  1;
		i=1;		
		$('.mbrTop').show();
		fun();
		$('.mbrMain').show();
		$('.mbrBotton').show();
		$('#wrap').hide();	
		$('#mbrtRighta').empty().append('散装');
		$('#sanz').css('border-left','3px solid #D2A069').css('color','#D2A069');
		$('#lih').css('border-left','3px solid transparent').css('color','#000');
		$('#hez').css('border-left','3px solid transparent').css('color','#000');
		$('#chanpin').empty().append("<a>散装</a>");
		$('#chanpinq').show();
		$('#mbrmRight').empty();
		$('#pricea').empty();
		$('#ltbMain').empty();
		$.ajax({
			url:'/product',
			type:'post',
			data:{},
			success:function(data){
				for (var i = 0;i<data.length;i++) {
					if(i = data.length-1){
						var li = document.createElement('li');
						li.id = i;
						var img = document.createElement('img');
						var a = document.createElement('a');
						a.href = 'javascript:void(0)';
						var b = document.createElement('a');
						b.href = 'javascript:void(0)';
						var p = document.createElement('p');
						img.src = 'images/'+data[i].ximg;
						$(li).attr('title',data[i].name );
						ul.appendChild(li).appendChild(a).appendChild(img);
						li.appendChild(p).appendChild(b).innerHTML= data[i].name;
						$(li).on('click',function(){
							// console.log($(this).attr('id'));
							
							$('.mbrTop').hide();
							fun();
							$('.mbrMain').hide();
							$('.mbrBotton').hide();
							$('#wrap').show();	
							
							var image = document.getElementById('imga');
							var h1 = document.getElementById('h1');
							var pricea = document.getElementById('pricea');
							var shuomin = document.getElementById('shuomin');
							var ul1 = document.getElementById('ltbMain');
							image.src = "images/"+data[$(this).attr('id')].dimg;
							h1.innerHTML = data[$(this).attr('id')].name;
							pricea.prepend(data[$(this).attr('id')].num);
							shuomin.innerHTML = data[$(this).attr('id')].shuomin;
							for(var i=1;i<7;i++){
								var li = document.createElement('li');
								var img = document.createElement('img');
								var div = document.createElement('div');
								var h3 = document.createElement('h3');
								var a = document.createElement('a');
								ul1.appendChild(li).appendChild(img);
								ul1.appendChild(li).appendChild(div);
								ul1.appendChild(li).appendChild(h3).appendChild(a);
								img.src = "images/"+data[i].ximg;
								div.innerHTML = data[i].num+"元";
								a.innerHTML = data[i].name;
							}	
						})
					}	
				}
			},
			error:function(err){
				return console.log(err);
			}
		})	
	})

	$('#lih').on('click',function(){
		input.value =  1;
		i=1;	
		$('.mbrTop').show();
		fun();
		$('.mbrMain').show();
		$('.mbrBotton').show();
		$('#wrap').hide();
		$('#mbrtRighta').empty().append('礼盒');
		$('#lih').css('border-left','3px solid #D2A069').css('color','#D2A069');
		$('#sanz').css('border-left','3px solid transparent').css('color','#000');
		$('#hez').css('border-left','3px solid transparent').css('color','#000');
		$('#chanpin').empty().append("<a>礼盒</a>");
		$('#chanpinq').show();
		$('#mbrmRight').empty();
		$('#pricea').empty();
		$('#ltbMain').empty();	
		$.ajax({
			url:'/product',
			type:'post',
			data:{},
			success:function(data){
				for (var i = 0;i<data.length;i++) {
					if(i < data.length-8){
						var li = document.createElement('li');
						li.id = i;
						var img = document.createElement('img');
						var a = document.createElement('a');
						a.href = 'javascript:void(0)';
						var b = document.createElement('a');
						b.href = 'javascript:void(0)';
						var p = document.createElement('p');
						img.src = 'images/'+data[i].ximg;
						$(li).attr('title',data[i].name);
						ul.appendChild(li).appendChild(a).appendChild(img);
						li.appendChild(p).appendChild(b).innerHTML= data[i].name;
						$(li).on('click',function(){
							
							$('.mbrTop').hide();
							fun();
							$('.mbrMain').hide();
							$('.mbrBotton').hide();
							$('#wrap').show();	
							var image = document.getElementById('imga');
							var h1 = document.getElementById('h1');
							var pricea = document.getElementById('pricea');
							var shuomin = document.getElementById('shuomin');
							var ul1 = document.getElementById('ltbMain');
							image.src = "images/"+data[$(this).attr('id')].dimg;
							h1.innerHTML = data[$(this).attr('id')].name;
							pricea.prepend(data[$(this).attr('id')].num);
							shuomin.innerHTML = data[$(this).attr('id')].shuomin;
							for(var i=1;i<7;i++){
								var li = document.createElement('li');
								var img = document.createElement('img');
								var div = document.createElement('div');
								var h3 = document.createElement('h3');
								var a = document.createElement('a');
								ul1.appendChild(li).appendChild(img);
								ul1.appendChild(li).appendChild(div);
								ul1.appendChild(li).appendChild(h3).appendChild(a);
								img.src = "images/"+data[i].ximg;
								div.innerHTML = data[i].num+"元";
								a.innerHTML = data[i].name;
							}	
						})
					}	
					if(i > data.length-5 && i < data.length-1){
						var li = document.createElement('li');
						li.id = i;
						var img = document.createElement('img');
						var a = document.createElement('a');
						a.href = 'javascript:void(0)';
						var b = document.createElement('a');
						b.href = 'javascript:void(0)';
						var p = document.createElement('p');
						img.src = 'images/'+data[i].ximg;
						$(li).attr('title',data[i].name );
						ul.appendChild(li).appendChild(a).appendChild(img);
						li.appendChild(p).appendChild(b).innerHTML= data[i].name;
						$(li).on('click',function(){
							$('.mbrTop').hide();
							fun();
							$('.mbrMain').hide();
							$('.mbrBotton').hide();
							$('#wrap').show();	
							var image = document.getElementById('imga');
							var h1 = document.getElementById('h1');
							var pricea = document.getElementById('pricea');
							var shuomin = document.getElementById('shuomin');
							var ul1 = document.getElementById('ltbMain');
							image.src = "images/"+data[$(this).attr('id')].dimg;
							h1.innerHTML = data[$(this).attr('id')].name;
							pricea.prepend(data[$(this).attr('id')].num);
							shuomin.innerHTML = data[$(this).attr('id')].shuomin;
							for(var i=1;i<7;i++){
								var li = document.createElement('li');
								var img = document.createElement('img');
								var div = document.createElement('div');
								var h3 = document.createElement('h3');
								var a = document.createElement('a');
								ul1.appendChild(li).appendChild(img);
								ul1.appendChild(li).appendChild(div);
								ul1.appendChild(li).appendChild(h3).appendChild(a);
								img.src = "images/"+data[i].ximg;
								div.innerHTML = data[i].num+"元";
								a.innerHTML = data[i].name;
							}	
						})
					}
				}			
			},
			error:function(err){
				return console.log(err);
			}
		})	
	})
	
	$('#hez').on('click',function(){
		input.value =  1;
		i=1;	
		$('.mbrTop').show();
		fun();
		$('.mbrMain').show();
		$('.mbrBotton').show();
		$('#wrap').hide();	
		$('#mbrtRighta').empty().append('盒装');
		$('#hez').css('border-left','3px solid #D2A069').css('color','#D2A069');
		$('#sanz').css('border-left','3px solid transparent').css('color','#000');
		$('#lih').css('border-left','3px solid transparent').css('color','#000');
		$('#chanpin').empty().append("<a>盒装</a>");
		$('#chanpinq').show()
		$('#mbrmRight').empty();
		$('#pricea').empty();
		$('#ltbMain').empty();	
		$.ajax({
			url:'/product',
			type:'post',
			data:{},
			success:function(data){
				for (var i = 0;i<data.length;i++) {
					if(i > data.length-10 && i<data.length-5){
						var li = document.createElement('li');
						li.id = i;
						var img = document.createElement('img');
						var a = document.createElement('a');
						a.href = 'javascript:void(0)';
						var b = document.createElement('a');
						b.href = 'javascript:void(0)';
						var p = document.createElement('p');
						img.src = 'images/'+data[i].ximg;
						$(li).attr('title',data[i].name);
						ul.appendChild(li).appendChild(a).appendChild(img);
						li.appendChild(p).appendChild(b).innerHTML= data[i].name;
						$(li).on('click',function(){
						
							$('.mbrTop').hide();
							fun();
							$('.mbrMain').hide();
							$('.mbrBotton').hide();
							$('#wrap').show();		
							var image = document.getElementById('imga');
							var h1 = document.getElementById('h1');
							var pricea = document.getElementById('pricea');
							var shuomin = document.getElementById('shuomin');
							var ul1 = document.getElementById('ltbMain');				
							image.src = "images/"+data[$(this).attr('id')].dimg;
							h1.innerHTML = data[$(this).attr('id')].name;
							pricea.prepend(data[$(this).attr('id')].num);
							shuomin.innerHTML = data[$(this).attr('id')].shuomin;
							for(var i=1;i<7;i++){
								var li = document.createElement('li');
								var img = document.createElement('img');
								var div = document.createElement('div');
								var h3 = document.createElement('h3');
								var a = document.createElement('a');
								ul1.appendChild(li).appendChild(img);
								ul1.appendChild(li).appendChild(div);
								ul1.appendChild(li).appendChild(h3).appendChild(a);
								img.src = "images/"+data[i].ximg;
								div.innerHTML = data[i].num+"元";
								a.innerHTML = data[i].name;
							}
						})
					}	
				}		
			},
			error:function(err){
				return console.log(err);
			}
		})	
	})

	$('#ltBotton').mouseover(function(){	
		$('.xzuo').css('visibility','visible');
		$('.xyou').css('visibility','visible');		
	})
	$('.xyou').on('click',function(){
		$('.ltbMain').animate({left:'-970px'},'normal')
	})
	$('.xzuo').on('click',function(){
		$('.ltbMain').animate({left:'0px'},'normal')
	})
	$('#ltBotton').mouseout(function(){	
		$('.xzuo').css('visibility','hidden');
		$('.xyou').css('visibility','hidden');
	})

	$('#cha').on('click',function(){
		$('#more').css('display','none');
	})
	$('#mmore').mouseover(function(){
		$('#more').css('display','block')
	})
	$('#mmore').mouseout(function(){
		$('#more').css('display','none')
	})
	$('#more').mouseover(function(){
		$('#more').css('display','block')
	})
	$('#more').mouseout(function(){
		$('#more').css('display','none')
	})
	

	input.value = i;
	$(input).on('blur',function(){
		i = Number(input.value);
	});
	$('#wrrsrA').on('click',function(){
		input.value = i+=1;
	});
	$('#wrrsrJ').on('click',function(){
		input.value = i-=1;
		if(input.value<=0){
			input.value =  0;
			i=0;
		};
	});
	


})
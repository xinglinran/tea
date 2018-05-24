$(function(){
	var ul = document.getElementById('mbrmRight')
	window.onload= function(){
		$.ajax({
			url:'/product',
			type:'post',
			data:{},
			success:function(data){		
				for (var i = 0;i<data.length;i++) {
					var li = document.createElement('li');
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
					
				}
				var image = document.getElementById('imga');
				var h1 = document.getElementById('h1');
				var pricea = document.getElementById('pricea');
				var shuomin = document.getElementById('shuomin');
				var ul1 = document.getElementById('ltbMain');
				$('#mbrmRight li:nth-child(1)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);	
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[0].dimg;
					h1.innerHTML = data[0].name;
					pricea.prepend(data[0].num);
					shuomin.innerHTML = data[0].shuomin;
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
				$('#mbrmRight li:nth-child(2)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);	
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[1].dimg;
					h1.innerHTML = data[1].name;
					pricea.prepend(data[1].num);
					shuomin.innerHTML = data[1].shuomin;
					for(var i=2;i<8;i++){
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
				$('#mbrmRight li:nth-child(3)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);	
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[2].dimg;
					h1.innerHTML = data[2].name;
					pricea.prepend(data[2].num);
					shuomin.innerHTML = data[2].shuomin;
					for(var i=3;i<9;i++){
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
				$('#mbrmRight li:nth-child(4)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[3].dimg;
					h1.innerHTML = data[3].name;
					pricea.prepend(data[3].num);
					shuomin.innerHTML = data[3].shuomin;
					for(var i=4;i<10;i++){
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
				$('#mbrmRight li:nth-child(5)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[4].dimg;
					h1.innerHTML = data[4].name;
					pricea.prepend(data[4].num);
					shuomin.innerHTML = data[4].shuomin;
					for(var i=5;i<11;i++){
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
				$('#mbrmRight li:nth-child(6)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[5].dimg;
					h1.innerHTML = data[5].name;
					pricea.prepend(data[5].num);
					shuomin.innerHTML = data[5].shuomin;
					for(var i=6;i<12;i++){
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
				$('#mbrmRight li:nth-child(7)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[6].dimg;
					h1.innerHTML = data[6].name;
					pricea.prepend(data[6].num);
					shuomin.innerHTML = data[6].shuomin;
					for(var i=0;i<7;i++){
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
				$('#mbrmRight li:nth-child(8)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[7].dimg;
					h1.innerHTML = data[7].name;
					pricea.prepend(data[7].num);
					shuomin.innerHTML = data[7].shuomin;
					for(var i=2;i<8;i++){
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
				$('#mbrmRight li:nth-child(9)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[8].dimg;
					h1.innerHTML = data[8].name;
					pricea.prepend(data[8].num);
					shuomin.innerHTML = data[8].shuomin;
					for(var i=1;i<6;i++){
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
				$('#mbrmRight li:nth-child(10)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[9].dimg;
					h1.innerHTML = data[9].name;
					pricea.prepend(data[9].num);
					shuomin.innerHTML = data[9].shuomin;
					for(var i=6;i<11;i++){
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
				$('#mbrmRight li:nth-child(11)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);	
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[10].dimg;
					h1.innerHTML = data[10].name;
					pricea.prepend(data[10].num);
					shuomin.innerHTML = data[10].shuomin;
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
				$('#mbrmRight li:nth-child(12)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[11].dimg;
					h1.innerHTML = data[11].name;
					pricea.prepend(data[11].num);
					shuomin.innerHTML = data[11].shuomin;
					for(var i=3;i<9;i++){
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
				
			},
			error:function(err){
				return console.log(err);
			}
		})
	}	
	$('#cpzq').click(function(){
		$('#mbLeft').css('left','-600px');
		$('#mbLeft').animate({left:'0px'},2000);
		$('#mbRight').css('right','-1000px');
		$('#mbRight').animate({right:'0px'},2000);
		$('.mbrTop').show();
		$('.mbrMain').show();
		$('.mbrBotton').show();
		$('#chanpinq').hide();
		$('#chanpin').empty();
		$('#mbrmRight').empty();
		$('#pricea').empty();
		$('#ltbMain').empty();
		$.ajax({
			url:'/product',
			type:'post',
			data:{},
			success:function(data){
				for (var i = 0;i<data.length;i++) {
					var li = document.createElement('li');
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
				}
				var image = document.getElementById('imga');
				var h1 = document.getElementById('h1');
				var pricea = document.getElementById('pricea');
				var shuomin = document.getElementById('shuomin');
				var ul1 = document.getElementById('ltbMain');
				$('#mbrmRight li:nth-child(1)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
				
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[0].dimg;
					h1.innerHTML = data[0].name;
					pricea.prepend(data[0].num);
					shuomin.innerHTML = data[0].shuomin;
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
				$('#mbrmRight li:nth-child(2)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);				
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[1].dimg;
					h1.innerHTML = data[1].name;
					pricea.prepend(data[1].num);
					shuomin.innerHTML = data[1].shuomin;
					for(var i=2;i<8;i++){
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
				$('#mbrmRight li:nth-child(3)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);				
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[2].dimg;
					h1.innerHTML = data[2].name;
					pricea.prepend(data[2].num);
					shuomin.innerHTML = data[2].shuomin;
					for(var i=3;i<9;i++){
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
				$('#mbrmRight li:nth-child(4)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);				
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[3].dimg;
					h1.innerHTML = data[3].name;
					pricea.prepend(data[3].num);
					shuomin.innerHTML = data[3].shuomin;
					for(var i=4;i<10;i++){
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
				$('#mbrmRight li:nth-child(5)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);				
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[4].dimg;
					h1.innerHTML = data[4].name;
					pricea.prepend(data[4].num);
					shuomin.innerHTML = data[4].shuomin;
					for(var i=5;i<11;i++){
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
				$('#mbrmRight li:nth-child(6)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);				
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[5].dimg;
					h1.innerHTML = data[5].name;
					pricea.prepend(data[5].num);
					shuomin.innerHTML = data[5].shuomin;
					for(var i=6;i<12;i++){
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
				$('#mbrmRight li:nth-child(7)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);					
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[6].dimg;
					h1.innerHTML = data[6].name;
					pricea.prepend(data[6].num);
					shuomin.innerHTML = data[6].shuomin;
					for(var i=0;i<7;i++){
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
				$('#mbrmRight li:nth-child(8)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);				
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[7].dimg;
					h1.innerHTML = data[7].name;
					pricea.prepend(data[7].num);
					shuomin.innerHTML = data[7].shuomin;
					for(var i=2;i<8;i++){
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
				$('#mbrmRight li:nth-child(9)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);				
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[8].dimg;
					h1.innerHTML = data[8].name;
					pricea.prepend(data[8].num);
					shuomin.innerHTML = data[8].shuomin;
					for(var i=1;i<6;i++){
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
				$('#mbrmRight li:nth-child(10)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);				
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[9].dimg;
					h1.innerHTML = data[9].name;
					pricea.prepend(data[9].num);
					shuomin.innerHTML = data[9].shuomin;
					for(var i=6;i<11;i++){
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
				$('#mbrmRight li:nth-child(11)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[10].dimg;
					h1.innerHTML = data[10].name;
					pricea.prepend(data[10].num);
					shuomin.innerHTML = data[10].shuomin;
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
				$('#mbrmRight li:nth-child(12)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[11].dimg;
					h1.innerHTML = data[11].name;
					pricea.prepend(data[11].num);
					shuomin.innerHTML = data[11].shuomin;
					for(var i=3;i<9;i++){
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
			},
			error:function(err){
				return console.log(err);
			}
		});
	})

	$('#sanz').click(function(){
		$('#mbLeft').css('left','-600px');
		$('#mbLeft').animate({left:'0px'},2000);
		$('#mbRight').css('right','-1000px');
		$('#mbRight').animate({right:'0px'},2000);
		$('.mbrTop').show();
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
					}	
				}
				var image = document.getElementById('imga');
				var h1 = document.getElementById('h1');
				var pricea = document.getElementById('pricea');
				var shuomin = document.getElementById('shuomin');
				var ul1 = document.getElementById('ltbMain');
				$('#mbrmRight li:nth-child(1)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);	
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[11].dimg;
					h1.innerHTML = data[11].name;
					pricea.prepend(data[11].num);
					shuomin.innerHTML = data[11].shuomin;
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

			},
			error:function(err){
				return console.log(err);
			}
		})
		
	})

	$('#lih').click(function(){
		$('#mbLeft').css('left','-600px');
		$('#mbLeft').animate({left:'0px'},2000);
		$('#mbRight').css('right','-1000px');
		$('#mbRight').animate({right:'0px'},2000);
		$('.mbrTop').show();
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
					}	
					if(i > data.length-5 && i < data.length-1){
						var li = document.createElement('li');
						var img = document.createElement('img');
						var a = document.createElement('a');
						a.href = '#';
						var b = document.createElement('a');
						b.href = '#';
						var p = document.createElement('p');
						img.src = 'images/'+data[i].ximg;
						$(li).attr('title',data[i].name );
						ul.appendChild(li).appendChild(a).appendChild(img);
						li.appendChild(p).appendChild(b).innerHTML= data[i].name;
					}
				}
				var image = document.getElementById('imga');
				var h1 = document.getElementById('h1');
				var pricea = document.getElementById('pricea');
				var shuomin = document.getElementById('shuomin');
				var ul1 = document.getElementById('ltbMain');
				$('#mbrmRight li:nth-child(1)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);	
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[0].dimg;
					h1.innerHTML = data[0].name;
					pricea.prepend(data[0].num);
					shuomin.innerHTML = data[0].shuomin;
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
				$('#mbrmRight li:nth-child(2)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[1].dimg;
					h1.innerHTML = data[1].name;
					pricea.prepend(data[1].num);
					shuomin.innerHTML = data[1].shuomin;
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
				$('#mbrmRight li:nth-child(3)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);	
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[2].dimg;
					h1.innerHTML = data[2].name;
					pricea.prepend(data[2].num);
					shuomin.innerHTML = data[2].shuomin;
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
				$('#mbrmRight li:nth-child(4)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[3].dimg;
					h1.innerHTML = data[3].name;
					pricea.prepend(data[3].num);
					shuomin.innerHTML = data[3].shuomin;
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
				$('#mbrmRight li:nth-child(5)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);	
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[4].dimg;
					h1.innerHTML = data[4].name;
					pricea.prepend(data[4].num);
					shuomin.innerHTML = data[4].shuomin;
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
				$('#mbrmRight li:nth-child(6)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[9].dimg;
					h1.innerHTML = data[9].name;
					pricea.prepend(data[9].num);
					shuomin.innerHTML = data[9].shuomin;
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
				$('#mbrmRight li:nth-child(7)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);	
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[10].dimg;
					h1.innerHTML = data[10].name;
					pricea.prepend(data[10].num);
					shuomin.innerHTML = data[10].shuomin;
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
			},
			error:function(err){
				return console.log(err);
			}
		})
		
	})
	
	$('#hez').click(function(){
		$('.mbrTop').show();
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
		$('#mbLeft').css('left','-600px');
		$('#mbLeft').animate({left:'0px'},2000);
		$('#mbRight').css('right','-1000px');
		$('#mbRight').animate({right:'0px'},2000);
		$.ajax({
			url:'/product',
			type:'post',
			data:{},
			success:function(data){
				console.log(data);
				for (var i = 0;i<data.length;i++) {
					if(i > data.length-10 && i<data.length-5){
						var li = document.createElement('li');
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
					}	
				}
				var image = document.getElementById('imga');
				var h1 = document.getElementById('h1');
				var pricea = document.getElementById('pricea');
				var shuomin = document.getElementById('shuomin');
				var ul1 = document.getElementById('ltbMain');
				$('#mbrmRight li:nth-child(1)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[3].dimg;
					h1.innerHTML = data[3].name;
					pricea.prepend(data[3].num);
					shuomin.innerHTML = data[3].shuomin;
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
				$('#mbrmRight li:nth-child(2)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);	
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[4].dimg;
					h1.innerHTML = data[4].name;
					pricea.prepend(data[4].num);
					shuomin.innerHTML = data[4].shuomin;
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
				$('#mbrmRight li:nth-child(3)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);	
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[5].dimg;
					h1.innerHTML = data[5].name;
					pricea.prepend(data[5].num);
					shuomin.innerHTML = data[5].shuomin;
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
				$('#mbrmRight li:nth-child(4)').on('click',function(){
					$('#mbLeft').css('left','-600px');
					$('#mbLeft').animate({left:'0px'},2000);
					$('#mbRight').css('right','-1000px');
					$('#mbRight').animate({right:'0px'},2000);
					$('.mbrTop').hide();
					$('.mbrMain').hide();
					$('.mbrBotton').hide();
					$('#wrap').show();	
					image.src = "images/"+data[6].dimg;
					h1.innerHTML = data[6].name;
					pricea.prepend(data[6].num);
					shuomin.innerHTML = data[6].shuomin;
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
	
	
	$(window).scroll(function(){
		if($(window).scrollTop() >= 450){
			$('#mbLeft').animate({
				left:'0px'
			},2000);
			$('#mbRight').animate({
				right:'0px'
			},2000);
		}
	})

})
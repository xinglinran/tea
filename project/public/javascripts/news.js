$(function(){
	var conten = new Array();
	var tit = new Array();
	var ul = $('#ul')[0]
	var n;
	var hany1 = $("#hany1")[0];
	var hany2 = $("#hany2")[0];
	var hany3 = $("#hany3")[0];
	var hany4 = $("#hany4")[0];
	var hany5 = $("#hany5")[0];
	var hany6 = $("#hany6")[0];

	var cont = $("#cont")[0];
	var content = $("#content")[0];
	var cont1 = $("#cont1")[0];
	var cont2 = $("#cont2")[0];
	var cont3 = $("#cont3")[0];
	var cont0 = $("#cont0")[0];
	var cont5 = $("#cont5")[0];

	$('#hanye')[0].onclick=function(){
		funt();
		$(hany1).show();
		$(hany2).show();
		$(hany3).hide();
		$(hany4).show();
		$(hany5).hide();
		$(hany6).show();
		$(cont2).hide();
		$(cont3).hide();
		$(cont0).hide();
		$(cont5).show();
	}
	$(hany4)[0].onclick=function(){
		funt();
		$(hany1).show();
		$(hany2).show();
		$(hany3).hide();
		$(hany4).show();
		$(hany5).hide();
		$(hany6).show();
		$(cont2).hide();
		$(cont3).hide();
		$(cont0).hide();
		$(cont5).show();
	}
	$(hany1)[0].onclick=function(){
		funt();
		$(hany1).show();
		$(hany2).show();
		$(hany3).hide();
		$(hany4).show();
		$(hany5).hide();
		$(hany6).show();
		$(cont2).hide();
		$(cont3).hide();
		$(cont0).hide();
		$(cont5).show();
	}
	$('#xinw')[0].onclick=function(){
		funt();
		$(hany1).hide();
		$(cont3).hide();
		$(hany2).hide();
		$(hany3).show();
		$(hany4).hide();
		$(hany5).show();
		$(hany6).hide();
		$(cont0).hide();
		$(cont5).show();
	}
	function fun(){
		$(cont0).animate({
			left: "800px",
			opacity: '0'
		},0);
		$(cont).animate({
			left: "-300px",
			opacity: '0'
		},0);
		$(cont0).animate({
			left: "0px",
			opacity: '1'
		},1200);
		$(cont).animate({
			left: "0px",
			opacity: '1'
		},1200);
		var nul = this.innerHTML;
		$(hany1).show();
		$(hany2).show();
		$(cont2).show();
		$(cont3).text(nul);
		$(cont3).show();
		$(hany3).hide();
		$(hany4).show();
		$(cont5).hide();
		$(cont0).show();
		$(cont1).text(nul);
		content.innerHTML='';
		for (var j = 0; j < tit.length; j++) {
				if(tit[j]==nul){
					n = j;
					break;
				}
		}
		for (var i = 0; i < conten[n].length; i++) {
				// console.log(conten[n][i]);
				var p = document.createElement('p');
				p.innerHTML=conten[n][i];
				content.appendChild(p);
		}
		}
	window.onload=function(){
		funt();
		$(hany1).hide();
		$(hany2).hide();
		$(cont2).hide();
		$(cont3).hide();
		$.ajax({
				url:'/news',
				type:'post',
				data:{phone:''},
				// async:'true',
				success:function(data){
					// console.log(data);
					for (var i = 0; i < data.length; i++) {
						conten[i] = data[i].content.split('&');
						tit[i] = data[i].title
						var li = document.createElement('li');
						var img = document.createElement('img');
						var a = document.createElement('a');
						var span = document.createElement('span');
						img.src="images/news5.png";
						a.href="javascript:void(0)";
						a.onclick =fun;
						a.innerHTML=data[i].title;
						span.innerHTML=data[i].time.slice(0,10);
						li.appendChild(img);
						li.appendChild(a);
						li.appendChild(span);
						ul.appendChild(li);
					}
					// console.log(conten);
				},
				error:function(err){
					return console.log(err);
				}
			});
	};
	function funt(){
		$(cont).animate({
			left: "-300px",
			opacity: '0'
		},0);
		$(cont5).animate({
			left: "800px",
			opacity: '0'
		},0);
		$(cont).animate({
			left: "0px",
			opacity: '1'
		},1200);
		$(cont5).animate({
			left: "0px",
			opacity: '1'
		},1200);
	}
})
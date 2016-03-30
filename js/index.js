
function adjustPosition(){
	var mainPic=$('.mainPic');
	var wordBlock=$('.wordBlock');
	var terminalHeight;
	var terminalWidth;
	var maxWidth=document.documentElement.clientWidth;//当前屏幕宽度
	var maxHeight=document.documentElement.clientHeight;//当前屏幕高度
	terminalWidth=maxWidth;
	terminalHeight=maxHeight*0.18;
	mainPicHeight=maxHeight*0.39;
	//console.log(terminalWidth);
	$(mainPic).css({
		width:terminalWidth,
		height:mainPicHeight,
	});
	$(wordBlock[0]).css({
		height:terminalHeight,
		top:maxHeight*0.54-20
	});
	$(wordBlock[1]).css({
		height:terminalHeight,
		top:maxHeight*0.54+terminalHeight+5-20
	});
	$('.departLine1').css({
		top:maxHeight*0.54-20,
		right:0
	});
	$('.departLine2').css({
		top:maxHeight*0.54+terminalHeight+5-20	
	});
	
	// 第二屏
	$('.upBlock').css({
		width:0.9*maxWidth,
		height:0.5*maxHeight,
		top:0.05*maxHeight,
		left:0.1*maxWidth/2
	});
	$('.ftBlock').css({
		width:0.9*maxWidth,
		height:0.35*maxHeight,
		top:0.57*maxHeight,
		left:0.1*maxWidth/2
	});
	var lineHeight=$('.desWordB').height();
	$('.desWordB').css('line-height',lineHeight+'px');
	$('.desWordL').css('line-height',lineHeight+'px');
	//第四屏

	$('#godv_content').css({
		left:(maxWidth-$('#godv_content').width())/2
	});
};

//动画
function animations(){
	//第二屏第一页
	var fadeWord=$('.fadeWord');
	var ubrf_word=$('#ubrf_word');
	var ubru_word=$('#ubru_word');
	var x=setInterval(function(){
		if($(ubrf_word).css('display')=='none'){
			$(ubrf_word).fadeIn('slow');
		}else{
			$(ubrf_word).fadeOut('slow');
		}
	},3000);
	var y=setInterval(function(){
		if($(ubru_word).css('display')=='none'){
			$(ubru_word).fadeIn('slow');
		}else{
			$(ubru_word).fadeOut('slow');
		}
	},3000);
	//console.log(ubru_word);
	//第二屏第三页
	var curId=$('#lpd_bot');
	var colorArr=['#34ECBA','#3987EA','#FC8051','#FF322E'];
	var xcolor=setInterval(function(){
		var i=Math.round(Math.random()*10%4);
		$(curId).css('backgroundColor',colorArr[i]);
		
		//console.log(i);
	},1500);

	//第三屏第三页
	var omg_div=$('.omg_div');
	var omg_circleLi01_img=$('#omg_circleLi01 img');
	var omg_circleLi02_img=$('#omg_circleLi02 img');
	var omg_circleLi03_img=$('#omg_circleLi03 img');
	var omgArr=[omg_circleLi01_img,omg_circleLi02_img,omg_circleLi03_img];
	var countLisener=0;

	var xword=setInterval(function(){
		if(countLisener>2){
				countLisener=0;
			}
		if($(omg_div[countLisener]).css('display')=='none'){
			$(omgArr[countLisener]).fadeOut();
			$(omg_div[countLisener]).fadeIn();
		}else{
			$(omg_div[countLisener]).fadeOut();
			$(omgArr[countLisener]).fadeIn();
		}
		countLisener++;
	},1500);
}

//绑定事件

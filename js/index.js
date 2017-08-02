//轮播图
var mySwiper=new Swiper(".swiper-container",{
	loop:true,
	autoplay:2000,
	autoplayDisableOnInteraction:false,
	pagination:".swiper-pagination",
	paginationClickable:true,
});
//城市的下拉菜单
var cont=0
$(".left").click(function(){
	if(cont%2==0){
		$("#city").css("display","block");
		$(".left img").css("transform","rotate(180deg)")
	}else{
		$("#city").css("display","none")
		$(".left img").css("transform","rotate(360deg)")
	}
	cont++;
});
$("#city li").bind({
	click:function(){
		var temp=$(".left span").html();
		$(".left span").html($(this).html());
		$(this).html(temp);
	},
	// mouseover:function(){
	// 	$(this).css("background","lightblue");
	// }
});
//定时器
var timer;
function show(){
	var enddate=new Date("2017-10-01 00:00:00");
	var nowdate=new Date();
	var endtime=enddate.getTime();
	var nowtime=nowdate.getTime();
	var time=(endtime-nowtime)/1000;
	if(time<0){
		document.getElementById("clock").innerHTML="时间到了！！！"
	}else{
		var day=Math.floor(time/(60*60*24));
		var hour=Math.floor(time/60/60%24);
		var min=Math.floor(time/60%60);
		var second=Math.floor(time%60);
		document.getElementById("clock").innerHTML="距离开始|"+day+"天"+hour+"时"+min+"分"+second+"秒";
	}
}
window.onload=function(){
	timer=setInterval(show,1000);
}
//显示全部
$("#all").click(function(){
	if($(".hidden").is(":hidden") ){
		$(".hidden").show();
		$(this).html("隐藏全部");
	}else{
		$(".hidden").hide();
		$(this).html("查看全部团购");
	}
});


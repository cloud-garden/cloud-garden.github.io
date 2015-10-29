$(function(){
	var sendData = {user:"user1"};
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getCurrentState", sendData, function(json){
		var date = new Date(parseInt(json.date));
		console.log(date);
		$("#date").text((date.getFullYear())+"年"+(date.getMonth()+1)+"月"+(date.getDate())+"日");
		$("#temperature").text(json.temp);
		$("#humidity").text(json.humid);
	});
});

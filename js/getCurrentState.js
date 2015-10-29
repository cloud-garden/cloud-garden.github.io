$(function(){
	var sendData = {user:"user1"};
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getCurrentState", sendData, function(json){
		var date = new Date(parseInt(json.date));
		console.log(date);
		$("#date").text((date.getFullYear())+"年"+(date.getMonth()+1)+"月"+(date.getDate())+"日");
		$("#temperature").text(json.temp);
		$("#humidity").text(json.humid);
		updateCharacter(json.temp, json.humid);
	});
});

function updateCharacter(temp, hum) {
	var message = Math.random() > 0.5 ? "今日はいい天気！<br>気持ちいいっちゃ！" : "今日も頑張ろっちゃ！";
	if(temp > 28) {
		message = "あっついね．<br>氷を食べたいっちゃ！";
	} else if(temp < 14) {
		message = "寒い〜。<br>元気が無いっちゃ・・・";
	}
	if(hum < 30) {
		message = "乾燥してるよ！<br>喉が渇いたっちゃ〜。";
	}
	$("#character-comment p").html(message);
}
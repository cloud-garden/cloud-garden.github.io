$(function(){
	var sendData = {user:"user1"};
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getCurrentState", sendData, function(json){
		var date = new Date(parseInt(json.date));
		console.log(date);
		$("#photo-view").css({"background-image":"url(http://54.199.139.148/cloud_garden_server/api/photo/"+json.photoId+".png)"})
		$("#date").text((date.getFullYear())+"年"+(date.getMonth()+1)+"月"+(date.getDate())+"日");
		$("#temperature").text(json.temp);
		$("#humidity").text(json.humid);
		$("#photo-view input").val(json.date);
		loadTodaySchedule(json.date);
		updateCharacter(json.temp, json.humid);
	});
});


function loadTodaySchedule(millisec) {
	console.log("loadTodaySchedule(getCurrentState)");
	var sendData = {user:"keita", date:millisec};
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getScheduleList", sendData, function(json) {
		console.log(json);
		if(json.schedule.length > 0) {
			$.each(json.schedule, function(index, item) {
				var date = new Date(parseInt(item.date));
				$("#log-content ul").append("<li>" + (date.getFullYear()) + "年"+(date.getMonth()+1)+"月"+(date.getDate())+"日 "+(date.getHours())+":"+(date.getMinutes())+"</li>");
			});			
		} else {
			var msg = ((new Date(parseInt(millisec))).getDate())%2 == 0 ? "今日は水がもらえなかったよ。<br>おなかすいたよ。" : "今日も水やりがなかったよ。。。<br>ご主人様は忙しいのかなぁ？";
			$("#log-content ul").append("<li>"+msg+"</li>");
		}
	});
}

function updateCharacter(temp, hum) {

	//debug mode
	if(getQuerystring("d") == "y") {
		temp = 40*Math.random();
		hum = 60*Math.random();
		$("#temperature").text(Math.floor(temp));
		$("#humidity").text(Math.floor(hum));
	}

	var message = Math.random() > 0.5 ? "今日はいい天気！<br>気持ちいいっちゃ！" : "今日も頑張ろっちゃ！";
	var imgURL = "default";
	if(temp > 28) {
		message = "あっついね．<br>氷を食べたいっちゃ！";
		imgURL = "surprise";
	} else if(temp < 14) {
		message = "寒い〜。<br>元気が無いっちゃ・・・";
		imgURL = "sad";
	}
	if(hum < 30) {
		message = "乾燥してるよ！<br>喉が渇いたっちゃ〜。";
		imgURL = "angry";
	}
	$("#character-comment p").html(message);
  $("#character-img").css({"background-image": "url(img/character/character-"+imgURL+".png)"});
	$("#log-content ul").css({"background-image":"url(img/character/character-"+imgURL+".png)"});

}

function getQuerystring(key, default_)  {
   if (default_==null) default_="";
   key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
   var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
   var qs = regex.exec(window.location.href);
   if(qs == null)
    return default_;
   else
    return qs[1];
}
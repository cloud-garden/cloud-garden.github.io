var debugCounter = 0;
//デバッグ用
var prevCounter = 0;
//遡った回数

$(function() {
	var date = new Date();
	var millisec = date.getTime();
	var sendData = {
		user : "keita",
		date : (millisec - 86400000)
	};
	// var sendData = {user:"user1", date:(millisec)};
	setTimeout(function(data) {
		loadActiveScheduleList(data, 0);
	}, 100, sendData);
});

function loadActiveScheduleList(sendData, zIndex) {
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getActiveScheduleList", sendData, function(json) {
		activeScheduleList(json.date);
	});
}

function createHtml(json, zIndex) {
	var html = "<div class=\"logconts1\" id=\"logconts1-" + json.date + "\"></div>";
	return html;
}

function activeScheduleList(millisec) {
	var sendData = {
		user : "keita"
	};
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getActiveScheduleList", sendData, function(json) {
		 //console.log(json);
		$.each(json.schedule, function(index, item) {
			// var date = item.date;
			//console.log(index + " : "+ item);
			var date = new Date(parseInt(item.date));
			$("#logconts1 ul").append("<li>" + (date.getFullYear()) + "年" + (date.getMonth() + 1) + "月" + (date.getDate()) + "日 " + (date.getHours()) + ":" + (date.getMinutes()) + '<a href="#" id="delete-schedule">削除</a>' + "</li>");
			// <a href="#" id="delete-schedule">DELETE</a>
			// $("#log-content-"+millisec).append("")
		});
	});
}
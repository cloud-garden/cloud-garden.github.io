var debugCounter = 0; //デバッグ用
var prevCounter = 0; //遡った回数

$(function(){
	var date = new Date();
	var millisec = date.getTime();
		var sendData = {user:"keita", date:(millisec - 86400000)};
		// var sendData = {user:"user1", date:(millisec)};
		setTimeout(function(data) { loadPastScheduleList(data, 0); }, 100, sendData);
});

function loadPastScheduleList(sendData, zIndex) {
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getPastScheduleList", sendData, function(json){
			pastScheduleList(json.date);
		});
}

function createHtml(json, zIndex) {
	var html =
		"<div class=\"logconts2\" id=\"logconts2-"+json.date+"\"></div>";
	return html;
}

function pastScheduleList(millisec) {
	var sendData = {user:"keita"};
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getPastScheduleList", sendData, function(json) {
		// console.log(json);
		$.each(json.schedule, function(index, item) {
			// var date = item.date;
			// console.log(index + " : "+ item);
			var date = new Date(parseInt(item.date));
			$("#logconts2 ul").append("<li>" + (date.getFullYear()) + "年"+(date.getMonth()+1)+"月"+(date.getDate())+"日 "+(date.getHours())+":"+(date.getMinutes())+"</li>");
			// $("#log-content-"+millisec).append("")
		});
	});
}
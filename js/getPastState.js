var debugCounter = 0; //デバッグ用
var prevCounter = 0; //遡った回数

$(function(){
	var date = new Date();
	var millisec = date.getTime();
	for(var i=0; i<5; i++) {
		var sendData = {user:"user1", date:(millisec - 86400000*i)};
		// var sendData = {user:"user1", date:(millisec)};
		console.log(new Date(sendData.date));
		setTimeout(function(data) { loadPrevState(data, 0); }, 100*i, sendData);
	}

	$("#seek-prev").click(function(){
		if(prevCounter == 0) { $("#seek-next").css({"visibility":"visible"}); }
		prevCounter++;
		$("#photo-view:first").remove();
		$("#photo-view:first").css({"z-index":2});
		var sendData = {user:"user1", date:$("#photo-view:first input").val() - 86400000*4};
		console.log($("#photo-view:first input").val());
		// var sendData = {user:"user1", date:(parseInt($("#photo-view:first input").val()) + 86400000 + 86400000 - 1000*debugCounter)}; debugCounter++;
		console.log("prev: "+sendData.date + ": "+ new Date(parseInt(sendData.date)));
		loadPrevState(sendData, 0);
		updateDate();
		return false;
	});
	$("#seek-next").click(function(){
		prevCounter--;
		if(prevCounter == 0) { $("#seek-next").css({"visibility":"hidden"}); }
		if(prevCounter >= 0) {
			var today = new Date();
			var todayStart = new Date((today.getFullYear())+"/"+(today.getMonth()+1)+"/"+(today.getDate()));
			// console.log("judge: "+todayStart);
			// if($("#photo-view:first input").val() < todayStart.getTime()) {
				// console.log("pass!");
				// $("#photo-view:last").remove();
				$("#photo-view:first").css({"z-index":0});
				var sendData = {user:"user1", date:parseInt($("#photo-view:first input").val()) };
				// console.log("val:"+$("#photo-view:first input").val());
				// var sendData = {user:"user1", date:(parseInt($("#photo-view:first input").val()) - 86400000 + 1000*debugCounter)}; debugCounter++;
				// console.log("next: "+sendData.date + ": "+ new Date(parseInt(sendData.date)));
				loadNextState(sendData, 2);
			// }
		}
		updateDate();
		return false;
	});
});

function loadPrevState(sendData, zIndex) {
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getPastPreviousState", sendData, function(json){
			var insertHtml = createHtml(json, zIndex);
			$("#photo-view-box").append(insertHtml);
			loadSchedule(json.date);
		});
}

function loadNextState(sendData, zIndex) {
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getPastNextState", sendData, function(json){
			var insertHtml = createHtml(json, zIndex);
			$("#photo-view-box").prepend(insertHtml);
			loadSchedule(json.date);
			// console.log(insertHtml);
		});
}

function createHtml(json, zIndex) {
	var html =
			// "<div class=\"photo-view\" id=\"photo-view\" style=\"background-image:url('http://54.199.139.148/cloud_garden_server/api/photo/"+json.photoId+".png');\">"+
				"<div class=\"photo-view\" data-id=\""+json.date+"\" id=\"photo-view\" style=\"background-image:url('img/home/dummy.jpg'); z-index: "+zIndex+";\">"+
					"<div class=\"box home-temp\">"+
						"<div class=\"float-status\">"+
							"<span>"+json.temp+"</span>"+
						"</div>"+
					"</div>"+
					"<div class=\"box home-hum\">"+
						"<div class=\"float-status\">"+
							"<span>"+json.humid+"</span>"+
						"</div>"+
					"</div>"+
					"date:"+(new Date(parseInt(json.date)))+
					"<input type=\"hidden\" value=\""+json.date+"\">"+
					"<div class=\"log-content\" id=\"log-content-"+json.date+"\"></div>"+
				"</div>";

		// console.log(html);
	return html;
}

function updateDate() {
	var date = new Date(parseInt($("#photo-view:first input").val()));
	$("#date").text((date.getFullYear())+"年"+(date.getMonth()+1)+"月"+(date.getDate())+"日");
}

function loadSchedule(millisec) {
	var sendData = {user:"keita", date:millisec};
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getScheduleList", sendData, function(json) {
		// console.log(json);
		$.each(json.schedule, function(index, item) {
			// var date = item.date;
			// console.log(index + " : "+ item);
			var date = new Date(parseInt(item.date));
			$("#log-content ul").append("<li>" + (date.getFullYear()) + "年"+(date.getMonth()+1)+"月"+(date.getDate())+"日 "+(date.getHours())+":"+(date.getMinutes())+"</li>");
			// $("#log-content-"+millisec).append("")
		});
	});
}
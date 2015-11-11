var debugCounter = 0; //デバッグ用
var prevCounter = 0; //遡った回数
var ONE_DAY_MILLISEC = 86400000;

$(function(){
	var date = new Date();
	var millisec = date.getTime();

	$("#seek-prev").click(function(){
		if(prevCounter == 0) { $("#seek-next").css({"visibility":"visible"}); }
		prevCounter++;
		var sendData = {user:"keita", date:$("#photo-view input").val()};
		console.log(sendData.date);
		loadPrevState(sendData);
		return false;
	});
	$("#seek-next").click(function(){
		prevCounter--;
		if(prevCounter == 0) { $("#seek-next").css({"visibility":"hidden"}); }
		var sendData = {user:"keita", date:parseInt($("#photo-view input").val()) };
		console.log(sendData.date);
		loadNextState(sendData);
		return false;
	});
});

function loadPrevState(sendData) {
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getPastPreviousState", sendData, function(json){
			// console.log(new Date(parseInt(json.date)));
			loadSchedule(json.date);
			updatePhotoBox(json);
		});
}

function loadNextState(sendData) {
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getPastNextState", sendData, function(json){
			loadSchedule(json.date);
			updatePhotoBox(json);
		});
}


function updatePhotoBox(json) {
	$("#photo-view").css({"background-image":"url(http://54.199.139.148/cloud_garden_server/api/photo/"+json.photoId+".png)"})
	$("#temperature").text(json.temp);
	$("#himidity").text(json.humid);
	$("#photo-view input").val(json.date);
	var date = new Date(parseInt(json.date));
	$("#date").text((date.getFullYear())+"年"+(date.getMonth()+1)+"月"+(date.getDate())+"日");
}

function loadSchedule(millisec) {
	var sendData = {user:"keita", date:millisec};
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getScheduleList", sendData, function(json) {
		$.each(json.schedule, function(index, item) {
			var date = new Date(parseInt(item.date));
			$("#log-content ul").append("<li>" + (date.getFullYear()) + "年"+(date.getMonth()+1)+"月"+(date.getDate())+"日 "+(date.getHours())+":"+(date.getMinutes())+"</li>");
		});
	});
}


// function createHtml(json, zIndex) {
// 	var html =
// 			"<div class=\"photo-view\" id=\"photo-view\" style=\"background-image:url('http://54.199.139.148/cloud_garden_server/api/photo/"+json.photoId+".png');  z-index: "+zIndex+";\">"+
// 				// "<div class=\"photo-view\" data-id=\""+json.date+"\" id=\"photo-view\" style=\"background-image:url('img/home/dummy.jpg'); z-index: "+zIndex+";\">"+
// 					"<div class=\"box home-temp\">"+
// 						"<div class=\"float-status\">"+
// 							"<span>"+json.temp+"</span>"+
// 						"</div>"+
// 					"</div>"+
// 					"<div class=\"box home-hum\">"+
// 						"<div class=\"float-status\">"+
// 							"<span>"+json.humid+"</span>"+
// 						"</div>"+
// 					"</div>"+
// 					"date:"+(new Date(parseInt(json.date)))+
// 					"<input type=\"hidden\" value=\""+json.date+"\">"+
// 					"<div class=\"log-content\" id=\"log-content-"+json.date+"\"></div>"+
// 				"</div>";

// 		// console.log(html);
// 	return html;
// }
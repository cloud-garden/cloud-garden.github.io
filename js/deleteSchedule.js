$(function() {
$("body ul").on("click","a",function(){
	var scheduleId = $(this).attr('id');
  	var sendData = {id:scheduleId};
  	console.log(sendData);
 	$.getJSON("http://54.199.139.148/cloud_garden_server/api/deleteSchedule", sendData, function(json){
			alert("削除しました");
		});
    return false;
});
});
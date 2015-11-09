$(function() {
$("body ul").on("click","a",function(){
	var scheduleId = $(this).attr('id');
  	var sendData = {id:scheduleId};
 	$.getJSON("http://54.199.139.148/cloud_garden_server/api/deleteSchedule", sendData, function(json){
			window.location.reload(true);
			alert("削除しました");
		});
    return false;
});
});
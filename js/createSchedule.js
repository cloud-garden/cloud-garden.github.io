$(function() {
  $("#create-schedule").click(function(){
  	var dateStr = $("#feed-date").val();
  	var timeStr = $("#feed-time").val();
  	var routine = $("#feed-routine").prop('checked');

  	var date = new Date(dateStr+"T"+timeStr+":00+0900");
  	var sendData = {date:date.getTime(), user:"keita", isRoutine:routine};
  	$.getJSON("http://54.199.139.148/cloud_garden_server/api/createSchedule", sendData, function(json){
			console.log(json);
		});
  });
});
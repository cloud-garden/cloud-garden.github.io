$(function() {
  $("#delete-schedule").click(function(){
    var scheduleId = "56273577328334ca2e829de6";

  	var sendData = {id:scheduleId};
  	$.getJSON("http://54.199.139.148/cloud_garden_server/api/deleteSchedule", sendData, function(json){
			console.log(json);
		});
    return false;
  });
});
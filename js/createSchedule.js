$(function() {
  $("#create-schedule").click(function(){
  	var dateStr = $("#datepicker").val();
  	var timeStr = $("#feed-time").val();
  	var routine = $("#feed-routine").prop('checked');
	//console.log(dateStr);
	//console.log(timeStr);
	//console.log(routine);
	//var date = new Date(dateStr+"T"+timeStr+":00+0900");
  	var date = Date.parse(dateStr+" "+timeStr+":00");
  	var sendData = {date:date, user:"keita", isRoutine:routine};
  	var now = new Date();
  	if(date > now.getTime()){
 	$.getJSON("http://54.199.139.148/cloud_garden_server/api/createSchedule", sendData, function(json){
			window.location.reload(true);
			alert("登録完了しました");
		});
    return false;
    }else{
    	alert("日付が過去です");
    }
  });
});
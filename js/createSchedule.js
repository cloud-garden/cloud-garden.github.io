$(function() {
	var d = $('#dialog1');
	d.dialog({
		autoOpen: false,
		modal: true,
		buttons:{
			'戻る' : function(){
				$(this).dialog('close');
				window.location.reload(true);
			}
		}
	});

	var e = $('#dialog2');
	e.dialog({
		modal: true,
		autoOpen: false,
		buttons:{
			'戻る' : function(){
		$(this).dialog('close');
			}
		}
	});

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
			d.dialog('open');
		});
    return false;
    }else{
    	e.dialog('open');
    }
  });
});
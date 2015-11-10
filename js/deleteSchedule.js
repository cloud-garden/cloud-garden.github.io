$(function() {
		var g = $('#dialog3');
	g.dialog({
		autoOpen: false,
		modal: true,
		buttons:{
			'戻る' : function(){
				$(this).dialog('close');
				window.location.reload(true);
			}
		}
	});
$("body div.page1 ul").on("click","a",function(){
	var scheduleId = $(this).attr('id');
  	var sendData = {id:scheduleId};
 	$.getJSON("http://54.199.139.148/cloud_garden_server/api/deleteSchedule", sendData, function(json){
			g.dialog('open');
		});
    return false;
});
});
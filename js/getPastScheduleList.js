$(function(){
	var sendData = {user:"user1"};
	$.getJSON("http://54.199.139.148/cloud_garden_server/api/getPastScheduleList", sendData, function(json){
		var arry = new Array([]);
		for (var i = 0; i < arry.length; i++){
			//
			date = new date(Number(schedule[i].date));
			$("#date").text((date.getFullYear())+"年"+(date.getMonth()+1)+"月"+(date.getDate())+"日");

			var Botan = document.createElement("input");
			var create = document.getElementById("activeschedule");
			create.appendChild(Botan);
			Botan.appendChild(past);
			Botan.type = "button";
			Botan.value = "ボタン";
			Botan.id = "BotanID";
			Botan.onclick = "delet";
		}
	});
});

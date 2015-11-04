/**
 * タブメニューの動的処理
 */

$("#active").click(function() {
	$("#activeschedule").show();
	$("#pastschedule").hide();
	$("li.active").css('background','#CD853F');
	$("li.past").css('background','#8C775F');
});

$("#past").click(function() {
	$("#activeschedule").hide();
	$("#pastschedule").show();
	$("li.past").css('background','#CD853F');
	$("li.active").css('background','#8C775F');
});


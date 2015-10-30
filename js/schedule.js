/**
 * タブメニューの動的処理
 */




$("#active").click(function() {
	$("#activeschedule").show();
	$("#pastschedule").hide();
});

$("#past").click(function() {
	$("#activeschedule").hide();
	$("#pastschedule").show();
});


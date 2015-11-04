/**
 * 現在の日時表示
 */

document.getElementById("view_time").innerHTML = getNow();

function getNow(){
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1;
	var day = now.getDate();

	var s = year + "年" + mon + "月" + day + "日";
	return s;
}

/**
 * カレンダー表示
 */

$(function() {
    $.datepicker.setDefaults( $.datepicker.regional[ "ja" ] );
    $( "#datepicker" ).datepicker();
    $("#datepicker").datepicker("option","showOn",'button');
  });
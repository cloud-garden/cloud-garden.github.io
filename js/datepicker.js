/**
 * カレンダー表示
 */

$(function() {
    $.datepicker.setDefaults( $.datepicker.regional[ "ja" ] );
    $( "#datepicker" ).datepicker();
    $("#datepicker").datepicker("option","showOn",'button');
    //$("#datepicker").datepicker("option","buttonImageOnly",true);
    //$("#datepicker").datepicker("option","buttonImage",'./img/recipe/calender.png');
  });
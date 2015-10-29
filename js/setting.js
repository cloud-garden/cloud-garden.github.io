var isMobile;
var wh = $(window).height();

$(function(){
    checkIsMobile();
    if(isMobile) {
        $("#main-content").css({"height": wh-150});
    }

    function checkIsMobile() {
        isMobile = ($(window).width() < 600);
    }
});

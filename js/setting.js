var isMobile;
var wh = $(window).height();

$(function(){
    checkIsMobile();
    if(isMobile) {
        $("#main-content").css({"height": wh-130});
    }

    function checkIsMobile() {
        isMobile = ($(window).width() < 600);
    }
});

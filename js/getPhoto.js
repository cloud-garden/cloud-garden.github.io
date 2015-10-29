var isMobile;
var wh = $(window).height();

$(function(){
    checkIsMobile();
    if(isMobile) {
        $("#main-content").css({"background-image": "url(img/home/dummy.jpg)"});
    }

    function checkIsMobile() {
        isMobile = ($(window).width() < 600);
    }
});

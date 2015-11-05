var isMobile;
var wh = $(window).height();

$(function(){
    checkIsMobile();
    if(isMobile) {
        $("#photo-view").css({"background-image": "url(img/home/dummy.jpg)"});
    }

    function checkIsMobile() {
        isMobile = ($(window).width() < 600);
    }
});

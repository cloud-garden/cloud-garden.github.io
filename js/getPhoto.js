var isMobile;
var wh = $(window).height();

$(function(){
    checkIsMobile();
    if(isMobile) {
        $("#main-content").css({"background-image": "url(img/home/dummy.jpg)"});
        $("#character-img").css({"background-image": "url(img/home/character.png)"});
    }

    function checkIsMobile() {
        isMobile = ($(window).width() < 600);
    }
});

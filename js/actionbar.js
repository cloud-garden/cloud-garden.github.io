var isMobile;
var isMenuShown = false;

$(function(){
    
    $(window).resize(function() {
        checkIsMobile();
        if(!isMobile) {
            $("nav#actionbar-menu").show();
        } else {
            $("nav#actionbar-menu").hide();
        }
    });

    $("a#actionbar-menu-btn").click(function() {
        isMenuShown = !isMenuShown;
        $("nav#actionbar-menu").toggle();
        return false;
    });

    $("html").click(function() {
        if(isMenuShown) {
            isMenuShown = false;
            $("nav#actionbar-menu").hide();
        }
    });

    function checkIsMobile() {
        isMobile = ($(window).width() < 600);
    }

});

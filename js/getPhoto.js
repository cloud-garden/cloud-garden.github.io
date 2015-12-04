var isMobile;
var wh = $(window).height();

$(function(){

	setTimeout(function(){
     getPhoto();
  },1000);

  function checkIsMobile() {
      isMobile = ($(window).width() < 600);
  }

  function getPhoto() {
    checkIsMobile();
    if(isMobile) {
        $("#photo-view").css({"background-image": "url(img/home/dummy.jpg)"});
    }
  }

});

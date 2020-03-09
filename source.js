
// function myFunction(){
//     document.footer.style.backgroundColor="black";  
//  }
 // When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar navbar-fixed-top").style.top = "0";
  } else {
    document.getElementById("navbar navbar-fixed-top").style.top = "-50px";
  }
}
// scroll functions
$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $('.navbar').addClass("navbar-hide");
    } else {
        $('.navbar').removeClass("navbar-hide");
    }

});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar-text").style.top = "0";
  } else {
    document.getElementsByClassName("navbar-text").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();        
        if(topOfWindow + windowHeight - 500 > thisPos ) {
            $(this).addClass("fadeIn");
        }
         
        // if($(window).scrollTop() + $(window).height() > $(document).height() - 300){
        //     $(this).addClass("fadeOut");
        // }
        
        
    });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
        showImages('.logos');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
        showImages('.logos');
});

// $(window).scroll(function() {
//     $(".logos").css({
//     'opacity' : 1-(($(this).scrollTop())/500)
//     });          
// });
 

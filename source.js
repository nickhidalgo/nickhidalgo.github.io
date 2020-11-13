
function scrollWin() {
    window.scrollTo(0, 700, "smooth")
    //     left: 0,
    //     top: 700,
    //     behavior: 'smooth'
    // });
}





// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar navbar-fixed-top").style.top = "0";
    } else {
        document.getElementById("navbar navbar-fixed-top").style.top = "-50px";
    }
}
// scroll functions
$(window).scroll(function (e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $('.navbar').addClass("navbar-hide");
    } else {
        $('.navbar').removeClass("navbar-hide");
    }

});
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("navbar-text").style.top = "0";
    } else {
        document.getElementsByClassName("navbar-text").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}


function showImages(el) {
    var windowHeight = jQuery(window).height();
    $(el).each(function () {
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 500 > thisPos) {
            $(this).addClass("fadeIn");
        }

        // if($(window).scrollTop() + $(window).height() > $(document).height() - 300){
        //     $(this).addClass("fadeOut");
        // }


    });
}

function showText(el) {
    var windowHeight = jQuery(window).height();
    $(el).each(function () {
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 400 > thisPos) {
            $(this).addClass("fadeIn");
        }
    });
}

function showWorkText(el) {
    var windowHeight = jQuery(window).height();
    $(el).each(function () {
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 300 > thisPos) {
            $(this).addClass("fadeIn");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
// $(document).ready(function () {
//     showImages('.middle');
// });
$(document).ready(function () {
    showText('.about');
});
$(document).ready(function () {
    showWorkText('.work-title');
});
// if the image in the window of browser when scrolling the page, show that image
// $(window).scroll(function () {
//     showImages('.middle');
// });
$(window).scroll(function () {
    showText('.about');
});
$(window).scroll(function () {
    showWorkText('.work-title');
});

// $(window).scroll(function() {
//     $(".logos").css({
//     'opacity' : 1-(($(this).scrollTop())/500)
//     });          
// });

// const element =  document.querySelector('.my-element')
// element.classList.add('animated', 'bounceOutLeft')

// element.addEventListener('animationend', function() { doSomething() })

// function animateCSS(element, animationName, callback) {
//     const node = document.querySelector(element)
//     node.classList.add('animated', animationName)

//     function handleAnimationEnd() {
//         node.classList.remove('animated', animationName)
//         node.removeEventListener('animationend', handleAnimationEnd)

//         if (typeof callback === 'function') callback()
//     }

//     node.addEventListener('animationend', handleAnimationEnd)
// }


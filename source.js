
function myFunction(){
    document.footer.style.backgroundColor="black";  
 }
//  // When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar navbar-fixed-top").style.top = "0";
//   } else {
//     document.getElementById("navbar navbar-fixed-top").style.top = "-50px";
//   }
// }
// // scroll functions
// $(window).scroll(function(e) {

//     // add/remove class to navbar when scrolling to hide/show
//     var scroll = $(window).scrollTop();
//     if (scroll >= 150) {
//         $('.navbar').addClass("navbar-hide");
//     } else {
//         $('.navbar').removeClass("navbar-hide");
//     }

// });
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
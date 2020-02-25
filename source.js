$(document).ready(function(){
    $("button").click(function(){
        $("p").toggle();
    });
});
$(document).ready(function () {
    $('div.hidden').fadeIn(1000).removeClass('hidden');
});
$(document).ready(() => {
	$('.selected-element').addClass('animate');
});


function myFunction() {
    var element = document.header;
    element.classList.toggle("dark-mode");
 }


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky");
    }
}

//============================================================================//

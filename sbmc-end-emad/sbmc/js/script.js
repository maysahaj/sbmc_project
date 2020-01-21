$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    items: 1,
    responsiveClass: true,
    nav: true,
    navText: [
    "<i  class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        320: {
            items: 1
        },
        481: {
            items: 3
        },
        991: {
            items: 4
        },
        1025: {
            items: 5
        }
    }
});
var navList = document.getElementById("nav-lists");
function Show() {
navList.classList.add("_Menus-show");
}

function Hide(){
navList.classList.remove("_Menus-show");
}
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
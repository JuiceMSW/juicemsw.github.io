window.onunload = function(){ window.scrollTo(0,0); }

function scrollToDiv(div) {
    $('html,body').animate({
        scrollTop: $("#" + div).offset().top - 50},
        'fast');
}
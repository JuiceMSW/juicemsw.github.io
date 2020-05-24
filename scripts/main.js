function scrollToDiv(div) {
    $('html,body').animate({
        scrollTop: $("#" + div).offset().top - 50},
        'fast');
}
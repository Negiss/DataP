function blink() {
    $('.blink').fadeOut(250).fadeIn(250);
}

setInterval(blink, 1500);

$(document).ready(
    blink()
);
$(document).ready(function () {
    $('.parallax').parallax();
    $("#index-banner").find(".parallax").css("top", "0");
    if ($.browser.mobile) {
        $(".parallax-container").css("height", "0");
        $("#index-banner").css("height", "auto").css("padding-bottom", "50px").css("border-bottom", "2px solid #3f51b5").find(".section").css("background", "#fff").css("padding-top", "0").parent().find(".parallax").css("top", "initial").find("img").css("height", "0");
    }
});
$(document).ready(function () {
    $('.scrollspy').scrollSpy();
});
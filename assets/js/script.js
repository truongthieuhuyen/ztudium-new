/* Function change color navbar */
$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $(".nav-link").toggleClass('blacked-text', $(this).scrollTop() > $nav.height());
        $("#contact-btn").toggleClass('blacked-text', $(this).scrollTop() > $nav.height());
    });
});
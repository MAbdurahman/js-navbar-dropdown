/* ============================================
            preloader
===============================================*/
$(window).on('load', function () {
    // makes sure that whole site is loaded
    $('#preloader-gif, #preloader').fadeOut(5000, function () {
    });
});
/*=============================================
          js-simple-navbar scripts
================================================*/
$(function () {


    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
        $(this).siblings(".nav-dropdown").toggle();
        // Close one dropdown when selecting another
        $(".nav-dropdown").not($(this).siblings()).hide();
        e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
        $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
        $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
        this.classList.toggle("active");
    });





    const sections = document.querySelectorAll('section');
    const listLinks = document.querySelectorAll('.navbar__list_link');

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 200;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if ((top >= offset) && (top < (offset + height))) {
                listLinks.forEach(listLink => {
                    listLink.classList.remove('active');
                    document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    });
});
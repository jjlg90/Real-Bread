const header = document.querySelector(".header");

/* This script collapses the mobile menu when after a section is selected on it */
$(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
});

/* This script changes the background color of the header when the user scrolls down through the site*/
window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add("active")
    } else {
        header.classList.remove("active");
    }

}
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

/* This script shift between tabs in Our Products section*/
function openProductTab(evt, productName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(productName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
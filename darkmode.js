let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

//check if dark mode is enabled
//if so, turn it off
//if not, turn it on

const enableDarkMode = () => {
    //adds darkmode class to body element
    document.body.classList.add("darkmode");
    //updates darkMode in the localStorage
    localStorage.setItem("darkMode", "on")
};

const disableDarkMode = () => {
    //removes darkmode class from body element
    document.body.classList.remove("darkmode");
    //updates darkMode in the localStorage
    localStorage.setItem("darkMode", "off")
};

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "on") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
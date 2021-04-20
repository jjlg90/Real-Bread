function sendMail(contactForm) {
    emailjs.send("realBreadID", "realBread", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("SUCCESS! Your message was sent");
            },
            function (error) {
                console.log("FAILED", error);
                alert("Woops! It seems we have run into some issues, please try again in a few minutes");
            }
        );
    return false; // To block from loading a new page
}
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile navigation.
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after clicking a link.
document.querySelectorAll("#navLinks a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Display the current year automatically.
document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact form: prepare an email using the visitor's email app.
document.getElementById("contactForm").addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Your email address.
        const recipient = "mubi7569@gmail.com";

        if (recipient === "") {
            document.getElementById("formMessage").textContent =
                "Please add your email address in script.js first.";
            return;
        }

        // Prepare the email subject.
        const subject = encodeURIComponent(
            "Portfolio message from " + name
        );

        // Prepare the email body.
        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage: " + message
        );

        // Open the visitor's email application.
        window.location.href =
            "mailto:" + recipient +
            "?subject=" + subject +
            "&body=" + body;
    }
);
function toggleMenu() {

    const menu =
        document.getElementById("navLinks");

    menu.classList.toggle("active");

}


/* Close menu when a link is clicked */

document
    .querySelectorAll(".nav-links a")
    .forEach(function(link) {

        link.addEventListener("click", function() {

            document
                .getElementById("navLinks")
                .classList.remove("active");

        });

    });
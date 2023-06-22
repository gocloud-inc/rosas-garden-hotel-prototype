export default function Header() {
    // Sticky Header
    let header = document.querySelector(".header");

    if (header) {
        // Add an event listener to the window for when it is scrolled
        window.addEventListener('scroll', function() {
            // Check if the page has been scrolled more than 20 pixels
            if (window.scrollY > 20) {
                // Add the "sticky" class to the header
                header.classList.add("sticky");
            } else {
                // Remove the "sticky" class from the header
                header.classList.remove("sticky");
            }
        });
    }

    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        this.classList.toggle('active');

        const bar = document.querySelectorAll('.bar');
        bar.forEach((index) => {
            index.classList.toggle('background-dark');
        })

        const navMenuElement = document.querySelector('.nav-menu');
        navMenuElement.classList.toggle('show');
    });
}
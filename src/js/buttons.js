export default function Button() {
    const buttons = document.querySelectorAll(".button[data-loading-text]");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const buttonText = this.innerHTML;
            const loadingText = this.getAttribute("data-loading-text");

            if (loadingText) {
                this.innerHTML = loadingText;
            }

            this.setAttribute("disabled", true);
            this.classList.add("is-loading");

            // Do some processing here, like making an AJAX request
            // Once the processing is done, re-enable the button and remove the loading indicator
            setTimeout(function() {
                if (loadingText) {
                    button.innerHTML = buttonText;
                }
                button.removeAttribute("disabled");
                button.classList.remove("is-loading");
            }, 3000);
        });
    });
}
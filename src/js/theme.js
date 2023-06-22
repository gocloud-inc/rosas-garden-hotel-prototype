export default function Theme() {
    // Theme Switcher
    const darkModeButton = document.getElementById("dark-mode-button");
    const lightModeButton = document.getElementById("light-mode-button");
    const defaultModeButton = document.getElementById("default-mode-button");

    function setMode(mode) {
        const htmlTag = document.querySelector("html");
        
        htmlTag.removeAttribute("data-theme");

        if (mode === "dark") {
            removeIcon(lightModeButton);
            removeIcon(defaultModeButton);
        } else if (mode === "light") {
            removeIcon(darkModeButton);
            removeIcon(defaultModeButton);
        } else {
            removeIcon(darkModeButton);
            removeIcon(lightModeButton);
            removeIcon(defaultModeButton);
        }

        htmlTag.setAttribute('data-theme', mode || 'default');

        const activeButton = mode === "dark" ? darkModeButton :
            mode === "light" ? lightModeButton : defaultModeButton;

        if (activeButton) {
            if (!activeButton.querySelector('.active-theme')) {
                activeButton.appendChild(createIcon());
            }
        }
    }

    function createIcon() {
        const icon = document.createElement("span");
        icon.className = "material-symbols-rounded text-color-primary font-size-24 position-absolute top-0 end-0 m-1 active-theme";
        icon.textContent = "check_circle";
        return icon;
    }

    function removeIcon(button) {
        if (button) {
            const icon = button.querySelector('.active-theme');
            if (icon) {
                icon.remove();
            }
        }
    }

    function removeActiveClass() {
        darkModeButton.classList.remove("active");
        lightModeButton.classList.remove("active");
        defaultModeButton.classList.remove("active");
    }

    if (darkModeButton) {
        darkModeButton.addEventListener("click", function() {
            setMode("dark");
            localStorage.setItem("mode", "dark");
            removeActiveClass();
            darkModeButton.classList.add("active");
        });
    }

    if (lightModeButton) {
        lightModeButton.addEventListener("click", function() {
            setMode("light");
            localStorage.setItem("mode", "light");
            removeActiveClass();
            lightModeButton.classList.add("active");
        });
    }   

    if (defaultModeButton) {
        defaultModeButton.addEventListener("click", function() {
            setMode(null);
            localStorage.removeItem("mode");
            removeActiveClass();
            defaultModeButton.classList.add("active");
        });
    }

    const currentMode = localStorage.getItem("mode");
    if (currentMode === "dark") {
        setMode("dark");
        
        if (darkModeButton) {
            darkModeButton.classList.add("active");
        }
    } else if (currentMode === "light") {
        setMode("light");

        if (lightModeButton) {
            lightModeButton.classList.add("active");
        }
    } else {
        setMode(null);

        if (defaultModeButton) {
            defaultModeButton.classList.add("active");
        }
    }
}
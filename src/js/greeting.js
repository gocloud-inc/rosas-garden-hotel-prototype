export default function Greeting() {
    const selector = document.querySelector(".greeting");
    const greetings = {
        morning: "Good morning",
        afternoon: "Good afternoon",
        evening: "Good evening"
    };
    
    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? greetings.morning : currentHour < 18 ? greetings.afternoon : greetings.evening;
    
    if (selector) {
        selector.textContent = greeting;
    }
}
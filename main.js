// Countdown Timer
function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    
    if (!countdownElement) {
        console.error("Error: Element with ID 'countdown' not found.");
        return;
    }

    const eventDate = new Date("June 14, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Ensure the script runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    setInterval(updateCountdown, 1000);
    updateCountdown();
});

// Scroll Animations
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in, .zoom-in");

    elements.forEach(el => {
        el.classList.add("visible"); // Instantly triggers animations
    });
});


// Modal Handling for Multiple Popups
document.addEventListener("DOMContentLoaded", function() {
    const learnMoreBtns = document.querySelectorAll(".card-about .btn");

    learnMoreBtns.forEach(btn => {
        btn.addEventListener("click", function(event) {
            event.preventDefault();

            // Find the closest card and the corresponding modal
            const card = this.closest(".card-about");
            const modalId = card.getAttribute("data-modal"); // Get modal ID from card
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.style.display = "flex"; // Show the modal
            }
        });
    });

    // Close modals when 'X' is clicked
    document.querySelectorAll(".close-btn").forEach(closeBtn => {
        closeBtn.addEventListener("click", function() {
            this.closest(".modal").style.display = "none";
        });
    });

    // Close modal when clicking outside of modal content
    window.addEventListener("click", function(event) {
        document.querySelectorAll(".modal").forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});


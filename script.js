const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".container");
const question = document.getElementById("question");

// This function runs EVERY time the mouse touches the "No" button
noBtn.addEventListener("mouseover", () => {
    const containerRect = container.getBoundingClientRect();
    
    // Max coordinates based on the white box size
    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;

    // Generate a random spot within the box
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the new position
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// Logic for when she finally clicks "Yes"
yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAY! Can't wait, Nedhi! 🥰";
    noBtn.style.display = "none"; // Hide the No button after she says Yes
});


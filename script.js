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
yesBtn.addEventListener("click", () => {
    // 1. Change the heading message
    question.innerHTML = "YAY! Can't wait, Nedhi! 🥰";

    // 2. Clear the button area and show the GIF
    const buttonsContainer = document.querySelector(".buttons");
    buttonsContainer.innerHTML = `
        <div style="margin-top: 20px;">
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHY5M2Zidm5mZzRyeGZ6eGZ6eGZ6eGZ6eGZ6eGZ6eGZ6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/MDJ9IbM3vuzAbpG7bO/giphy.gif" 
                 alt="Cute Cat" 
                 style="width: 200px; border-radius: 10px;">
            <h2 style="color: #ff4d6d; margin-top: 15px;">Happy Valentine's Day! ❤️</h2>
        </div>
    `;

    // 3. Hide the No button just in case it's still floating around
    noBtn.style.display = "none";
});









    

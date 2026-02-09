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
    // 1. Change the main question text
    question.innerHTML = "YAY! Can't wait, Nedhi! 🥰";

    // 2. Select the area where buttons were
    const buttonsContainer = document.querySelector(".buttons");
    
    // 3. Replace buttons with a reliable GIF and a sub-header
    buttonsContainer.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-top: 20px;">
            <img src="https://media.tenor.com/gU_79U6A2pgAAAAM/peach-goma-love.gif" 
                 alt="Cute Cat" 
                 style="width: 150px; height: auto; border-radius: 10px;">
            <h2 style="color: #ff4d6d; margin-top: 15px; font-size: 1.5rem;">Happy Valentine's Day! ❤️</h2>
        </div>
    `;

    // 4. Make sure the No button is gone
    noBtn.style.display = "none";
});








    

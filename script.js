const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".container");
const question = document.getElementById("question");

// No button movement
noBtn.addEventListener("mouseenter", () => {
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// YES button click
yesBtn.addEventListener("click", () => {

    // 🎆 1. Confetti Code — PUT HERE
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
    });

    // 2. Change the heading message
    question.innerHTML = "YAY! Can't wait, Nedhi! 🥰";

    // 3. Show the GIF
    const buttonsContainer = document.querySelector(".buttons");
    buttonsContainer.innerHTML = `
        <div style="margin-top: 20px;">
            <img src="https://media.giphy.com/media/MDJ9IbM3vuzAbpG7bO/giphy.gif"
                 style="width: 200px; border-radius: 10px;">
            <h2 style="color: #ff4d6d;">Happy Valentine's Day ❤️</h2>
        </div>
    `;

    // 4. Hide the No button
    noBtn.style.display = "none";

});








    

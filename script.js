const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".container");
const question = document.getElementById("question");
const gifContainer = document.getElementById("gifContainer");
const celebrationGif = document.getElementById("celebrationGif");
const buttons = document.querySelector(".buttons");

noBtn.addEventListener("mouseover", () => {
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener("click", () => {
    // 1. Change the top text
    question.innerHTML = "YAY! Can't wait, Nedhi! 🥰";
    
    // 2. Hide the buttons
    buttons.style.display = "none";
    
    // 3. Show the GIF and the ONE message already in the HTML
    gifContainer.style.display = "block";
    celebrationGif.src = "https://media.tenor.com/gU_79U6A2pgAAAAM/peach-goma-love.gif";
});






    

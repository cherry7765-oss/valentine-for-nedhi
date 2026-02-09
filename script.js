const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");

noBtn.addEventListener("mouseover", () => {
    // Get the size of the white box
    const containerRect = container.getBoundingClientRect();
    
    // Calculate max positions (Box size minus button size)
    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;

    // Generate random position within those boundaries
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});


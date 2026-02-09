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
    question.innerHTML = "YAY! Can't wait, Nedhi! 🥰";
    
    // Hide the buttons
    document.querySelector(".buttons").style.display = "none";
    noBtn.style.display = "none";

    // Show the GIF container and set the source
    const gifContainer = document.getElementById("gifContainer");
    const celebrationGif = document.getElementById("celebrationGif");
    
    gifContainer.style.display = "block";
    // Using a direct link from Giphy's media server
    celebrationGif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHY5M2Zidm5mZzRyeGZ6eGZ6eGZ6eGZ6eGZ6eGZ6eGZ6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/MDJ9IbM3vuzAbpG7bO/giphy.gif";

    // Add the extra banner text
    const message = document.createElement("h2");
    message.innerHTML = "Happy Valentine's Day! ❤️";
    message.style.color = "#ff4d6d";
    message.style.marginTop = "15px";
    gifContainer.appendChild(message);
});
yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAY! Can't wait, Nedhi! 🥰";
    
    // Hide the buttons
    document.querySelector(".buttons").style.display = "none";
    noBtn.style.display = "none";

    // Show the GIF container and set the source
    const gifContainer = document.getElementById("gifContainer");
    const celebrationGif = document.getElementById("celebrationGif");
    
    gifContainer.style.display = "block";
    // Using a direct link from Giphy's media server
    celebrationGif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHY5M2Zidm5mZzRyeGZ6eGZ6eGZ6eGZ6eGZ6eGZ6eGZ6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/MDJ9IbM3vuzAbpG7bO/giphy.gif";

    // Add the extra banner text
    const message = document.createElement("h2");
    message.innerHTML = "Happy Valentine's Day! ❤️";
    message.style.color = "#ff4d6d";
    message.style.marginTop = "15px";
    gifContainer.appendChild(message);
});
yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAY! Can't wait, Nedhi! 🥰";
    
    // Hide the buttons
    document.querySelector(".buttons").style.display = "none";
    noBtn.style.display = "none";

    // Show the GIF container and set the source
    const gifContainer = document.getElementById("gifContainer");
    const celebrationGif = document.getElementById("celebrationGif");
    
    gifContainer.style.display = "block";
    // Using a direct link from Giphy's media server
    celebrationGif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHY5M2Zidm5mZzRyeGZ6eGZ6eGZ6eGZ6eGZ6eGZ6eGZ6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/MDJ9IbM3vuzAbpG7bO/giphy.gif";

    // Add the extra banner text
    const message = document.createElement("h2");
    message.innerHTML = "Happy Valentine's Day! ❤️";
    message.style.color = "#ff4d6d";
    message.style.marginTop = "15px";
    gifContainer.appendChild(message);
});




    

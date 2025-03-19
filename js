document.addEventListener("DOMContentLoaded", function () {
    let text = "Happy Birthday, My Love! 🎉";
    let i = 0;
    let speed = 100;
    function typeEffect() {
        if (i < text.length) {
            document.getElementById("typing-text").textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        }
    }
    document.getElementById("typing-text").textContent = "";
    typeEffect();
    
    document.getElementById("reveal-button").addEventListener("click", function () {
        document.getElementById("surprise-content").classList.remove("hidden");
        this.style.display = "none";
    });

    function createHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.querySelector(".hearts-container").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});

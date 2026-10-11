/* ==========================================
   1. SELECT WEBSITE ELEMENTS
========================================== */

const welcomeScreen = document.getElementById("welcome-screen");
const countdownScreen = document.getElementById("countdown-screen");
const birthdayScreen = document.getElementById("birthday-screen");
const memoriesScreen = document.getElementById("memories-screen");
const letterScreen = document.getElementById("letter-screen");
const finalScreen = document.getElementById("final-screen");

const enterButton = document.getElementById("enter-button");
const memoriesButton = document.getElementById("memories-button");
const letterButton = document.getElementById("letter-button");
const finalButton = document.getElementById("final-button");

const countdownNumber = document.getElementById("countdown-number");

const musicToggle = document.getElementById("music-toggle");
const birthdayMusic = document.getElementById("birthday-music");


/* ==========================================
   2. SCREEN NAVIGATION
========================================== */

const allScreens = [
    welcomeScreen,
    countdownScreen,
    birthdayScreen,
    memoriesScreen,
    letterScreen,
    finalScreen
];

function showScreen(targetScreen) {

    allScreens.forEach(screen => {
        screen.classList.remove("active");
    });

    targetScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==========================================
   3. WELCOME SCREEN
========================================== */

enterButton.addEventListener("click", () => {

    showScreen(countdownScreen);

    startCountdown();

});


/* ==========================================
   4. BIRTHDAY COUNTDOWN
========================================== */

function startCountdown() {

    let count = 3;

    countdownNumber.textContent = count;

    const countdownInterval = setInterval(() => {

        count--;

        if (count > 0) {

            countdownNumber.textContent = count;

        } else {

            clearInterval(countdownInterval);

            countdownNumber.textContent = "BOOM!";

            setTimeout(() => {

                showScreen(birthdayScreen);

                launchCelebration();

            }, 1000);

        }

    }, 1000);

}


/* ==========================================
   5. BIRTHDAY CELEBRATION
========================================== */

function launchCelebration() {

    createSparkles();

}


/* Create floating birthday sparkles */

function createSparkles() {

    const symbols = ["✨", "🌟", "💜", "💗", "⭐"];

    for (let i = 0; i < 25; i++) {

        const sparkle = document.createElement("span");

        sparkle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        sparkle.style.position = "fixed";

        sparkle.style.left = Math.random() * 100 + "vw";

        sparkle.style.top = "-30px";

        sparkle.style.fontSize =
            (Math.random() * 15 + 12) + "px";

        sparkle.style.pointerEvents = "none";

        sparkle.style.zIndex = "20";

        sparkle.style.transition =
            "transform 4s linear, opacity 4s linear";

        document.body.appendChild(sparkle);

        requestAnimationFrame(() => {

            sparkle.style.transform =
                `translateY(${window.innerHeight + 60}px) rotate(360deg)`;

            sparkle.style.opacity = "0";

        });

        setTimeout(() => {

            sparkle.remove();

        }, 4100);

    }

}


/* ==========================================
   6. MEMORIES GALLERY
========================================== */

memoriesButton.addEventListener("click", () => {

    showScreen(memoriesScreen);

});


/* ==========================================
   7. PERSONAL BIRTHDAY LETTER
========================================== */

letterButton.addEventListener("click", () => {

    showScreen(letterScreen);

});


/* ==========================================
   8. FINAL SURPRISE
========================================== */

finalButton.addEventListener("click", () => {

    showScreen(finalScreen);

    createSparkles();

});


/* ==========================================
   9. BACKGROUND MUSIC CONTROL
========================================== */

let musicPlaying = false;

musicToggle.addEventListener("click", async () => {

    if (!musicPlaying) {

        try {

            await birthdayMusic.play();

            musicPlaying = true;

            musicToggle.textContent = "♫";

            musicToggle.setAttribute(
                "aria-label",
                "Pause background music"
            );

        } catch (error) {

            console.log("Music could not be played:", error);

        }

    } else {

        birthdayMusic.pause();

        musicPlaying = false;

        musicToggle.textContent = "♪";

        musicToggle.setAttribute(
            "aria-label",
            "Play background music"
        );

    }

});


/* ==========================================
   10. INITIAL WEBSITE STATE
========================================== */

showScreen(welcomeScreen);

console.log("Birthday Universe is ready! 🚀");


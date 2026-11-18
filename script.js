/* =================================
   POUR MA PRINCESSE ❤️
   JAVASCRIPT
================================= */

// RECUPERATION DES ELEMENTS

const screens = [
    document.getElementById("screen1"),
    document.getElementById("screen2"),
    document.getElementById("screen3")
];

const dots = [
    document.getElementById("dot1"),
    document.getElementById("dot2"),
    document.getElementById("dot3")
];

const nextBtn = document.getElementById("nextBtn");
const nextBtn2 = document.getElementById("nextBtn2");
const restartBtn = document.getElementById("restartBtn");

let currentScreen = 0;


// ================================
// NAVIGATION ENTRE LES ECRANS
// ================================

function showScreen(index) {

    if (index < 0 || index >= screens.length) {
        return;
    }

    screens.forEach((screen, i) => {
        screen.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active-dot", i === index);
    });

    currentScreen = index;

    // Remonter doucement en haut de la page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// BOUTONS SUIVANTS

nextBtn.addEventListener("click", () => {
    showScreen(1);
});

nextBtn2.addEventListener("click", () => {
    showScreen(2);
});


// RECOMMENCER LA SURPRISE

restartBtn.addEventListener("click", () => {
    showScreen(0);
});


// ================================
// GENERATION DES COEURS FLOTTANTS
// ================================

const heartsContainer = document.getElementById("hearts");

const heartSymbols = ["♥️", "♡", "❤️", "✦"];

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    // Position horizontale aleatoire
    heart.style.left = Math.random() * 100 + "%";

    // Taille aleatoire
    heart.style.fontSize = (12 + Math.random() * 20) + "px";

    // Duree aleatoire
    const duration = 8 + Math.random() * 8;

    heart.style.animationDuration = duration + "s";

    heartsContainer.appendChild(heart);

    // Supprimer le coeur apres son animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}


// Creation reguliere des coeurs

setInterval(createHeart, 700);


// Quelques coeurs au lancement

for (let i = 0; i < 12; i++) {

    setTimeout(createHeart, i * 300);

}


// ================================
// NAVIGATION AU CLAVIER
// ================================

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight" && currentScreen < 2) {
        showScreen(currentScreen + 1);
    }

    if (event.key === "ArrowLeft" && currentScreen > 0) {
        showScreen(currentScreen - 1);
    }

});


// ================================
// FIN DU SCRIPT
// ================================

console.log("Bienvenue dans l'univers de Princesse ❤️");
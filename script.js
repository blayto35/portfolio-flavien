// Animation des pétales Sakura

const sakuraContainer = document.querySelector(".sakura-container");

if (sakuraContainer) {

    for (let i = 0; i < 20; i++) {

        const petale = document.createElement("div");

        petale.classList.add("sakura-petal");

        const taille = 8 + Math.random() * 10;

        petale.style.left = Math.random() * 100 + "%";
        petale.style.width = taille + "px";
        petale.style.height = taille * 1.3 + "px";
        petale.style.animationDuration = (7 + Math.random() * 10) + "s";
        petale.style.animationDelay = Math.random() * 12 + "s";
        petale.style.opacity = 0.2 + Math.random() * 0.4;

        sakuraContainer.appendChild(petale);
    }
}

// Animation d'apparition au défilement

const elements = document.querySelectorAll(
    ".about-container, .skills-container, .projects-container"
);

const observateur = new IntersectionObserver((entrees) => {

    entrees.forEach((entree) => {

        if (entree.isIntersecting) {

            entree.target.classList.add("reveal", "visible");

            observateur.unobserve(entree.target);
        }

    });

}, {
    threshold: 0.15
});

elements.forEach((element) => {

    element.classList.add("reveal");

    observateur.observe(element);

});
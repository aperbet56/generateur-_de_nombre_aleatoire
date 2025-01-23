// Récupération des éléments HTML5
const number = document.querySelector(".random__number");
const btn = document.querySelector(".btn");

// Déclaration de la fonction generateRandomNumber qui va permettre de générer un nombre aléatoire
const generateRandomNumber = () => {
  // Création d'un nombre aléatoire compris entre 0 et 100
  const randomNumber = Math.floor(Math.random() * 101);
  // Affihcage du nombre aléatoire généré dans la console
  console.log(randomNumber);
  // Affichage du nombre aléatoire dans le paragraphe
  number.textContent = randomNumber;
};

// Appel de la fonction generateRandomNumber
generateRandomNumber();

// Ecoute de l'événement "click" sur le bouton et appel de la fonction generateRandomNumber
btn.addEventListener("click", generateRandomNumber);

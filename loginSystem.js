// Définition du mot de passe secret
const SECRET = "12345";

// 1. Demander un mot de passe
let mdp = prompt("Entrez le mot de passe :");

// 2. Comparer avec SECRET
if (mdp === SECRET) {
    // 3. Afficher si correct
    console.log("Accès accordé");
} else {
    // 3. Afficher si incorrect
    console.log("Mot de passe incorrect");
}


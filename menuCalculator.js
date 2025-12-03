// 1. Afficher le menu
let choix = prompt(
    "=== MENU CALCULATRICE ===\n" +
    "1 - Addition\n" +
    "2 - Soustraction\n" +
    "3 - Multiplication\n" +
    "4 - Division\n" +
    "0 - Quitter\n" +
    "Votre choix :"
);

// 2. Si 0 → arrêter
if (choix === "0") {
    console.log("Programme terminé.");
} 
// 3. Sinon → effectuer calcul si option valide
else if (choix === "1" || choix === "2" || choix === "3" || choix === "4") {

    // Demander 2 nombres
    let a = Number(prompt("Entrez le premier nombre :"));
    let b = Number(prompt("Entrez le deuxième nombre :"));

    let resultat;

    if (choix === "1") {
        resultat = a + b;
        console.log("Résultat de l'addition :", resultat);
    } else if (choix === "2") {
        resultat = a - b;
        console.log("Résultat de la soustraction :", resultat);
    } else if (choix === "3") {
        resultat = a * b;
        console.log("Résultat de la multiplication :", resultat);
    } else if (choix === "4") {
        resultat = a / b;
        console.log("Résultat de la division :", resultat);
    }
}
// 4. Sinon → option invalide
else {
    console.log("Option invalide");
}


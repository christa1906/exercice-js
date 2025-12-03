// 1. Demander le montant d’achat
let montant = Number(prompt("Entrez le montant de l'achat :"));

// 2. Calcul de la réduction selon le montant
let reduction = 0;

if (montant < 50) {
    reduction = 0;
} else if (montant <= 100) {
    reduction = 10;
} else if (montant <= 200) {
    reduction = 15;
} else {
    reduction = 20;
}

// 3. Calcul du montant final après réduction
let montantFinal = montant - (montant * reduction / 100);

// 4. Affichage du résultat
console.log("Réduction appliquée :", reduction + "%");
console.log("Montant final :", montantFinal.toFixed(2), "€");


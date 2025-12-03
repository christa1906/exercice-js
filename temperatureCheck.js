// 1. Demander la température
let t = Number(prompt("Entrez la température :"));

// 2. Afficher selon les plages
if (t < 0) {
    console.log("Il gèle");
} else if (t <= 15) {
    console.log("Froid");
} else if (t <= 25) {
    console.log("Agréable");
} else if (t <= 35) {
    console.log("Chaud");
} else {
    console.log("Canicule");
}


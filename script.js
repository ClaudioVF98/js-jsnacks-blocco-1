// Array
const primoArray = ["parola1-1", "parola2-1", "parola3-1", "parola4-1", "parola5-1"];
const secondoArray = ["parola1-1", "parola2-1"];

const primoUl = document.getElementById("contenitore_parole");

// Primo Array
for (let i=0; i<primoArray.length; i++) {
    let primoContenitore = primoArray[i];
    let primaLista = document.createElement("li");
    primaLista.append(primoContenitore);
    primoUl.append(primaLista);

    let secondoUl = document.createElement("ul");

    // Secondo Array
    for (let j=0; j<secondoArray.length; j++) {
        let secondoContenitore = secondoArray[j];
        let secondaLi = document.createElement("li");
        secondaLi.append(secondoContenitore);
        secondoUl.append(secondaLi);
        primaLista.append(secondoUl);
    }
}
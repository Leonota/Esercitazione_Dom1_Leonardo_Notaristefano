// DOM1

//____________________________________________________________________________________________________________________________________________________________________

// TRACCIA ESERCIZIO 1:

// Crea un h1 all'interno dell'HTML e catturandolo in JS cambiane il colore del testo tramite style Inline

//____________________________________________________________________________________________________________________________________________________________________

// ESECUZIONE ESERCIZIO 1:

// let h1 = document.getElementById("Title") -> METODO ALTERNATIVO

// let h1 = document.querySelector("#Title")

// h1.style.color = "red"

// console.log(h1)

//____________________________________________________________________________________________________________________________________________________________________

// TRACCIA ESERCIZIO 2:

// Crea un h2 all'interno dell'HTML e catturandolo in JS cambiane il colore del testo tramite l'assegnazione di una classe

//____________________________________________________________________________________________________________________________________________________________________

// ESECUZIONE ESERCIZIO 2:

// let h1 = document.getElementClassName("Subtitle") -> METODO ALTERNATIVO

// let h2 = document.querySelector(".Subtitle")

// h2.style.color = "red"

// console.log(h2)

//____________________________________________________________________________________________________________________________________________________________________

// TRACCIA ESERCIZIO 3:

// Crea un h3 all'interno dell'HTML e catturandolo in JS cambiane il contenuto con un altra stringa

//____________________________________________________________________________________________________________________________________________________________________

// ESECUZIONE ESERCIZIO 3:

// let h3 = document.querySelector(".Subtitle2")

// h3.innerText = "STRINGA MODIFICATA"

// console.log(h3)

//____________________________________________________________________________________________________________________________________________________________________

// TRACCIA ESERCIZIO 4:

// Lavoriamo con il DOM: creare una pagina HTML con 3 paragrafi e 3 bottoni. 

// Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale, 
// il secondo dovra’ rendere il testo dei paragrafi in grassetto 
// il terzo dovra’ far scomparire e ricomparire i paragrafi!

//____________________________________________________________________________________________________________________________________________________________________

// ESECUZIONE ESERCIZIO 4:

// const paragrafi = document.querySelectorAll("p");

// function cambiareColore() {

//     const colori = [`red`,`blue`,`yellow`]

//     paragrafi.forEach(p => {
    
//         const coloriRandomici = colori[Math.floor(Math.random() * colori.length)]
//         p.style.color = coloriRandomici
//     })
// }

//  function rendereGrassetto() {

//      paragrafi.forEach(p => {
    
//         if (p.style.fontWeight === "bold") {
//             p.style.fontWeight = "normal";
//         } else {
//             p.style.fontWeight = "bold";
//         }

//      })

//  }

// function toggleParagrafi() {

//     paragrafi.forEach(p => {
    
//         if (p.style.display === "none") {
//             p.style.display = "block";
//         } else {
//             p.style.display = "none";
//         }

//     })

// }

//____________________________________________________________________________________________________________________________________________________________________

// TRACCIA ESERCIZIO 5:

// Dato un array di contatti:
// let contacts = [
//     { 'id': 1, 'name': 'Nicola'},
//     { 'id': 2, 'name': 'Fabio'},
//     { 'id': 3, 'name': 'Luca'},
//     { 'id': 4, 'name': 'Giulia'}
// ] 
// Visualizzare tutti i contatti mediante una lista

// Creare diversi pulsanti:

// per ordinarli tramite id in ordine crescente o decrescente
// per ordinarli tramite name in ordine alfabetico dalla A-Z e dalla Z-A

//____________________________________________________________________________________________________________________________________________________________________

// ESECUZIONE ESERCIZIO 5:

// let contacts = [
//     { 'id': 1, 'name': 'Nicola' },
//     { 'id': 2, 'name': 'Fabio' },
//     { 'id': 3, 'name': 'Luca' },
//     { 'id': 4, 'name': 'Giulia' }
// ];

// let btnCr = document.querySelector("#btnCr")
// let btnDec = document.querySelector("#btnDec")
// let btnAZ = document.querySelector("#btnAZ")
// let btnZA = document.querySelector("#btnZA")

// const contactList = document.getElementById("contact-list");

// function Stampante() {
//     contacts.forEach(contact => {
//     let li = document.createElement("li");
//     li.textContent =`${contact.id} - ${contact.name}`;
//     contactList.appendChild(li);
// });
// }

// Stampante()

// btnDec.addEventListener("click",()=>{
//     contacts.sort((a,b)=>b.id - a.id)
//     contactList.innerHTML = ""

//     Stampante()

// })

// btnCr.addEventListener("click",()=>{
//     contacts.sort((a,b)=>a.id - b.id)
//     contactList.innerHTML = "";

//     Stampante()

// })

// btnAZ.addEventListener("click",()=>{
//     contacts.sort((a,b)=>a.name - b.name)
//     contactList.innerHTML = "";

//     Stampante()

// })

// btnZA.addEventListener("click",()=>{
//     contacts.sort((a,b)=>b.name - a.name)
//     contactList.innerHTML = "";

//     Stampante()

// })
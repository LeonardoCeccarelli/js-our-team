// Creo un array contenente oggetti che identificano una determinata persona

const teamArray = [
    // indice 0
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "img/wayne-barnett-founder-ceo.jpg",
    },

    // indice 1
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg",
    },

    // indice 2
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "img/walter-gordon-office-manager.jpg",
    },

    // indice 3
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "img/angela-lopez-social-media-manager.jpg",
    },

    // indice 4
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "img/scott-estrada-developer.jpg",
    },

    // indice 5
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "img/barbara-ramos-graphic-designer.jpg",
    }
]

// Individuo il contenitore dove andrò ad inserire le card
const cardContainer = document.querySelector(".team-container")

// Individuo i tag da dove ricevo i valori degli utenti per poi 
// inseerirli in una variabile
const nameInput = document.getElementById("name")
const roleInput = document.getElementById("role")
const imageInput = document.getElementById("image")

// Individuo il bottone che aggiunge le card
const addUserBtn = document.getElementById("addMemberButton")

// Richiamo la funzione per far generare dinamicamente le card
generateCard(teamArray, cardContainer)

// Aggiungo l'evento al bottone("click")
addUserBtn.addEventListener("click", function () {

    // Creo un nuovo oggetto dove vado ad inserire le chiavi
    // datemi dall'input dell'utente
    const newUser = {}

    newUser.name = nameInput.value
    newUser.role = roleInput.value
    newUser.image = imageInput.value

    // pusho il nuovo oggetto nell'array
    teamArray.push(newUser)

    generateCard(teamArray, cardContainer)

})


/*****************************************
FUNZIONI
*****************************************/

/**
 * Creo funzione per generare automaticamente le card
 * 
 * @param {array} array 
 */
function generateCard(array, insertContainer) {

    insertContainer.innerHTML = ""

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        // per ogni oggetto dell'array individuo nome ruolo e immagine
        // e la vado ad inserire nel campo giusto
        insertContainer.innerHTML += `<div class="team-card">
                                        <div class="card-image">
                                            <img src="${element.image}"/>
                                        </div>
                                        <div class="card-text">
                                            <h3>${element.name}</h3>
                                            <p>${element.role}</p>
                                        </div>
                                    </div>`
    }
}

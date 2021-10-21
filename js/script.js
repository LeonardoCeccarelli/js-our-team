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

// Richiamo la funzione per far generare dinamicamente le card
generateCard(teamArray)

// Creo funzione per generare automaticamente le card
function generateCard(array) {

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        // per ogni oggetto dell'array individuo nome ruolo e immagine
        // e la vado ad inserire nel campo giusto
        cardContainer.innerHTML += `<div class="team-card">
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

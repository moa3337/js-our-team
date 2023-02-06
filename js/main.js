/*
 Utilizzando i dati forniti, creare un array di oggetti
 per rappresentare i membri del team. Ogni membro
 è caratterizzato dalle seguenti informazioni: nome,
 ruolo e foto.
 Creare l’array di oggetti con le informazioni fornite.
 Stampare su console, per ogni membro del team, le
 informazioni di nome, ruolo e la stringa della foto.
 Stampare le stesse informazioni su DOM sottoforma di stringhe.
*/

// DIACHIARAZIONE DELL'ARRAY DEL NOME DEL TEAM
const teamMembers = [{
    // DESCRIZIONE DEI MEMBRI DEL TEAM (CON "object")
    photo: "wayne-barnett-founder-ceo.jpg",
    memberName: "Wayne Barnett",
    role: "Founder & CEO",
},
{
    photo: "wayne-barnett-founder-ceo.jpg",
    memberName: "Angela Caroll",
    role: "Chief Editor",
},
{
    photo: "wayne-barnett-founder-ceo.jpg",
    memberName: "Walter Gordon",
    role: "Office Manager",
},
{
    photo: "wayne-barnett-founder-ceo.jpg",
    memberName: "Angela Lopez",
    role: "Social Media Manager",
},
{
    photo: "wayne-barnett-founder-ceo.jpg",
    memberName: "Scott Estrada",
    role: "Developer",
},
{
    photo: "wayne-barnett-founder-ceo.jpg",
    memberName: "Barbara Ramos",
    role: "Graphic Designer",
}];

// FUNZIONE PER OGNI MEMBRO DEL TEAM
teamMembers.forEach(function (member) {
    console.log(`
    memberName: ${member.memberName}, 
    role: ${member.role}, 
    photo: ${member.photo}
    `);
})

// AGGANCIO ALL'"id" DEL HTML 
const container = document.getElementById("container");

// MANIPOLAZIONE DEL DOM PER OGNI MEMBRO DEL TEAM
teamMembers.forEach(function (member) {
    const memberInfo = `
        <div class="card">
            <img src="${member.photo}" class="card-img-top" alt="${member.memberName}">
            <div class="card-body">
                <h5 class="card-title">${member.memberName}</h5>
                <p class="card-text">${member.role}</p>
            </div>
        </div>
    `;

    container.innerHTML += memberInfo;
});


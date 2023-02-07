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
    photo: "angela-caroll-chief-editor.jpg",
    memberName: "Angela Caroll",
    role: "Chief Editor",
},
{
    photo: "walter-gordon-office-manager.jpg",
    memberName: "Walter Gordon",
    role: "Office Manager",
},
{
    photo: "angela-lopez-social-media-manager.jpg",
    memberName: "Angela Lopez",
    role: "Social Media Manager",
},
{
    photo: "scott-estrada-developer.jpg",
    memberName: "Scott Estrada",
    role: "Developer",
},
{
    photo: "barbara-ramos-graphic-designer.jpg",
    memberName: "Barbara Ramos",
    role: "Graphic Designer",
}];

// AGGANCIO AL "container" TRAMITE "id" DEL HTML 
const containerEl = document.getElementById("container");

// FUNZIONE PER STAMPARE OGNI MEMBRO DEL TEAM
for (const member of teamMembers) {
    console.log("name: " + member.memberName);
    console.log("role: " + member.role);
    console.log("photo: " + member.photo);

    // MANIPOLAZIONE DEL DOM PER OGNI MEMBRO DEL TEAM
    const memberInfo = `
    <div class="col">  
    <div class="card">
    <img src="./pictures/${member.photo}" class="card-img-top" alt="${member.memberName}">
    <div class="card-body">
    <h5 class="card-title">${member.memberName}</h5>
    <p class="card-text">${member.role}</p>
    </div>
    </div>
    </div>    
    `;

    containerEl.innerHTML += memberInfo;
};


// FUNZIONE ALTERNATIVA PER STAMPARE OGNI MEMBRO DEL TEAM
/*teamMembers.forEach(function (member) {
    console.log(`
    memberName: ${member.memberName}, 
    role: ${member.role}, 
    photo: ${member.photo}
    `);
})*/


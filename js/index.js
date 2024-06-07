import getData from "./modules/getData.js";
import feedTbody from "./modules/feedTbody.js";
import handleSearch from "./modules/handlesearch.js";

let users = await getData("./data/users.json");
console.log(users);

if (users) {
  users.forEach((user) => {
    feedTbody(user);

    // let tr = document.createElement("tr");
    // let tdId = document.createElement("td");
    // let tdNom = document.createElement("td");
    // let tdPrenom = document.createElement("td");
    // let tdEmail = document.createElement("td");
    // let tdRole = document.createElement("td");

    // tdId.textContent = user.id;
    // tdNom.textContent = user.last_name;
    // tdPrenom.textContent = user.first_name;
    // tdEmail.textContent = user.email;
    // tdRole.textContent = user.role;

    // tr.appendChild(tdId);
    // tr.appendChild(tdNom);
    // tr.appendChild(tdPrenom);
    // tr.appendChild(tdEmail);
    // tr.appendChild(tdRole);
  });
}

// function feedTbody(user) {
//   const tbody = document.querySelector("tbody");
//   const tr = createTrUser(user);
//   tbody.appendChild(tr);
//   let tr = document.createElement("tr");
//   let tdId = document.createElement("td");
//   let tdNom = document.createElement("td");
//   let tdPrenom = document.createElement("td");
//   let tdEmail = document.createElement("td");
//   let tdRole = document.createElement("td");

//   tdId.textContent = user.id;
//   tdNom.textContent = user.last_name;
//   tdPrenom.textContent = user.first_name;
//   tdEmail.textContent = user.email;
//   tdRole.textContent = user.role;

//   tr.appendChild(tdId);
//   tr.appendChild(tdNom);
//   tr.appendChild(tdPrenom);
//   tr.appendChild(tdEmail);
//   tr.appendChild(tdRole);
// }

// function createTrUser(user) {
//   let tr = document.createElement("tr");

//     let tdId = document.createElement("td");
//   let tdNom = document.createElement("td");
//   let tdPrenom = document.createElement("td");
//   let tdEmail = document.createElement("td");
//   let tdRole = document.createElement("td");

//   tdId.textContent = user.id;
//   tdNom.textContent = user.last_name;
//   tdPrenom.textContent = user.first_name;
//   tdEmail.textContent = user.email;
//   tdRole.textContent = user.role;

//   tr.appendChild(createTd(user.id));
//   tr.appendChild(createTd(user.nom));
//   tr.appendChild(createTd(user.prenom));
//   tr.appendChild(createTd(user.email));
//   tr.appendChild(createTd(user.role));

//   return tr;
// }

// function createTd(fieldValue) {
//   const td = document.createElement("td");
//   td.textContent = fieldValue;
//   return td;
// }

// const usersDatasUrl = await getData("./data/users.json");
// console.log(users);

if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
} else {
  users = await getData(usersDatasUrl);
  localStorage.setItem("users", JSON.stringify(users));
}

if (users) {
  users.sort((a, b) => {
    let x = a.nom.toLowerCase();
    let y = b.nom.toLowerCase();
    if (x < y) {
      return -1;
    } 
    if (x > y) {
      return 1;
    }
    return 0;
  });
  feedTbody(users);
  handleSearch(users);
  //     const searchInput = document.querySelector("#searchInput");
  //     searchInput.addEventListener("keyup", (event) => {
  //       const searchValue = event.target.value;
  //       const filteredUsers = users.filter(
  //         (user) =>
  //           user.nom.toLowerCase().includes(searchValue) ||
  //         user.prenom.toLowerCase().includes(searchValue) ||
  //         user.email.toLowerCase().includes(searchValue) ||
  //         user.role.toLowerCase().includes(searchValue)
  //       );
  //       feedTbody(filteredUsers);
  //     });
}

// let tab = [
//   {
//     id: 1,
//     nom: "Aze",
//   },
//   {
//     id: 2,
//     nom:
//     "Ert",
//   },
//   {
//     id: 3,
//     nom: "Aaa",
//   },
// ];
// console.log(users);
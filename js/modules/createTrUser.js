import createTd from "./createTd.js"

export default function createTrUser(user) {
    let tr = document.createElement("tr");
  
    tr.appendChild(createTd(user.id));
    tr.appendChild(createTd(user.nom));
    tr.appendChild(createTd(user.prenom));
    tr.appendChild(createTd(user.email));
    tr.appendChild(createTd(user.role));
  
    return tr;
  }
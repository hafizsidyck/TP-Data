import createTrUser from "./createTrUser.js"

export default function feedTbody(user) {
    const tbody = document.querySelector("tbody");
    const tr = createTrUser(user);
    tbody.appendChild(tr);
  }
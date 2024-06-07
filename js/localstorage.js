import getData from "./modules/getData.js";
import feedTbody from "./modules/feedTbody.js";

export async function localStorage() {
    
    const usersDatasUrl = await getData("./data/users.json");
    console.log(users);
    
    let users = []
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
    } else {
        users = await getDatas(usersDatasUrl);
        localStorage.setItem("users", JSON.stringify(users));
    }
    
    if (users) {
        feedTbody(users);
    }
}
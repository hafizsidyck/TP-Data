async function getData() {
  const reponse = await fetch("./data/users.json");
  const users = await reponse.json();
  return users;
}
export default getData;



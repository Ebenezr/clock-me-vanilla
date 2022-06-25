document.addEventListener("DOMContentLoaded", () => {
  fetchUsers();
});
const logInForm = document.getElementById("login-page");
const email = document.getElementById("l-email");
const password = document.getElementById("l-password");
function fetchUsers() {
  fetch("http://localhost:3000/users")
    .then((resp) => resp.json())
    .then((users) => {
      loginAuth(users);
    });
}
//login function
function loginAuth(users) {
  logInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(email.value);
    let acc;
    for (let data of users) {
      //vadidates email
      if (email.value == "") {
        alert("Email required!");
        return;
      }
      //validate password
      if (password.value == "") {
        alert("Password required!");
        return;
      }
      //authenticate email
      if (!(email.value === data.email)) {
        alert("Not a registered username");
        return;
      }
      //authenticate password
      acc = data;
      if (!(password.value === acc.password)) {
        alert("Invalid password!");
        return;
      }
      alert(`welcome back ${data.name}`);
      console.log(acc);
      return;
    }
  });
}

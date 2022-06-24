document.addEventListener("DOMContentLoaded", () => {
  fetchEmployeesData();
});
let cardName = document.getElementById("card-title");
let cardTitle = document.getElementById("card-designation");
let card = document.getElementById("card");
let cardswrapper = document.getElementById("employee-cards");
function fetchEmployeesData() {
  fetch("http://localhost:3000/users")
    .then((resp) => resp.json())
    .then((users) => {
      appendCard(users);
    });
}
function appendCard(users) {
  users.forEach((users) => {
    let list = document.createElement("li");
    cardName.textContent = users.name;
    cardTitle.textContent = users.designation;
    list.innerHTML = `
    <div class=card>
    <div class=top>
    <img src=>
    <h3 id=card-title> ${users.name}</h3>
    </div>
    <div class="bottom">
                            <h5 id="card-designation">${users.designation}</h5>
                            <p>2 <span>days ago</span></p>
                        </div>
    </div>`;
    // list.innerText = users.name;
    // employeesList.style.listStyle = "none";
    cardswrapper.appendChild(list);

    //render spefic movie details
    // list.addEventListener("click", () => {

    //   adminPassword.value = users.password;
    //   //timeStampList.reload();
    // });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchEmployees();
});
let employeesList = document.getElementById("admin-results");
let adminId = document.getElementById("admin-id");
let adminName = document.getElementById("admin-name");
let adminEmail = document.getElementById("admin-email");
let adminTitle = document.getElementById("admin-designation");
let userDel = document.getElementById("admin-delete");
let adminPassword = document.getElementById("admin-password");
const adminForm = document.getElementById("admin-form");
function fetchEmployees() {
  fetch("http://localhost:3000/users")
    .then((resp) => resp.json())
    .then((users) => {
      renderEmployees(users);
      updateEmpoyee(users);
      deleteEmpoyee(users);
    });
}
function renderEmployees(users) {
  users.forEach((users) => {
    let list = document.createElement("li");

    list.innerText = users.name;
    employeesList.style.listStyle = "none";
    employeesList.appendChild(list);

    //render spefic movie details
    list.addEventListener("click", () => {
      adminEmail.value = users.email;
      adminId.value = users.id;
      adminName.value = users.name;
      adminTitle.value = users.designation;
      adminPassword.value = users.password;
      //timeStampList.reload();
    });
  });
}
function updateEmpoyee(users) {
  adminForm.addEventListener("submit", (event) => {
    event.preventDefault();
    for (let data of users) {
      if (adminId.value === data.id) {
        const index = users.indexOf(data);
        let upDateInfo = {};
        upDateInfo = {
          id: adminId.value,
          email: adminEmail.value,
          password: adminPassword.value,
          name: adminName.value,
          designation: adminTitle.value,
        };

        //console.log(newVotes)

        fetch(`http://localhost:3000/users/${index + 1}`, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(upDateInfo),
        })
          .then((res) => res.json())
          .then((users) => {
            alert("successfuly Updated");
            //console.log(users)
            // calSalary(users);
          })
          .catch(function () {});
      } else {
      }
    }
  });
}
function deleteEmpoyee(users) {
  userDel.addEventListener("click", (event) => {
    event.preventDefault();
    for (let data of users) {
      if (adminId.value === data.id) {
        const index = users.indexOf(data);
        //console.log(newVotes)

        fetch(`http://localhost:3000/users/${index + 1}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((users) => {
            alert("Employee Deleted");
            //console.log(users)
            // calSalary(users);
          })
          .catch(function () {});
      } else {
      }
    }
  });
}

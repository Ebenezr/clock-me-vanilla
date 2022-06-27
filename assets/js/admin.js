document.addEventListener("DOMContentLoaded", () => {
  fetchEmployees();
});
let employeesList = document.getElementById("admin-results");
let adminId = document.getElementById("admin-id");
let adminName = document.getElementById("admin-name");
let adminEmail = document.getElementById("admin-email");
let adminTitle = document.getElementById("admin-designation");
const userDel = document.getElementById("admin-delete");
let adminPassword = document.getElementById("admin-password");
const adminAdd = document.getElementById("admin-add");
const adminForm = document.getElementById("admin-form");
let avatar = document.getElementById("avatar");
function fetchEmployees() {
  fetch("http://localhost:3000/users")
    .then((resp) => resp.json())
    .then((users) => {
      renderEmployees(users);
      updateEmpoyee(users);
      deleteEmpoyee(users);
      addEmpoyee(users);
    });
}
//fetch data from randomuserapi
async function getAverters() {
  const users = await fetch("https://randomuser.me/api/");
  return users.json();
}
//apend random image to employee profile
function updateProfile(profile) {
  avatar.src = profile.results[0].picture.large;
}
//render chosen employee data on form
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
      getAverters().then((data) => updateProfile(data));
    });
  });
}
//update employee details
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
            // employeesList.innerHTML = "";
          })
          .catch(function () {});
      } else {
      }
    }
  });
}
//deletes employee from database
function deleteEmpoyee(users) {
  userDel.addEventListener("click", (event) => {
    event.preventDefault();
    for (let data of users) {
      if (adminId.value === data.id) {
        const index = users.indexOf(data);

        fetch(`http://localhost:3000/users/${index + 1}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((users) => {
            // employeesList.innerHTML = "";
            // renderEmployees(users);
            alert("Employee Deleted");
          })
          .catch(function () {});
      } else {
      }
    }
  });
}
//add employee function
function addEmpoyee(users) {
  adminAdd.addEventListener("click", (event) => {
    event.preventDefault();
    for (let data of users) {
      let upDateInfo = {};
      upDateInfo = {
        id: adminId.value,
        email: adminEmail.value,
        password: adminPassword.value,
        name: adminName.value,
        designation: adminTitle.value,
      };
      fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(upDateInfo),
      })
        .then((res) => res.json())
        .then((users) => {
          alert("Successfuly Added");
        })
        .catch(function () {});
    }
  });
}
//search user funtion
const searchAdmin = document.getElementById("search-form-admin");


searchAdmin.addEventListener("change", (event) => {
  event.preventDefault();

  employeesList.innerHTML = "";
  let str = document.getElementById("search-str-admin");
  letter = str.value;
  filterUsersAdmin(letter).then((data) => renderEmployees(data));
});

searchAdmin.addEventListener("submit", (event) => {
  event.preventDefault();

  employeesList.innerHTML = "";
  let str = document.getElementById("search-str-admin");
  letter = str.value;
  filterUsersAdmin(letter).then((data) => renderEmployees(data));
});


async function filterUsersAdmin(str) {
  const users = await fetch(`http://localhost:3000/users?name_like=${str}`);
  return users.json();
}

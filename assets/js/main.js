//const fetch = require('node-fetch');
let timeIn;
let timeOut;
let usersn;
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  let clockIn = document.getElementById("clock-in");

  clockIn.addEventListener("click", () => {
    clockInTime();
  });
});
//get DOM elements
let clockOut = document.getElementById("clock-out");
let usersList = document.getElementById("list-results");
let userTitle = document.getElementById("title");
let userDesignation = document.getElementById("designation");
let userId = document.getElementById("id");
let userEmail = document.getElementById("user-email");
let timeStampList = document.getElementById("timestamp-results");
function fetchData() {
  fetch("http://localhost:3000/users")
    .then((resp) => resp.json())
    .then((users) => {
      renderUsers(users);
      clockOutTime(users);
      appendTimestamp(users);
    });
}

function renderUsers(users) {
  users.forEach((users) => {
    let list = document.createElement("li");

    list.innerText = users.name;
    usersList.style.listStyle = "none";
    usersList.appendChild(list);

    //render spefic movie details
    list.addEventListener("click", () => {
      userTitle.textContent = users.name;
      userDesignation.textContent = users.designation;
      userId.textContent = users.id;
      userEmail.textContent = users.email;
      timeStampList.innerHTML = "";
      appendTimestamp(users);

      //timeStampList.reload();
    });
  });
}
function appendTimestamp(users) {
  for (let i in users.timestamp) {
    let li = document.createElement("li");
    li.className = "timestamps-list";
    li.innerHTML = users.timestamp[i];
    timeStampList.appendChild(li);
  }
}

function clockInTime() {
  timeIn = new Date();
  return timeIn;
}
function clockOutTime(users) {
  timeOut = new Date();

  clockOut.addEventListener("click", (event) => {
    for (let data of users) {
      if (userId.innerText === data.id) {
        const index = users.indexOf(data);
        let upDateInfo = {};

        function upDateStamp() {
          let newtimestamp = [
            `${timeIn.toGMTString()} - ${timeOut.toGMTString()}`,
          ];
          var newt = [[...newtimestamp]];

          //          newt[0].push(newtimestamp);

          //console.log(newtimestamp);
          upDateInfo = {
            timestamp: [...newt],
          };
        }

        upDateStamp();

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
            //console.log(users)
            // calSalary(users);
            appendTimestamp(users);
          })
          .catch(function () {});
      } else {
      }
    }
  });
}

const searchBar = document.querySelector("#search");
searchBar.addEventListener("keyup", (event) => {
  const letter = event.target.value;
  usersList.innerHTML = "";

  const userListr = usersn.filter((user) => {
    //user = users.name;
    //console.log(user);
    return user.startsWith(letter);
  });

  userListr.forEach((element) => renderUsers(element));
});

function lastSeen(users) {
  let now = new Date();
  let difference = Math.abs(now - this.clockOut);
  days = Math.ceil(difference / (1000 * 3600 * 24));
  return days;
}
// function calSalary(users) {
//   let mainCard = document.ge  tElementById("main-card");
//   let timeIn;
//   mainCard.addEventListener("click", () => {
//     //console.log("yes");
//     for (let data of users) {
//       if (userId.innerText === data.id) {
//         //   const index = users.indexOf(data);
//         // console.log(data.timestamp);
//         for (let i in data.timestamp) {
//           timeIn = data.timestamp[i].split("-");
//           //console.log(timeIn[0]);
//           // console.log(timeIn[1]);
//           //console.log("nope");
//         }
//         //convert date f=string back to date obj
//         var serialized = JSON.stringify(timeIn[0]);
//         var tStart = new Date(JSON.parse(serialized));
//         var serializedp = JSON.stringify(timeIn[1]);
//         var tEnd = new Date(JSON.parse(serializedp));

//         console.log(tStart);

//         //console.log(deserialized.getHours());
//         let now = new Date();
//         now.toGMTString();
//         // console.log(typeof now);
//         //console.log(now.toGMTString());
//       }
//     }
//   });
// }

// class Timestamp{
//     constructor(clockIn,clockOut,timeStamp){
//         this.clockIn=clockIn;
//         this.clockOut=clockOut;
//         this.timeStamp=timeStamp
//     }
//     get totalHours(){
//         return this.clockOut.getHours()-this.clockIn.getHours();
//     }
//     get lastSeen(){
//         let now=new Date();
//         let difference = Math.abs(now - this.clockOut);
//         days =Math.ceil(difference/(1000*3600*24));
//         return days;
//     }
//     get weekWage(){
//         this.timeStamp=[
//             ['Thu, 23 Jun 2022 07:21:09  GMT','Thu, 23 Jun 2022 17:21:09  GMT'],
//             ['Thu, 24 Jun 2022 07:21:09  GMT','Thu, 24 Jun 2022 17:21:09  GMT']
//         ]
//         const time = this.timeStamp.split(' ');
// console.log(words[3]);

//     }

// }

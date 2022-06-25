document.addEventListener("DOMContentLoaded", () => {
  fetchEmployeesData();
  let username = document.getElementById("card-title");
  var calLastSeen = (users) => {
    let timeIn;
    for (let data of users) {
      if (data.name == username.value) {
        let data = data;
        for (let i in data.timestamp) {
          timeIn = data.timestamp[i].split("-");
        }
        var serialized = JSON.stringify(timeIn[1]);
        var tStart = new Date(JSON.parse(serialized));
        let now = new Date();
        let difference = Math.abs(now - tStart);
        days = Math.ceil(difference / (1000 * 3600 * 24));
        console.log(days);
      }
    }
    return days;
  };

  let cardName = document.getElementById("card-title");
  let cardTitle = document.getElementById("card-designation");
  let card = document.getElementById("card");
  let cardswrapper = document.getElementById("employee-cards");
  function fetchEmployeesData() {
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((users) => {
        appendCard(users);
        //calLastSeen(users);
      });
  }

  function appendCard(users) {
    users.forEach((users) => {
      let list = document.createElement("li");
      //timeIn = users.timestamp.split("-");
      // let i = (stamp) => {
      //   timeIn = stamp.split("-");

      //   var serialized = JSON.stringify(timeIn[1]);
      //   var tStart = new Date(JSON.parse(serialized));
      //   console.log(tStart);
      //   return tStart;
      // };

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
      cardswrapper.appendChild(list);
    });
  }
});

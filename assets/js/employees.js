document.addEventListener("DOMContentLoaded", () => {
  getUsers();
  let username = document.getElementById("card-title");

  //function to compute lastseen
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

  //call fetch with apend card as argument
  //funtion fetch and renders data from randomuser api
  getUsers().then((data) => appendCard(data));
  function appendCard(users) {
    users.results.forEach((users) => {
      let list = document.createElement("li");
      //timeIn = users.timestamp.split("-");
      // let i = (stamp) => {
      //   timeIn = stamp.split("-");
      //convert date string to date object
      //   var serialized = JSON.stringify(timeIn[1]);
      //   var tStart = new Date(JSON.parse(serialized));
      //   console.log(tStart);
      //   return tStart;
      // };

      //data.results[0].login.username;
      list.innerHTML = `
           <div class=card>
              <div class=top>
                   <img src=${users.picture.medium}>
                  <h3 id=card-title> ${
                    users.name.first + " " + users.name.last
                  }</h3>
              </div>
              <div class="bottom">
                <h5 id="card-designation">${users.location.city}</h5>
                <p>${Math.floor(
                  Math.random() * 10
                )}<span>&nbsp;days ago</span></p>
              </div>
          </div>`;
      cardswrapper.appendChild(list);
    });
  }
});
//randomuser api fetch
async function getUsers() {
  const users = await fetch("https://randomuser.me/api/?results=10");
  return users.json();
}

//getUsers().then((data) => console.log(data.results[0].login.username));

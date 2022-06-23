//const fetch = require('node-fetch');
let timeIn;
let timeOut;
document.addEventListener('DOMContentLoaded',()=>{
    fetchData()
    let clockIn=document.getElementById('clock-in');
    
    
    clockIn.addEventListener('click',()=>{
        clockInTime()
        
    
    });
   
})
//get DOM elements
let clockOut=document.getElementById('clock-out');
let usersList=document.getElementById('list-results');
let userTitle=document.getElementById('title');
let userDesignation=document.getElementById('designation');
let userId = document.getElementById('id');
let timeStampList=document.getElementById('timestamp-results');
function fetchData() {
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((users) => {
      
          renderUsers(users);
          clockOutTime(users);
          appendTimestamp(users)
    });
}
function renderUsers(users){
    users.forEach(users=>{
        let list =document.createElement('li');
        list.innerText= users.name;
        usersList.appendChild(list);
       
        //render spefic movie details
        list.addEventListener('click',()=>{
            userTitle.textContent=users.name;
            userDesignation.textContent=users.designation;
            userId.textContent=users.id;
            appendTimestamp(users)
            
            

        })

    })

}
function appendTimestamp(users){
    for (let i in users.timestamp){
        let li=document.createElement('li');    2
        li.innerHTML=users.timestamp[i];
        timeStampList.appendChild(li);
    }
}


function clockInTime(){
    timeIn=new Date();
    return timeIn;

}
function clockOutTime(users){
    timeOut=new Date();
    clockOut.addEventListener('click',()=>{
    for(let data of users){
        if (userId.innerText === data.id){
            const index = users.indexOf(users);
            
            let newtimestamp=`${timeIn} - ${timeOut}`
            //console.log(newtimestamp);
            const upDateInfo = { 
                id: data.id,
                email: data.email,
                password: data.password,
                name:data.name,
                designation:data.designation,
                timestamp:newtimestamp
            };
    //console.log(newVotes)
    
            fetch(`http://localhost:3000/users/${index + 1}`,{ 
                method:'PATCH',
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body:JSON.stringify(upDateInfo)
            })
            .then(res => res.json())
            .then(users => {
                //console.log(users)
                
                appendTimestamp(users)
            })
            .catch(function (){ 
                
            })       
        }else{

        }
}

})

}


































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
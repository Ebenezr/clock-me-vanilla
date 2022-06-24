document.addEventListener("DOMContentLoaded", () => {
  //panels
  const dashboard = document.getElementById("dashboard");
  const admin = document.getElementById("admin");
  const employee = document.getElementById("employee");
  const timecard = document.getElementById("timecard");
  //buttons
  const dashboardBtn = document.getElementById("btn-dashboard");
  const adminBtn = document.getElementById("btn-admin");
  const employeeBtn = document.getElementById("btn-employee");
  const timecardBtn = document.getElementById("btn-timecard");
  //icons
  const dashIcon = document.getElementById("dashboard-icon");
  const adminIcon = document.getElementById("admin-icon");
  const empIcon = document.getElementById("emp-icon");
  const timeIcon = document.getElementById("time-icon");

  dashboardBtn.addEventListener("click", (event) => {
    event.preventDefault();
    admin.style.display = "none";
    employee.style.display = "none";
    timecard.style.display = "none";
    dashboard.style.display = "block";
    //change btns bgs
    dashboardBtn.style.backgroundColor = "#fca311";
    adminBtn.style.backgroundColor = "#14213d";
    employeeBtn.style.backgroundColor = "#14213d";
    timecardBtn.style.backgroundColor = "#14213d";
    //change icons color
    timeIcon.style.color = "#fca311";
    adminIcon.style.color = "#fca311";
    empIcon.style.color = "#fca311";
    dashIcon.style.color = "#ffff";
  });

  adminBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dashboard.style.display = "none";
    employee.style.display = "none";
    timecard.style.display = "none";
    admin.style.display = "block";
    //change btn bgs
    adminBtn.style.backgroundColor = "#fca311";
    dashboardBtn.style.backgroundColor = "#14213d";
    employeeBtn.style.backgroundColor = "#14213d";
    timecardBtn.style.backgroundColor = "#14213d";
    //change icons color
    timeIcon.style.color = "#fca311";
    adminIcon.style.color = "#ffff";
    empIcon.style.color = "#fca311";
    dashIcon.style.color = "#fca311";
  });
  employeeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    admin.style.display = "none";
    dashboard.style.display = "none";
    timecard.style.display = "none";
    employee.style.display = "block";
    //change btn bgs
    employeeBtn.style.backgroundColor = "#fca311";
    dashboardBtn.style.backgroundColor = "#14213d";
    timecardBtn.style.backgroundColor = "#14213d";
    adminBtn.style.backgroundColor = "#14213d";
    //change icons color
    timeIcon.style.color = "#fca311";
    adminIcon.style.color = "#fca311";
    empIcon.style.color = "#ffff";
    dashIcon.style.color = "#fca311";
  });
  timecardBtn.addEventListener("click", (event) => {
    event.preventDefault();
    admin.style.display = "none";
    employee.style.display = "none";
    dashboard.style.display = "none";
    timecard.style.display = "block";
    //change btn bgs
    timecardBtn.style.backgroundColor = "#fca311";
    employeeBtn.style.backgroundColor = "#14213d";
    dashboardBtn.style.backgroundColor = "#14213d";
    adminBtn.style.backgroundColor = "#14213d";
    //change icons color
    timeIcon.style.color = "#ffff";
    adminIcon.style.color = "#fca311";
    empIcon.style.color = "#fca311";
    dashIcon.style.color = "#fca311";
  });
});

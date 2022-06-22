document.addEventListener('DOMContentLoaded',()=>{

    const dashboard=document.getElementById('dashboard');
    const admin=document.getElementById('admin');
    const employee=document.getElementById('employee');
    const timecard=document.getElementById('timecard');

    const dashboardBtn=document.getElementById('btn-dashboard');
    const adminBtn=document.getElementById('btn-admin');
    const employeeBtn=document.getElementById('btn-employee');
    const timecardBtn=document.getElementById('btn-timecard');


    dashboardBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        admin.style.display="none"
        employee.style.display="none"
        timecard.style.display="none"
        dashboard.style.display="block"

    })

    adminBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        dashboard.style.display="none"
        employee.style.display="none"
        timecard.style.display="none"
        admin.style.display="block"

    })
    employeeBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        admin.style.display="none"
        dashboard.style.display="none"
        timecard.style.display="none"
        employee.style.display="block"

    })
    timecardBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        admin.style.display="none"
        employee.style.display="none"
        dashboard.style.display="none"
        timecard.style.display="block"

    })



    
})
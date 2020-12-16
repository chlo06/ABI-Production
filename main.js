const form1 = document.querySelector('#myForm').addEventListener("save",(e)=>{
    e.preventDefault();
    const staff = [];
    const registrationNumber = document.getElementById("clientNumber").value;
    const contrat = document.getElementById("contrat").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const qualification = document.getElementById("qualification").value;
    const salary = document.getElementById("salary").value;
    const hiringDate = document.getElementById("hiringDate").value;
    const endContratDate = document.getElementById("endContratDate").value;
    

    staff.push ({
        registrationNumber,
        contrat,
        firstName,
        lastName,
        qualification,
        salary,
        hiringDate,
        endContratDate,
    })

    console.log(registrationNumber)
    console.log(contrat)
    console.log(firstName)
    console.log(lastName)
    console.log(qualification)
    console.log(salary)
    console.log(hiringDate)
    console.log(endContratDate)

    console.log(staff)
})


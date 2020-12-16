document.getElementById("myForm").addEventListener("save",(e) => {
    e.preventDefault();
    const staffList = [];
    const registrationNumber = document.getElementById("clientNumber").value;
    const contrat = document.getElementById("contrat").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const qualification = document.getElementById("qualification").value;
    const salary = document.getElementById("salary").value;
    const hiringDate = document.getElementById("hiringDate").value;
    const endContratDate = document.getElementById("endContratDate").value;
    
    staffList.push(registrationNumber);
    staffList.push(contrat);
    staffList.push(firstName);
    staffList.push(lastName);
    staffList.push(qualification);
    staffList.push(salary);
    staffList.push(hiringDate);
    staffList.push(endContratDate);


    console.log(registrationNumber)
    console.log(contrat)
    console.log(firstName)
    console.log(lastName)
    console.log(qualification)
    console.log(salary)
    console.log(hiringDate)
    console.log(endContratDate)

    console.log(staffList)
})

//localStorage.setItem(staffList);
//let test = localStorage.getItem (staffList);

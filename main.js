document.getElementById("form").addEventListener("save",(e) => {
    e.preventDefault();
    const staffList = [];
    let staff = '';
    const mbody = document.getElementById("newStaff");
    const tr = document.createElement ('tr');
    const td = [];
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

    tbody.appendChild(tr);
    for(let i =0; i<staffList.length; i++){
        td[i] = document.createElement ('td');
        tr.appendChild (td[i]);
        td[i].innerHTML = staffList[i];
    }

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

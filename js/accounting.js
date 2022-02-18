'use strict';
// document.writeln("<script src=js/app.js'></script>");
let tableDiv = document.getElementById("tableDiv");

let arrOfEmp = JSON.parse(localStorage.getItem("allEmps"));

// console.log(arrOfEmp);
function createHeader() {
    let tr = document.createElement("tr");
    tableDiv.appendChild(tr);

    let depName = document.createElement("th");
    depName.textContent = "Department Name";
    tr.appendChild(depName);

    let numOfEmp = document.createElement("th");
    numOfEmp.textContent = "number of employees";
    tr.appendChild(numOfEmp);

    let totalSalary = document.createElement("th");
    totalSalary.textContent = "total Salary";
    tr.appendChild(totalSalary);

    let averageSalary = document.createElement("th");
    averageSalary.textContent = "average Salary";
    tr.appendChild(averageSalary);

}
createHeader();

function createBody() {
    let empsInDevelopment = 0;
    let deveSalary = 0;
    let empsInAdministration = 0;
    let adminSalary = 0;
    let empInFinance = 0;
    let financeSalary = 0;
    let empInMarketing = 0;
    let marketingSalary = 0;
    let totalEmp = 0;
    let totalSalary = 0

    for (let i = 0; i < arrOfEmp.length; i++) {
        if (arrOfEmp[i].department === "Development") {
            empsInDevelopment += 1;
            totalEmp += 1;
            deveSalary += arrOfEmp[i].salary;
            totalSalary  += arrOfEmp[i].salary;
        }
        else if (arrOfEmp[i].department === "Administration") {
            empsInAdministration += 1;
            totalEmp += 1;
            adminSalary += arrOfEmp[i].salary;
            totalSalary  += arrOfEmp[i].salary;
        }
        else if (arrOfEmp[i].department === "Finance") {
            empInFinance += 1;
            totalEmp += 1;
            financeSalary += arrOfEmp[i].salary;
            totalSalary  += arrOfEmp[i].salary;

        }
        else {
            empInMarketing += 1;
            totalEmp += 1;
            marketingSalary += arrOfEmp[i].salary;
            totalSalary  += arrOfEmp[i].salary;

        }
    }

    let arr = ["Development", empsInDevelopment, deveSalary, deveSalary / empsInDevelopment];

    let tr = document.createElement("tr");
    tableDiv.append(tr);
    for (let i = 0; i < arr.length; i++) {

        let dep4 = document.createElement("td");
        dep4.textContent = `${arr[i]}`;
        tr.appendChild(dep4);

    }

    let arr2 = ["Administration", empsInAdministration, adminSalary, adminSalary / empsInAdministration]
    let tr2 = document.createElement("tr");
    tableDiv.append(tr2);
    for (let i = 0; i < arr.length; i++) {

        let dep4 = document.createElement("td");
        dep4.textContent = `${arr2[i]}`;
        tr2.appendChild(dep4);
    }

    let arr3 = ["Finance", empInFinance, financeSalary, financeSalary / empInFinance];
    let tr3 = document.createElement("tr");
    tableDiv.append(tr3);
    for (let i = 0; i < arr.length; i++) {

        let dep4 = document.createElement("td");
        dep4.textContent = `${arr3[i]}`;
        tr3.appendChild(dep4);
    }

    let arr4 = ["Marketing", empInMarketing, marketingSalary, marketingSalary / empInMarketing]

    let tr4 = document.createElement("tr");
    tableDiv.append(tr4);

    for (let i = 0; i < arr.length; i++) {

        let dep4 = document.createElement("td");
        dep4.textContent = `${arr4[i]}`;
        tr4.appendChild(dep4);
    }


    let arr5 = ["Total", totalEmp, totalSalary, totalSalary/totalEmp];

    let tr5 = document.createElement("tr");
    tableDiv.append(tr5);
    for (let i = 0; i < arr.length; i++) {

        let dep4 = document.createElement("td");
        dep4.textContent = `${arr5[i]}`;
        tr5.appendChild(dep4);
    }


    


}
createBody();

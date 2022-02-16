"use strict";

let allEmp = [];


function Employee(fullName, dep, level, img, salary, id) {
    this.employeeID = id; //random
    this.fullName = fullName;
    this.department = dep;
    this.level = level;
    this.img = img;
    this.salary = salary; //random

    allEmp.push(this);
}

Employee.prototype.calcutateSalary = function () {
    let min = 0;
    let max = 0;

    if (this.level === "Junior") {
        max = 1000;
        min = 500;
    }
    else if (this.level === "Mid-Senior") {
        max = 1500;
        min = 1000;
    }
    else {
        max = 2000;
        min = 1500;
    }
    let salary = Math.floor(Math.random() * (max - min + 1) + min);
    return salary - (salary * 0.075);
}

let empInfo = document.getElementById("empInfo");
let nameDiv = document.getElementById("nameDiv");
let levelDiv = document.getElementById("levelDiv");
let imgDiv = document.getElementById("imgDiv");
let depDiv = document.getElementById("depDiv");
let salaryDiv = document.getElementById("salaryDiv")
let idDiv = document.getElementById("idDiv");

Employee.prototype.renderOnHome = function () {

    
    let container = document.createElement("div");
    container.style.border = "solid";


    let fullName = document.createElement("p");
    fullName.textContent = `Name: ${this.fullName}`;
    container.appendChild(fullName);


    let level = document.createElement("p");
    level.textContent = `Level: ${this.level}`;
    container.appendChild(level);


    let dep = document.createElement("p");
    dep.textContent = `Department: ${this.department}`;
    container.appendChild(dep);


    let img = document.createElement("img");
    img.setAttribute("src", this.img);
    img.style.width = "100px";
    container.appendChild(img);



    let salary = document.createElement("p");
    salary.textContent = `Salary: ${this.salary}`;
    container.appendChild(salary);


    let id = document.createElement("p");
    id.textContent = `ID: ${this.employeeID}`;
   
    container.appendChild(id);

    empInfo.appendChild(container);

}

Employee.prototype.randomID = function () {

    let random = Math.floor(1000 + Math.random() * 9000);
    return random;
}

let form = document.getElementById("form");
form.addEventListener("submit", submitHandler);

function submitHandler(event) {
    event.preventDefault();

    let fullName = event.target.fullName.value;
    let dep = event.target.dep.value;
    let level = event.target.level.value;
    let imgUrl = event.target.imgUrl.value;


    let newEmp = new Employee(fullName, dep, level, imgUrl);

    newEmp.salary = newEmp.calcutateSalary();
    newEmp.employeeID = newEmp.randomID();

    
    console.log(fullName);
    console.log(level);
    console.log(dep);
    console.log(newEmp.calcutateSalary());
    console.log(newEmp);
    renderAll();
    form.reset();

}
// let emp0 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
// let emp1 = new Employee(1001, "Lana Ali", "Finance", "Senior");
// let emp2 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
// let emp3 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
// let emp4 = new Employee(1004, "Omar Zaid", "Development", "Senior");
// let emp5 = new Employee(1005, "Rana Saleh", "Development", "Junior");
// let emp6 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

function renderAll() {
    empInfo.innerHTML = "";
    for (let i = 0; i < allEmp.length; i++) {
        allEmp[i].calcutateSalary();
        allEmp[i].randomID();
        allEmp[i].renderOnHome();
    }
}
renderAll();



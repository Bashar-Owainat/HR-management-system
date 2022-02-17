"use strict";
document.writeln("<script type='text/javascript' src='/js/accounting.js'></script>");

let allEmp = [];
let id = 1000;

function Employee(fullName, dep, level, imgUrl) {
    this.employeeID = 0; //random
    this.fullName = fullName;
    this.department = dep;
    this.level = level;
    this.imgUrl = imgUrl;
    this.salary = 0; //random
    this.numOfEmp = 0;

    allEmp.push(this);
}

Employee.prototype.assignSalary = function () {
    let min = 0;
    let max = 0;
    let netSalary = 0;

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
    netSalary = salary - (salary * 0.075);
    this.salary = netSalary;
}

let empInfo = document.getElementById("empInfo");


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
    img.setAttribute("src", this.imgUrl);
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
function generateId(){
    
    return id++;
}
Employee.prototype.uniqueID = function () {

    this.employeeID = generateId();
}



function saveEmp(){
    let formattedData = JSON.stringify(allEmp);
    localStorage.setItem("allEmp",formattedData);
}

function getEmp(){
    let allEmp = localStorage.getItem("allEmp");
    let parseEmp = JSON.parse(allEmp);

    allEmp = [];

    if(parseEmp != null){
       
        for(let i = 0; i < parseEmp.length; i++){
            new Employee(parseEmp[i].fullName, parseEmp[i].dep, parseEmp[i].level, parseEmp[i].imgUrl);

        }
    }
    renderAll();
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

    newEmp.assignSalary();
    newEmp.uniqueID();

    
    // console.log(fullName);
    // console.log(level);
    // console.log(dep);
    // console.log(newEmp.assignSalary());
    // console.log(newEmp);
   
    // form.reset();

    renderAll();
    saveEmp();


}
let emp0 = new Employee( "Ghazi-Samer", "Administration", "Senior", "/assets/Ghazi-Samer.jpg");
let emp1 = new Employee("Lana-Ali", "Finance", "Senior", `/assets/Lana-Ali.jpg`);
let emp2 = new Employee( "Tamara-Ayoub", "Marketing", "Senior", `/assets/Tamara-Ayoub.jpg`);
let emp3 = new Employee( "Safi-Walid", "Administration", "Mid-Senior", `/assets/Safi-Walid.jpg`);
let emp4 = new Employee( "Omar-Zaid", "Development", "Senior", `/assets/Omar-Zaid.jpg`);
let emp5 = new Employee( "Rana-Saleh", "Development", "Junior", `/assets/Rana-Saleh.jpg`);
let emp6 = new Employee( "Hadi-Ahmad", "Finance", "Mid-Senior", `/assets/Hadi-Ahmad.jpg`);


//
function renderAll() {

    empInfo.innerHTML = "";

    for (let i = 0; i < allEmp.length; i++) {
        allEmp[i].assignSalary();
        allEmp[i].uniqueID();
        allEmp[i].renderOnHome();
    }
    console.log(allEmp);
}

console.log(allEmp);


renderAll();
getEmp();
"use strict";

let allEmp = [];
function Employee(empID, fullName, dep, level){
    this.employeeID = empID;
    this.fullName = fullName;
    this.department = dep;
    this.level = level;
    this.img = ``;
    allEmp.push(this);
}

Employee.prototype.calcutateSalary = function(max, min){
   
    let salary = Math.floor(Math.random()*(max-min+1)+min);
    return salary + (salary * 0.075);
}

Employee.prototype.renderOnHome = function(){
    if(this.level === "Junior"){
emp0.renderOnHome();
        document.write(`<h2> Name: ${this.fullName}-----|------ Salary: </h> ${this.calcutateSalary(1000,500)}`);
    }
    else if (this.level === "Mid-Senior"){
        document.write(`<h2> Name: ${this.fullName}------|------Salary: </h> ${this.calcutateSalary(1500,1000)}`);
    }
    else{
        document.write(`<h2> Name: ${this.fullName}------|------Salary: </h> ${this.calcutateSalary(2000,1500)}`);
    }
}

let emp0 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
let emp1 = new Employee(1001, "Lana Ali", "Finance", "Senior");
let emp2 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let emp3 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let emp4 = new Employee(1004, "Omar Zaid", "Development", "Senior");
let emp5 = new Employee(1005, "Rana Saleh", "Development", "Junior");
let emp6 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

// emp0.renderOnHome();
// emp1.renderOnHome();
// emp2.renderOnHome();
// emp3.renderOnHome();
// emp4.renderOnHome();
// emp5.renderOnHome();
// emp6.renderOnHome();

// Employee.prototype.print = function(){
    for(let i = 0; i < allEmp.length; i++){
        allEmp[i].renderOnHome();
    }
// }


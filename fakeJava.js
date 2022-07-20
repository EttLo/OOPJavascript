// Java copy-cat
class Employee {
    constructor(name, surname, sex) {
        this.name = name;
        this.surname = surname;
        this.sex = sex;
    }

    sayHello() {
        console.log(`Hi from ${this.name}`);
    }
}
let emp = new Employee("Ciccio", "Pasticcio", "Male");
console.log(emp.surname);
emp.sayHello();

class Manager extends Employee {
    constructor(name, surname, sex, yearsOfExperience, bonusSalary) {
        super(name, surname, sex);
        this.yearsOfExperience = yearsOfExperience;
        this.bonusSalary = bonusSalary;
    }

    fire() {
        console.log(this.yearsOfExperience);
        console.log(this.name);
        console.log("You're fired! Bye bye");
    }
}
let manager = new Manager("Ciccio", "Pasticcio", "Male", 10, 1000);
manager.fire();
manager.sayHello();
let div = document.getElementById("myDiv");
div.innerHTML = "<div id = 'subDiv'> <p> 'Ciao Mondo' </p> </div>";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let div2 = document.querySelector("#myDiv");
let divs = document.querySelectorAll(".myDiv"); //JQuery copy-cat

//callback, it will be called later on
function loadDocument() {
    let ajax = new XMLHttpRequest(); //Async javascript and XML
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let k = this.responseText.replace("[{", "{");
            k = k.replace("}]", "}");
            let splittedData = this.responseText.split("},");
            // document.querySelector('#employeeTableData').innerHTML = this.responseText;
            splittedData.forEach(row => {
                document.querySelector('#employeeTableRows').innerHTML = "<tr id='employeeTableRow'></tr>";
                let column = row.split(",")
                column.forEach(datapoint => {
                    datapoint = datapoint.replace("{", "");
                    datapoint = datapoint.replace("}", "");
                    document.querySelector('#employeeTableRow').innerHTML = "<td>" + datapoint + "</td>";
                });
            });
        }
    };
    ajax.open("GET", "data.json");
    ajax.send();
}

let b = getElementById("getEmployeeTableData")
b.onclick = loadDocument();




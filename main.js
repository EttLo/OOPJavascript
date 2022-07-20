//x and y are the same thing
let x = {   //Object literal: assign content when creating variable
    name: "ciccio",
    role: "developer",
    sayHello: function(){
        console.log("Hello from " + this.name);
        console.log(`I am a ${this.role}`); //back ticks instead of quotation marks
    }
};             
let y = new Object();   //
x.sex = "Male";
console.log(x.sex);
x.sayHello();

//Capitalised letter when it is a constructor function
function Employee(name, surname, sex){
    this.name = name;
    this.surname = surname;
    this.sex = sex;
    this.sayHi = function(){
        console.log(`I am ${name} ${surname}`);
    }
}

let emp = new Employee("Ciccio", "Pasticcio", "Male");
console.log(emp.surname);
emp.sayHi();
// Employee == emp.constructor
let empProto = Employee.prototype;
let z = emp.constructor.prototype;
console.log(z == empProto); //true
let empProto2 = emp.__proto__;
console.log(empProto2);
console.log(empProto2 == empProto); //true
Employee.prototype.intelligentMethod = function(num){
    console.log(num * 2);
    console.log(this.sex); //This refers to the object, not the prototype 
}
emp.intelligentMethod(5);

function Manager(name, surname, sex, yearsOfExperience, bonusSalary){
    // this.name = name;
    // this.surname = surname;
    // this.sex = sex;
    console.log(`Output Manager constructor: ${this}`);
    Employee.call(this,name, surname, sex);
    // Employee.apply(this, [name, surname, sex]); //Use array for apply
    this.yearsOfExperience = yearsOfExperience;
    this.bonusSalary = bonusSalary;
}

Manager.prototype = new Employee(); //Prototype sub-class --> constructor super-class
Manager.prototype.fire = function(){
    console.log(this.yearsOfExperience);
    console.log("You're fired!");
}
let manager = new Manager("Alessio", "Cimaglia", "Male",5, 1000);
manager.fire();
manager.intelligentMethod(3);
Manager.prototype.constructor = Manager; 
console.log(manager.constructor);
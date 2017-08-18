"use strict";
let student = {
    name: "",
    gpa: 0,
    toString: function () {
        return "Student: name is " + this.name
                + " gpa is " + this.gpa
                + " courses " + this.courses;
    },
    smarterThanMe : function() {
        return s => s.gpa > this.gpa;
    }
// DO NOT DO THIS!!!
//    smarterThanMe : () => s => s.gpa > this.gpa
};

function Student(name, gpa, ...courses) {
    this.name = name;
    this.gpa = gpa;
    this.courses = courses === undefined ? [] : courses;
}

Student.prototype = student;
Student.orderByName = function (s1, s2) {
    return s1.name.localeCompare(s2.name);
};
Student.isEnthusiastic = function (s) {
    return s.courses.length > 2;
};
Student.isSmart = s => s.gpa > 3.4;

Student.smarterThan = threshold => s => s.gpa > threshold;

let fred = new Student("Fred", 3.2, "Math", "Physics");
let jim = new Student("Jim", 3.5, "Physics");
let sheila = new Student("Sheila", 3.9, "Math",
        "Physics", "Quantum Mechanics");

let roster = [fred, sheila, jim];

for (let s of roster) {
    console.log("> " + s);
}

//let smartnessFunction = Student.smarterThan(3.4);
//console.log("about to filter students");
//console.log("" + roster.filter(smartnessFunction));
//
function studentIsSmarterThan(t, s) {
    return s.gpa > t;
}

function getSmarterThan(threshold) {
    return function (s) {
        return s.gpa > threshold;
    }
}

console.log("-----------------------------------");
//console.log("" + roster.filter(studentIsSmarterThan));
roster
        .filter(studentIsSmarterThan.bind(undefined, 3.4))
        .forEach(s=>console.log(s.toString()));

function showStuff(x) {
    console.log("x is " + x);
    console.log(" this is " + this);
}

showStuff("Hello");

let f = showStuff.bind("Huh?", "Bonjour");
f();

showStuff.call("Really?", "One", "Two");
showStuff.apply("Again?", ["Un", "Deux"]);

function showMyName() {
    console.log("my name is " + this.name);
}

//showMyName();
showMyName.call({name: "Freddy"});

student.showTheName = showMyName;
fred.showTheName();

jim.showTheName();

let myBusiness = {
    name: "The best waffle company",
    lineOfBusiness: "sugary goodness",
    gpa:"Irrelevant",
    courses:"Down at the horse track"
};

myBusiness.showMeYourName = showMyName;
myBusiness.showMeYourName();
myBusiness.toString = student.toString;

console.log("mb is " + myBusiness);


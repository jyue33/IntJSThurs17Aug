"use strict";
let student = {
    name: "",
    gpa: 0,
    toString: function () {
        return "Student: name is " + this.name
                + " gpa is " + this.gpa
                + " courses " + this.courses;
    }
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

let fred = new Student("Fred", 3.2, "Math", "Physics");
let jim = new Student("Jim", 3.5, "Physics");
let sheila = new Student("Sheila", 3.9, "Math",
        "Physics", "Quantum Mechanics");

let roster = [fred, sheila, jim];

for (let s of roster) {
    console.log("> " + s);
}

function getStudents(students, criterion) {
    let rv = [];
    for (let s of students) {
        if (criterion(s)) {
            rv.push(s);
        }
    }
    return rv;
}

console.log("----------------------------");
function isSmart(s) {
    return s.gpa > 3.4;
}

function isEnthusiastic(s) {
    return s.courses.length > 2;
}

for (let s of getStudents(roster, isSmart)) {
    console.log(""+ s);
}
console.log("----------------------------");

for (let s of getStudents(roster, isEnthusiastic)) {
    console.log(""+ s);
}


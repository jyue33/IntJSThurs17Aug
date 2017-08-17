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

let smartnessFunction = Student.smarterThan(3.4);
console.log("about to filter students");
console.log("" + roster.filter(smartnessFunction));


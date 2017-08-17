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
        // patch around "bug" in design of JavaScript
        let self = this;
        return function(s) {
            return s.gpa > self.gpa;
        };
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
Student.isEnthusiastic = function (s) {
    return s.courses.length > 2;
};
Student.isSmart = function (s) {
    return s.gpa > 3.4;
};
Student.smarterThan = function (threshold) {
    console.log("in smarterThan factory");
    return function (s) {
        console.log("in the test, threshold is " + threshold);
        return s.gpa > threshold;
    };
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

function inverse(f) {
    return function (x) {
        return !f(x);
    };
}

function and(f1, f2) {
    return function (x) {
        return f1(x) && f2(x);
    }
}

function or(f1, f2) {
    return function (x) {
        return f1(x) || f2(x);
    }
}

//for (let s of getStudents(roster, Student.isSmart)) {
//    console.log("" + s);
//}
//console.log("----------------------------");
//
//for (let s of getStudents(roster, Student.isEnthusiastic)) {
//    console.log("" + s);
//}
//inverse(Student.isEnthusiastic)
//console.log("----------------------------");
//
//for (let s of getStudents(roster, inverse(Student.isEnthusiastic))) {
//    console.log("" + s);
//}
//
//let text = [
//    "short", "quite a bit longer", "Starts with a capital",
//    "stuff", "fairly long"
//];
//
//console.log("----------------------------");
//
//function long(s) {
//    return s.length > 6;
//}
//
//function reallyLong(s) {
//    return s.length > 12;
//}
//
//console.log("" + text.filter(and(long, inverse(reallyLong))));
//

let smartnessFunction = Student.smarterThan(3.4);
console.log("about to filter students");
console.log("" + roster.filter(smartnessFunction));

console.log("----------------------------");
smartnessFunction = Student.smarterThan(3.7);
console.log("about to filter students again");
console.log("" + roster.filter(smartnessFunction));
console.log("----------------------------");

smartnessFunction = jim.smarterThanMe();
console.log("about to filter students again");
console.log("" + roster.filter(smartnessFunction));
console.log("----------------------------");


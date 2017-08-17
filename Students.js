
"use strict";
let student = {
    name: "",
    gpa: 0,
    // probably bad to have array here, 
    // as behaviors like addCourse below
    // risk pushing into the prototype 
    // course array, not an new one...
//    courses : [],
    toString: function () {
        return "Student: name is " + this.name
                + " gpa is " + this.gpa
                + " courses " + this.courses;
    },
    addCourse: function (course) {
        this.courses.push(course);
    },
};

function Student(name, gpa, ...courses) {
    this.name = name;
    this.gpa = gpa;
    this.courses = courses || [];
}
;

Student.prototype = student;
Student.orderByName = function (s1, s2) {
    return s1.name.localeCompare(s2.name);
};

let fred = new Student("Fred", 3.2, "Math", "Physics");
let jim = new Student("Jim", 3.5, "Physics");
let sheila = new Student("Sheila", 3.9, "Math",
        "Physics", "Quantum Mechanics");

console.log("Fred is " + fred);

let roster = [fred, sheila, jim];
//roster[99] = "albert";
//roster[-30] = "weird";
//for (let i = 0; i < roster.length; i++) {
//    console.log("> " + roster[i]);
//}

//roster["fruit"] = "banana";
//for (let k in roster) {
//    console.log("> " + k + " " + roster[k]);
//}
for (let s of roster) {
    console.log("> " + s);
}

console.log("length is " + roster.length);

//function orderStudentByName(s1, s2) {
//    return s1.name.localeCompare(s2.name);
//}

//roster.sort();
roster.sort(Student.orderByName);
console.log("by name--------------------");
for (let s of roster) {
    console.log("> " + s);
}



//let odd = { somevalue : "textual value"};
//odd["a key with space"] = "some value";
//for (let k in odd) {
//    console.log(k + " " + odd[k]);
//}
//let s = "some";
//let v = "value";
//console.log(odd[s + v]);

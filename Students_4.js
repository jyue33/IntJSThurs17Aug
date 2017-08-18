"use strict";

class Student {
    constructor(name, gpa, ...courses) {
        this.name = name;
        this.gpa = gpa;
        this.courses = courses;
        this.bp = "IPA";
    }
    
    toString() {
        return "I'm a student, name is " + this.name
            + " gpa " + this.gpa
            + " courses: " + this.courses;
    }
    
    get beerPref () {
        return this.bp;
    }
    
    set beerPref(value) {
        console.log("Beer pref being set to " + value);
        this.bp = value;
    }
}

let fred = new Student("Fred", 3.2, "Math", "Physics");
let jim = new Student("Jim", 3.5, "Physics");
let sheila = new Student("Sheila", 3.9, "Math",
        "Physics", "Quantum Mechanics");

console.log("Fred is " + fred);

let roster = [fred, sheila, jim];

// not allowed :)
//Student("A", 2);
console.log("Fred likes " + fred.beerPref);

fred.beerPref = "Bitter";
console.log("Fred likes " + fred.beerPref);


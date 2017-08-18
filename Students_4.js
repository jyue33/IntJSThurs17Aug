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

class PhDStudent extends Student {
    constructor(name, gpa, ...courses) {
        super(name, gpa, ...courses);
    }
    
    toString() {
        return "I'm a smartypants..." + super.toString();
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

console.log("fred instanceof Student? " + (fred instanceof Student));
console.log("typeof Student is " + (typeof Student));

let joe = new PhDStudent("Joe", 3.99, "Art", "History");
console.log("joe is a Student? " + (joe instanceof Student));
console.log("joe is a PhDStudent? " + (joe instanceof PhDStudent));
console.log("" + joe);

Object.setPrototypeOf(joe, {
    toString() {
        return "I'm joe, there can be only one as good as me.";
    }
});

console.log("" + joe);
console.log(joe.beerPref);
console.log("joe is a Student? " + (joe instanceof Student));
console.log("joe is a PhDStudent? " + (joe instanceof PhDStudent));

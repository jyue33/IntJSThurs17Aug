"use strict";

class Student {
    constructor(name) {
        this.name = name;
    }
}

class Business {
    constructor(name) {
        this.name = name;
    }
}

let Named = (x) => class extends x {
    getName() {
        return "I'm called " + this.name;
    }
};

let fred = new (Named(Student))("Fred");

console.log(fred.getName());
console.log(fred instanceof Student);

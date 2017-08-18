
"use strict";

function sayHello() {
    console.log("Hello");
}

console.log("1");

setTimeout(sayHello, 1000);

console.log("2");

setTimeout(() => {
    let delay = Math.random() * 2000 + 2000;
    console.log("Starting second delay, waiting for: " + delay);
    setTimeout(() => {
        console.log("Second delay expired");
    }, delay);
}, 1000);

"use strict";

function readFromKeyboard() {
    console.log("readFromKeyboard...");
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("keyboard produced data");
            let result = "data.txt";
            resolve(result);
        }, 2000);
    });
}

function makeUpperCase(x) {
    console.log("uppercasing...");
    return x.toUpperCase();
}

function readFromFile(n) {
    console.log("starting file read");
    return new Promise(function (resolve, reject) {
        let ok = Math.random() > 0.5;
        setTimeout(() => {
            if (ok) {
                resolve("Here is the data that was"
                        + "read from the file called " + n);
            } else {
                reject(new Error("File " + n + " failed to open."));
            }
        }, 2000);
    });
}

readFromKeyboard()
        .then(makeUpperCase)
        .then(readFromFile)
        .then(x=>{
            console.log("success... ");
            return x;
        })
        .then(undefined, e=>{
            console.log("Got a problem: " + e.message);
            return "Here is data from a retry on a different file...";
        })
        .then(x=>{throw new Error("that broke...");})
        .then(undefined, e=>"Repair job after " + e.message)
        .then(x => console.log("pipe completed, result is " + x));

console.log("pipeline configured...");
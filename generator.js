
"use strict";
//function *counter(start, end) {
//    let x = start;
//    while (x <= end) {
//        let back = yield x;
//        x = x + back;
//    }
//}
function *counter(start, end) {
    let x = start;
    while (x <= end) {
        yield x;
        x++;
    }
}

//let c = counter(1, 10);
//let finished = false;
//do {
//    let r = c.next(Math.floor(Math.random() * 2));
//    finished = r.done;
//    console.log(r);
//} while (!finished);

for (let v of counter(1, 10)) {
    console.log(v);
}

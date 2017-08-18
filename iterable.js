
"use strict";

function sequence(start, end) {
    return {
        [Symbol.iterator] : function() {
            return {
                next : function() {
                    return {
                        done : start > end,
                        value : start++
                    };
                }
            };
        }
    };
}

for (let v of sequence(1, 10)) {
    console.log(v);
}


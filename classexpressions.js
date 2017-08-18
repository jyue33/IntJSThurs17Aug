
"use strict";

let aClass = class {
    a() {
        console.log("A.a()");
    }
}
;
        class B extends aClass {
    b() {
        console.log("B.b()");
    }
}

class C extends class {
    f() {
        console.log("F.f()");
    }
} {
    c() {
        console.log("C.c()");
    }
}

let b = new B();

b.b();

let c = new C();
c.c();
c.f();


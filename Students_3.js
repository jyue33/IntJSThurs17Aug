
function makeAStudent(name, gpa) {
    let courses = ["Math"];
    return {
        toString : function() {
            return "Student, name is " + name
                + " grade is " + gpa
                + " courses " + courses;
        },
        setName : function(n) {
            name = n;
        }
    };
}

let albert = makeAStudent("Albert", 3.8);
console.log("" + albert);
let jim = makeAStudent("Jim", 3.2);
console.log("" + jim);

jim.setName("Jimmy");
console.log("" + jim);

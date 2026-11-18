// Student Management System

let students = [];

function addStudent(name, age, marks) {
    let student = {
        id: students.length + 1,
        name: name,
        age: age,
        marks: marks
    };

    students.push(student);
    console.log("Student added successfully!");
}

function displayStudents() {
    console.log("\n--- Student List ---");

    students.forEach(student => {
        console.log(
            `ID: ${student.id} | Name: ${student.name} | Age: ${student.age} | Marks: ${student.marks}`
        );
    });
}

function calculateAverage() {
    if (students.length === 0) {
        console.log("No students available.");
        return;
    }

    let total = students.reduce((sum, student) => {
        return sum + student.marks;
    }, 0);

    let average = total / students.length;

    console.log("Average Marks:", average);
}

function findStudent(name) {
    let student = students.find(s => s.name.toLowerCase() === name.toLowerCase());

    if (student) {
        console.log("Student Found:", student);
    } else {
        console.log("Student not found.");
    }
}

function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
    console.log("Student deleted.");
}

// Adding students
addStudent("Rahul", 20, 85);
addStudent("Aman", 19, 92);
addStudent("Usman", 20, 78);

// Displaying students
displayStudents();

// Calculating average
calculateAverage();

// Searching student
findStudent("Aman");

// Deleting student
deleteStudent(2);

// Display after deletion
displayStudents();
var students = [
    {
        id: 1,
        name: "M'hamed",
        age: 34,
        grades: [5, 8, 2, 3, 5, 1],
        contact: {
            phone: 666,
        },
        address: {
            city: "Hydra",
            postalCode: 12000,
        },
    },
    {
        id: 2,
        name: "Nabil",
        age: 44,
        grades: [5, 8, 11, 3, 13, 8],
        contact: {
            email: "test@user.com",
        },
        address: {
            city: "Rouiba",
            postalCode: 16000,
        },
    },
    {
        id: 3,
        name: "Youcef",
        age: 24,
        grades: [17, 18, 15, 13, 15, 16],
        contact: {
            email: "test@user.com"
        },
        address: {
            city: "Djelfa",
            postalCode: 35000
        }
    }
];
function printStudentDetails(student) {
    var average = Math.round(((student.grades.reduce(function (accumulator, currentValue) { return accumulator + currentValue; })) / student.grades.length));
    console.log("The student names ".concat(student.name, ", aged ").concat(student.age, ", has an average grade of ").concat(average, ". \n        ").concat(student.name, " lives in ").concat(student.address.city, " which has a postal code of ").concat(student.address.postalCode, ". \n        To contact them, ").concat("email" in student.contact ? "here is their email : ".concat(student.contact.email) : "here is their phone number : ".concat(student.contact.phone), "\n"));
}
students.forEach(function (student) {
    printStudentDetails(student);
});

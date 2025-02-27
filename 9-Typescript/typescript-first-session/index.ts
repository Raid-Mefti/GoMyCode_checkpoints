interface StudentI{
    id:number;
    name:string;
    age:number;
    grades:number[];
    contact:{email:string;}|{phone:number};
    address: addressI;
    }

interface addressI{
    city:string;
    postalCode:number;
}
const students : StudentI[]= [
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
function printStudentDetails(student: StudentI): void{
    const average = Math.round(((student.grades.reduce((accumulator, currentValue) =>  accumulator + currentValue))/student.grades.length))
    console.log(`The student names ${student.name}, aged ${student.age}, has an average grade of ${average}. 
        ${student.name} lives in ${student.address.city} which has a postal code of ${student.address.postalCode}. 
        To contact them, ${"email" in student.contact?`here is their email : ${student.contact.email}`:`here is their phone number : ${student.contact.phone}`}\n`)
        
}
students.forEach(student => {
    printStudentDetails(student)

})
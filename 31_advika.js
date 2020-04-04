

const employee = [
    { empId: 1, name: "”Sakthi”", gender: "’Male’", age: 27 },
    { empId: 1, name: "”Sakthi”", gender: "’Male’", age: 27 }
];

console.table(employee);

employee.forEach((e) => {
    e.cName = "Oasys";
});

console.table(employee);
const employees = [];

const newEmployees = [
    {
        name: 'Q',
        jobTitle: 'Jobless',
        salary: 0,
    },
    {
        name: 'Murray',
        jobTitle: 'Surfer',
        salary: 0,
    },
    {
        name: 'Joe',
        jobTitle: 'Software Developer',
        salary: 0,
    },
    {
        name: 'Sal',
        jobTitle: 'Hacker',
        salary: 0,
        status: "Part Time"
    }
]

function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
}

Employee.prototype.printEmployeeForm = function() {
    console.log(this);
};

for (let i = 0; i < newEmployees.length; i++) {
    const name = new Employee(newEmployees[i].name, newEmployees[i].jobTitle, newEmployees[i].salary)
    if (newEmployees[i].status) {
        name.status = newEmployees[i].status;
    }
    employees.push(name);
    name.printEmployeeForm();
}

console.log(employees);
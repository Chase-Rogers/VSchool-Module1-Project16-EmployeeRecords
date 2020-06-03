const employees = [];

function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
}

Employee.prototype.printEmployeeForm = function() {
    console.log(this);
};

var q = new Employee('Q', 'Jobless', 0);
var murray = new Employee('Murray', 'Surfer', 0);
var joe = new Employee('Joe', 'Software Developer', 0);
var sal = new Employee('Sal', 'Hacker', 0);

sal.status = 'Part Time';

q.printEmployeeForm();
murray.printEmployeeForm();
joe.printEmployeeForm();
sal.printEmployeeForm();

employees.push(q);
employees.push(murray);
employees.push(joe);
employees.push(sal);

console.log(employees);
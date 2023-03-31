class Employee{

    constructor(name,position,salary){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }

    getSalary(){
        return `${this.salary}`
    }
}

let salary=new Employee("employee1","manager",8000);
console.log(salary.getSalary())
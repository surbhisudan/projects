class Person{

    constructor(  name="unknown", age=0){
        this.name=name;
        this.age=age;
   
    }
    getDetails(){
        return`Name: ${this.name} Age:${this.age}`
    }
}

const person1=new Person("Surbhi",20);
const person2=new Person();

console.log(person1.getDetails());
console.log(person2.getDetails());
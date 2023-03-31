class Car{

    constructor(c,m,y){
        this.company=c;
        this.model=m;
        this.year=y;

    }
    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

const x= new Car("Skoda","Rapid","2022");
console.log(x.getDescription())

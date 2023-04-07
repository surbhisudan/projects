function ageInDays(person,callback){
    const fullname=person.firstname+" "+person.lastname;
    const age=person.age*365;

    return callback(fullname,age)

};

function callback(fullname,age){
    console.log(`The person's fullname is ${fullname} and their age in days is ${age}`)
}

const person={
    firstname:"Surbhi",
    lastname:"Sudan",
    age:20,
}

ageInDays(person,callback)
const person={
    name:"mithun",
    age:21,
    address:{
        street:"B8,Block B,Industrial Area.",
        city:"Sector 62,Noida",
        state:"Uttar Pradesh",
    },
};

function nested({name,address:{street}}){
  return {name,street}


}
console.log(nested(person))
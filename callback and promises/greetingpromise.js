function inputName(name) {
    return new Promise((resolve)=>{
        const greeting=`hello ${name}`;
        resolve(greeting)
    })
}

// console.log(inputName("surbhi"))
// inputName("surbhi").then((message)=>console.log(message));

const p=inputName("surbhi");
p.then((msg)=>console.log(msg));

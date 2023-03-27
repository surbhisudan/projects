let store={
    "item1":20,
    "item2":40,
    "item3":32,
    "item4":38
}
let usd=80
const newstore={};

Object.entries(store).map(([items,price])=>{
    newstore[items]= price*usd
})
console.log(newstore)
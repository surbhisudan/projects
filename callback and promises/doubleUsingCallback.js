function integers(arr,callback){
    let array=arr.map((num)=>{
        return callback(num);
    })
    return array;
}
function callback(num){
    return num*2;
}
const arr=[1,2,3,4,5,6];

console.log(integers(arr,callback));
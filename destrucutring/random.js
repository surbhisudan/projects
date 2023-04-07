// function random(arr) {
//      for(let i=0;i<arr.length;i++){
//         let x=arr[0];
//         let y=arr[1];
//         let z=arr[arr.length-1];
//         const newarr=[x,y,z];
//         return newarr;
//      }
   
// }

// let array=[1,2,3,4,5];
// console.log(random(array))

function random(arr) {
   const uniqueElements = [...new Set(arr)];
   const [x, y, , , z] = uniqueElements;
   return [x, y, z];
 }
 
let arr = [1, 2, 3, 4, 5];
 console.log(random(arr));
 
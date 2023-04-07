let num="1234567890";
function randomNumber(){
    for(let i=0;i<1;i++){
        console.log(Math.floor(Math.random(i)*101),Math.random())
    }
}
setInterval(() => {
    randomNumber();
}, 3000);
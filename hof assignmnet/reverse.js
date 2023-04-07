let str="helloworld";
str=str.split("");


function reverse(str){
    let newstr="";
    for(let i=str.length-1;i>=0;i--){
          newstr+=str[i];
    }
        console.log(newstr);
}
setTimeout(() => {
    reverse(str);
  }, 2000);


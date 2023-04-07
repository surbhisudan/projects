
function convertToNumber(str){
   try {
    const result=Number(str);
    if(isNaN(result)){
        throw new Error("Invalid number")
    }
    return result;
    
   } catch (error) {
      return error.message;
   }

  
}

str="123";
str1="abc"
console.log(convertToNumber(str))
console.log(convertToNumber(str1))
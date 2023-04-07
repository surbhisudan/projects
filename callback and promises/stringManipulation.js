function manipulateString(str,logString){
    let newstr=str.toUpperCase();
    
    return logString(newstr);
}
function logString(manipulateString) {
    console.log(`The manipulated string is:${manipulateString}`);     
}


manipulateString("hello, world!",logString)
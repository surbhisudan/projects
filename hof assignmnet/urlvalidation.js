


const newurl="https://surbhi@123.com"

const weburl=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

const check=newurl.match(weburl);

console.log(check)
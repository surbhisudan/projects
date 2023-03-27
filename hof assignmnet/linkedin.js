
function linkedInUrl(url) {
    const newurl = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return newurl.test(url);
  }
  

  console.log(linkedInUrl("https://www.linkedin.com/in/surbhi@123"));
  
  
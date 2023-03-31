class User{

    #password;
    constructor(user,pass){
        this.username=user;
        this.#password=pass;
    }

    get password(){
        return "*".repeat(this.#password.length);
        }
        
  

    set password(newpassword){
        const regex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/; 
        if (regex.test(newpassword)) {
          this.#password = newpassword;
         } else {
            console.error("Password must be atlest 8 characters long and contain at least one number and one uppercase letter");
         }
    }
}

const user=new User("surbhi","Password123");

console.log(user.password);
user.password="asdf123rrrA"


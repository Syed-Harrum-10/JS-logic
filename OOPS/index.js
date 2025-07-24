class User {
    constructor(name, email){
        this.name = name,
        this.email = email
    }
    describe(){
        return `User ${this.name} can be contacted at ${this.email}`
    }
}

class Admin extends User {
    constructor(name, email, role){
        super(name, email)
        this.role = role
    }
    describe(){
        return `Admin ${this.name} ${this.role} can be contacted at ${this.email}`
    }
}
const admin = new Admin("Harrum", "syedharrumten@gmail.com", "admin")
console.log(admin)
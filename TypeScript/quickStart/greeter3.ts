// teach us how to use class

class Student{
    fullName:string;
    constructor(public firstName ,public lastName, public middleInitial){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person{
    firstName:string;
    lastName:string;
}

function greeter3(user:Person){
    return "hello, " + user.firstName + " "+ user.lastName;
}

var body = new Student("David","Yu","middle");
document.body.innerHTML = greeter3(body);



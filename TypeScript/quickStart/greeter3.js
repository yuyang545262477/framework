// teach us how to use class
var Student = (function () {
    function Student(firstName, lastName, middleInitial) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter3(user) {
    return "hello, " + user.firstName + " " + user.lastName;
}
var body = new Student("David", "Yu", "middle");
document.body.innerHTML = greeter3(body);
//# sourceMappingURL=greeter3.js.map
// teach us how to use interface

interface Person {
    firstName:string;
    lastName:string;
}

function greeter2(user:Person){
    return "hello" + user.firstName + user.lastName;
}

var user = {
    firstName:'David',
    lastName:'Yu'
};

document.body.innerHTML = greeter2(user);





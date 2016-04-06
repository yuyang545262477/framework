// teach us how to use interface
function greeter2(user) {
    return "hello" + user.firstName + user.lastName;
}
var user = {
    firstName: 'David',
    lastName: 'Yu'
};
document.body.innerHTML = greeter2(user);
//# sourceMappingURL=greeter2.js.map
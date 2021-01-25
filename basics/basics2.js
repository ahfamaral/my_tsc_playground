"use strict";
var person = {
    name: 'Andre',
    age: 30,
    hobbies: ['Yoga', 'Cooking', 'Cycling'],
    role: [2, 'author']
};
console.log(person.name);
person.role.push('admin');
person.role[0] = 10;
person.role = [0, 'admin'];
// person.role = [0, 'admin', 'role']
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person2 = {
    name: 'Andre',
    age: 30,
    hobbies: ['Yoga', 'Cooking', 'Cycling'],
    role: Role.ADMIN
};
console.log('person2.role', person2.role);

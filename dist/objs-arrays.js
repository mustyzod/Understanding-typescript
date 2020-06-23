"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person /*: {
  name: string;
  age: number;
  hobbies:string[];
  role:[number,string];
} */ = {
    name: "Sodruldeen",
    age: 30,
    hobbies: ['sport', 'cooking'],
    // role:[2,'author']
    role: Role.ADMIN
};
//  Array of strings
let favouriteActivities;
favouriteActivities = ['sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

"use strict";
// TOPICS : enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person2 = {
    name: 'Joey',
    age: 32,
    role: Role.AUTHOR
};
if (person2.role === Role.ADMIN)
    console.log(person2.name + " is an admin");
else
    console.log(person2.name + " is not an admin");
//# sourceMappingURL=enumTypes.js.map
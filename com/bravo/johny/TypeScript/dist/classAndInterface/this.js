"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(f, l) {
        this.fName = f;
        this.lName = l;
        this.profession = 'General';
        this.age = 26;
    }
    getFullName() {
        return this.fName + ' ' + this.lName;
    }
    getDetails() {
        return this.fName + ' is : ' + this.profession;
    }
}
const joey = new User('Joey', 'Tribbiani');
console.log(joey.getFullName());
console.log(joey.getDetails());
const joey_clone = {
    fName: 'Joey',
    fullName: joey.getFullName,
    details: joey.getDetails
};
console.log(joey_clone.fullName());
// console.log(joey_clone.details());  // This throws error as this type is different
//# sourceMappingURL=this.js.map
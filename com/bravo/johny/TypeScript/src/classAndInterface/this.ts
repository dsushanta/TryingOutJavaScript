export { };

class User {
  fName: string;
  lName: string;
  age: number;
  profession: string;
    
  constructor(f: string, l: string) {
    this.fName = f;
    this.lName = l;
    this.profession = 'General';
    this.age = 26;
  }

  getFullName() {
    return this.fName + ' ' + this.lName;
  }

  getDetails(this: User) {
    return this.fName + ' is : ' + this.profession;
  }
}

const joey = new User('Joey', 'Tribbiani');

// console.log(joey.getFullName());
// console.log(joey.getDetails());

const joey_clone = {
  fName: 'Joey',
  fullName: joey.getFullName,
  details: joey.getDetails
};

console.log(joey_clone.fullName());

// console.log(joey_clone.details());  // This throws error as this type is different

class joey_clone_1 extends User {
}

const jj = new joey_clone_1('Joey', 'Tribbiani');
console.log(jj.getDetails());
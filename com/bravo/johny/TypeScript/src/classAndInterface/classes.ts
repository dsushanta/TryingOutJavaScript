class Person {
  // private firstName: string;
  // private age: number;

  // constructor(firstName: string, age: number) {
  //   this.firstName = firstName;
  //   this.age = age;
  // }
	
  constructor(private firstName: string, private age: number) {
  }

  get FirstName(): string{
    return this.firstName;
  }
	
  set FirstName(firstName: string) {
    this.firstName = firstName;
  }

  get Age(): number{
    return this.age;
  }
	
  set Age(age: number) {
    this.age = age;
  }
	
  display() {
    console.log(this);
  }
}

const person11 = new Person('Joey', 30);
person11.FirstName = 'Chandler';
person11.display();
console.log(person11.Age);
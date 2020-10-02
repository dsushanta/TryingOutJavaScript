class Friend {
  constructor(name, age, favoriteDialogue) {
    this.name = name;
    this.age = age;
    this.favoriteDialogue = favoriteDialogue;
  }
  getNameWithDialogue() {
    return `This is ${this.name} and ${this.favoriteDialogue}`;
  }
}

joey = new Friend("Joey", 30, "How you doing !!!");
console.log(joey.getNameWithDialogue());
console.log(joey);

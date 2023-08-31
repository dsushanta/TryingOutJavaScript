const friends: string[] = ['chandler', 'monika', 'ross', 'rachel', 'phoebe', 'joey'];

const characters = [...friends, 'gunther'];

console.log(characters);

const joey = {
  name: 'Joey Tribbiani',
  age: 30,
  profession: 'Actor'
};

const joey1 = { ...joey };

console.log(joey1);
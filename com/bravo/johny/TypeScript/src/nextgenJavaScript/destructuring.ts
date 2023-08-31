
export { };
    
const friends: string[] = ['chandler', 'monica', 'ross', 'rachel', 'phoebe', 'joey'];

const [f1, f2] = friends;

console.log(f1, f2);

const joey = {
  name: 'Joey Tribbiani',
  age: 30,
  profession: 'Actor'
};

const { name, profession } = joey;

console.log(name, profession);
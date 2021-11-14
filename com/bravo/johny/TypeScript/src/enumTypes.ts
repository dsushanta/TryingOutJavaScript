// TOPICS : enums

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};


const person2 = {
    name: 'Joey',
    age: 32,
    role: Role.AUTHOR
};

if(person2.role === Role.ADMIN)
    console.log(person2.name + " is an admin");
else
console.log(person2.name + " is not an admin");
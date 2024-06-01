let myList = [
    {
        fname: "Chandler1",
        lname: "Bing1",
        age: 50,
        gender: 'F'
    },
    {
        fname: "Chandler2",
        lname: "Bing2",
        age: 25,
        gender: 'M'
    },
    {
        fname: "Chandler3",
        lname: "Bing3",
        age: 45,
        gender: 'F'
    },
    {
        fname: "Chandler4",
        lname: "Bing4",
        age: 60,
        gender: 'M'
    },
    {
        fname: "Chandler5",
        lname: "Bing5",
        age: 15,
        gender: 'F'
    },
]

const x = myList.filter(x => x.age > 30).filter(y => y.gender === 'F').map(t => t.age * 2);

const y = myList.map(t => { t.age * 2 })
console.log("X : ", x)
console.log("Y : ", y);


const someFunction = (name) => {
    setTimeout(()=>{}, 2000);
    if(name === 'joey')
        throw new Error(`${name} is not allowed`)
    return {"name" : name};
}

const getData = (name) => {
    return new Promise((resolve, reject) => {
        try {
            let response = someFunction(name);
            resolve(response.name);
        } catch (error) {
            reject(error.message)
        }
    });
}

getData("joey")
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
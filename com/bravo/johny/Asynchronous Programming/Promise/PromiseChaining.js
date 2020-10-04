let fetchData = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data ");
            resolve({ id: 1, message: "Nice Work !!" })
        });
    });
};

let parseData = function (data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let parsedOutput = `Parsed the data for id: ${data.id} with message: ${data.message}`;
            resolve(parsedOutput);
        });
    });
};

let echoData = function (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(data);
    });
  });
};

fetchData().then(parseData).then(echoData);
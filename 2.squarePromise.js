function squarePromise(promise) {
    return new Promise((resolve, reject) =>{
        promise
        .then((data =>{
            if(typeof data === "number" && isNaN(data) === false){
                resolve(data * data);
            } else if (typeof data === "string" && isNaN(+data) === false) {
                resolve(data * data);
            } else if(typeof data === "string") {
                reject("Cannot convert 'asdf' to a number!");
            }
        })).catch((err) =>{
            reject(err)
        })
    })  
}

const myPromise = new Promise((resolve, reject) => {
    resolve("k");
});

squarePromise(myPromise)
    .then((data) =>{
        console.log(data);
    })
    .catch((err) =>{
        console.log(err);
    });
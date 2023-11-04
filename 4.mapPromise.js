function mapPromise(promise, tranformer) {
    return promise.then((data) =>{
            if(tranformer(data)){
                tranformer(data);
            }
        }).catch(data => console.log(data))
}

const myPromise = new Promise((resolve, reject) => { resolve(2) });
const timesTwo = (val) => val * 2;

mapPromise(myPromise, timesTwo).then(result => console.log(result));
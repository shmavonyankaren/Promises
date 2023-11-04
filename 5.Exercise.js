Promise.resolve()
.then(() => console.log(1)) // 1
.catch(() => console.log(3))
.then(() => { console.log(2); throw new Error(); }) // 2
.then(() => console.log(4))
.then(() => console.log(4))
Promise.resolve()
.then(() => console.log(11)) // 11
.then(() => { console.log(12); throw new Error(); }) // 12
.catch(() => console.log(13)) // 13
.catch(() => console.log(14))
.then(() => console.log(15)) // 15

/*
    First part

    Will be 1, 2 because we have 'resolve', that is why 'then' block will work bringing '1' 
    as a console.log() and than because it is a promise at the same time(witout error) it will resolve as well bringing another console.log()
    2, but in this block we have a 'thrown error' that is why another part of code will not work(because we need 'catch' to work with errors)
    Second part 

    Will be 11, 12, 13, 15 because we have 'resolve', that is why 'then' block will work bringing '11' 
    as a console.log() and than because it is a promise at the same time(witout error) it will resolve as well bringing another console.log()
    12, but in this block we have a 'thrown error' that is why after that 'catch' block will catch the error and we will have '13' as a console.log(),
    after that because it is a promise, it will be resolve as well bringing another console.log() '15'
*/

Promise.resolve()
.then(data => {
    throw new Error('Api Error');
    return 1;
})
.then(data => console.log('ok'))
.catch(error => {
    console.log(error.message);
    return "2";
})
.then(data => {
    console.log(data);
})

/*
comments....
*/


console.log(1)
setTimeout(() => {
console.log(2)
}, 20)
Promise.resolve()
.then(() => {
    console.log(3)
    return 1
})
.catch(e => console.log(e, 4))
.finally(res => console.log(res, 5))
.then((res) => console.log(res))
console.log(6)

/*
comments...
*/

let a = 5;
setTimeout(() => {
console.log(a);
a = 10;
}, 0);
let p = new Promise((resolve, reject) => {
console.log(a);
a = 25;
resolve();
});
p.then(res => {
console.log('final result ', res)
});
console.log(a);

/*
comments...
*/
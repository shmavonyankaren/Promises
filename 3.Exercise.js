function exercise3(par){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof par === "string") {
                resolve(par.toUpperCase());
            }
            reject(par);
        }, 500)
    })
}

exercise3(234).then((data) => console.log(data)).catch((err) => console.log(err));
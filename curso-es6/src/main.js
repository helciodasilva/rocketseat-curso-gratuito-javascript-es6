const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

// minhaPromise().then(response => ... );

//async function executaPromise() {
//    console.log(await minhaPromisse());
//    console.log(await minhaPromisse());
//    console.log(await minhaPromisse());
//}

const executaPromise = async () => {
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
};

executaPromise();


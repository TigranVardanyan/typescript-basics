// const names = ['tigran', 'anna'];
// const anyArray = [];
const names = [];
const ages = [];
const promice = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});
promice.then(data => {
    // data.split(' ')
    console.log(data);
});

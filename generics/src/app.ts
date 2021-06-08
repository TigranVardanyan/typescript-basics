// const names = ['tigran', 'anna'];
// const anyArray = [];

const names: Array<string> = [];

const ages: Array<number> = [];

const promice: Promise<number> = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 2000)
})

promice.then(data => {
    // data.split(' ')
    console.log(data)
})
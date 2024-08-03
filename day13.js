// Activity 1 : Understanding Promises 

// Task 1 : Create a promise that resolve with a message after 2 second and log the
// message to the console

const myPromise = new Promise((resolve,reject )=>{
    setTimeout(() =>{
        resolve('Promise resolve after 2 seconds')
    },2000)
})
myPromise
.then((message) => {
    console.log(message)
})
.catch((error) =>{
    console.log(error)
})


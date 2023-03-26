//EXAMPLE FOR PROMISE.ALL

let yt = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("getting videos from youtube");
        resolve([1,2,3,4,5])
    },2000)
})


const fb = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({user:"Sachin"})
    },2000)
}) 

Promise.all([yt,fb]).then((result)=>console.log(result));
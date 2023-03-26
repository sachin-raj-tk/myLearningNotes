//EXAMPLE OF A PROMISE

const promise = new Promise((resolve,reject)=>{
    const data = ""
    if(data) resolve({userName:data});
    reject(new Error("user data not found"));

})

promise.then((user)=>console.log(user)).catch((errorMessage)=>console.log(errorMessage.message));
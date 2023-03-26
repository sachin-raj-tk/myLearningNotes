// // "Async javascript tutorial for beginners" by "devlopedbyed" youtube channel

// // EXAMPLE FOR SYNCHRONOUS JAVASCRIPT

// function middle(){
//     console.log("we are in middle function");
//     console.log("do some other stuff");
// }

// console.log("Start");

// middle();

// console.log("end");

// // EXAMPLE FOR ASYNCHRONOUS JAVASCRIPT

// console.log('start async');

// setTimeout(()=>console.log("we are in the timeout"),5000);

// console.log("end async");

// // EXAMPLE TWO FOR ASYNCHRONOUS JAVASCRIPT SHOWING A CALLBACK HELL

// console.log("start");

// function loginUser(email, password, callback) {
//     console.log("hello in middle");
//     setTimeout(()=>{
//         console.log("Now we have the data");
//         callback({userEmail: email})
//     },2000)
// }

// function getVideos(email,callback){
//     setTimeout(()=>{
//         callback(['vido1','video2','video3'])
//     },2000)
// }

// function getVideoTitle(video,callback){
//     setTimeout(()=>{
//         callback(video)
//     },1000)
// }

// const user = loginUser("random@gmail.com","2343f",(user)=>{
//     console.log(user);

//     getVideos(user.userEmail,(videos)=>{
//         console.log(videos);

//         getVideoTitle(videos[0],(video)=>{
//             console.log(video);
//         })
//     })
// })

// console.log("end");

// /*
// in addition to the above code we might also need to add an onSuccess and onFailure callbacks to the above functions to handle
// the errors and success conditions effectively. This might further complicate the code an will make the code unreadable. This
// issue is what we can solve with the help of promises or asyn await
// */

// //EXAMPLE OF A PROMISE

// const promise = new Promise((resolve,reject)=>{
//     const data = ""
//     if(data) resolve({userName:data});
//     reject(new Error("user data not found"));

// })

// promise.then((user)=>console.log(user)).catch((errorMessage)=>console.log(errorMessage.message));



// // REFACTORING THE ABOVE MESS CREATED BY CALL BACK HELL USING PROMISE

// console.log("start");

// function loginUser(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("now we have the data");
//       if (email) resolve({ userName: email });
//       reject("user details not found");
//     }, 2000);
//   });
// }

// function getVideos(userName) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(userName);
//       if (userName) resolve(["video1", "video2", "video3"]);
//       reject("user not logged in");
//     }, 2000);
//   });
// }

// function getVideoTitle(video) {
//   return new Promise((resolve, reject) => {
//     console.log(video);
//     setTimeout(() => {
//       // console.log(video);
//       if (video) resolve(video[0]);
//       reject("video information not available");
//     }, 1000);
//   });
// }

// loginUser("sds")
//   .then((userName) => getVideos(userName.userName))
//   .then((video) => getVideoTitle(video))
//   .then((videoTitle) => console.log(videoTitle))
//   .catch((err) => console.log(err));

// console.log("end");



//REFACTORING THE ABOVE PROMISE WITH ASYNC AWAIT

console.log("start");

function loginUser(email){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userName:email})
        },2000)
    })
}

function getVideos(userName){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['video1','video2','video3'])
        },2000)
    })
}

function getVideoTitle(videos){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(videos[0])
        },2000)
    })
}

async function displayVideo(){
   let loggedUser = await loginUser('random@gmail.com');
   let allVideos = await getVideos(loggedUser);
   let videoInfo = await getVideoTitle(allVideos);
   console.log(videoInfo);
}

displayVideo()

console.log("end");




// //EXAMPLE FOR PROMISE.ALL

// let yt = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("getting videos from youtube");
//         resolve([1,2,3,4,5])
//     },2000)
// })


// const fb = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({user:"Sachin"})
//     },2000)
// }) 

// Promise.all([yt,fb]).then((result)=>console.log(result));
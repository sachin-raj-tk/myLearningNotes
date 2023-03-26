// using tryCatch block with async await to handle the errors

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
 try {
let loggedUser = await loginUser('random@gmail.com');
   let allVideos = await getVideos(loggedUser);
   let videoInfo = await getVideoTitle(allVideos);
   console.log(videoInfo);
 } catch (error) {
    console.log("we could not get the videos");
 }
   
}

displayVideo()

console.log("end");
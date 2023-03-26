// EXAMPLE TWO FOR ASYNCHRONOUS JAVASCRIPT SHOWING A CALLBACK HELL

console.log("start");

function loginUser(email, password, callback) {
    console.log("hello in middle");
    setTimeout(()=>{
        console.log("Now we have the data");
        callback({userEmail: email})
    },2000)
}

function getVideos(email,callback){
    setTimeout(()=>{
        callback(['vido1','video2','video3'])
    },2000)
}

function getVideoTitle(video,callback){
    setTimeout(()=>{
        callback(video)
    },1000)
}

const user = loginUser("random@gmail.com","2343f",(user)=>{
    console.log(user);

    getVideos(user.userEmail,(videos)=>{
        console.log(videos);

        getVideoTitle(videos[0],(video)=>{
            console.log(video);
        })
    })
})

console.log("end");

/*
in addition to the above code we might also need to add an onSuccess and onFailure callbacks to the above functions to handle
the errors and success conditions effectively. This might further complicate the code an will make the code unreadable. This
issue is what we can solve with the help of promises or asyn await
*/
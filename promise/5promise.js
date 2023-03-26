// REFACTORING THE ABOVE MESS CREATED BY CALL BACK HELL USING PROMISE

console.log("start");

function loginUser(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now we have the data");
      if (email) resolve({ userName: email });
      reject("user details not found");
    }, 2000);
  });
}

function getVideos(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(userName);
      if (userName) resolve(["video1", "video2", "video3"]);
      reject("user not logged in");
    }, 2000);
  });
}

function getVideoTitle(video) {
  return new Promise((resolve, reject) => {
    console.log(video);
    setTimeout(() => {
      // console.log(video);
      if (video) resolve(video[0]);
      reject("video information not available");
    }, 1000);
  });
}

loginUser("sds")
  .then((userName) => getVideos(userName.userName))
  .then((video) => getVideoTitle(video))
  .then((videoTitle) => console.log(videoTitle))
  .catch((err) => console.log(err));

console.log("end");
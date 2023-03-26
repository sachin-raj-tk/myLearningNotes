// function add(a,b){
//     return new Promise(function(resolve,reject){
//             setTimeout(function(){
//                 var result = a+b;
//                 if(result){

//                     resolve(result);
//                 }else{
//                     reject({"error":"something went wrong"})
//                 }
//             },1000)
//     })
// }

// add(20,5).then((result)=>console.log(result)).catch(error=>console.log(error.error))


//coverting above into async/await


function add(a,b){
    const result = a+b
    return result;
}

async function callAdd(a,b){
    const value = await add(a,b)
    console.log(value);
};

console.log(callAdd(20,5));

// // function wait(ms) {
// //     return new Promise(resolve => setTimeout(resolve, ms));
// //   }
  
//  function add(a, b) {
//     // await wait(1000);
//     var result = a + b;
//     return result;
//   }


//   async function run() {
//     try {
//       var result = await add(2, 3);
//       console.log(result); // outputs 5
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   run();

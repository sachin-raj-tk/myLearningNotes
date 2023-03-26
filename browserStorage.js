//localStorage methods

localStorage.setItem("name","sachin ")
localStorage.removeItem("name");
console.log(localStorage.getItem("name"));


//session Storage methods

sessionStorage.setItem("name", "Ajay");
//to update values in session storage, just overwrite them
sessionStorage.setItem("name","Vinay");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");


//cookie storage

document.cookie = "name=Sachin;expires=" + new Date(2023, 6, 22).toUTCString()
document.cookie = "lastName=Raj;expires=" + new Date(2024, 6, 22).toUTCString()
console.log(document.cookie);
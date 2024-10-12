//Callback method
function myFunction(cb){
    setTimeout(()=>{
        cb('Peanut and Butter');
    }, 2000);
}

//Promise method
function myFunction1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{reject(new Error("Error"))}, 1000);
    });
}
function myFunction2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve("Peanut Butter again")}, 1000);
    });
}

//Async/Await method

module.exports = { myFunction, myFunction2, myFunction1 };
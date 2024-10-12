function myFunction(cb){
    setTimeout(()=>{
        cb('Peanut and Butter');
    }, 2000);
}

module.exports = myFunction;
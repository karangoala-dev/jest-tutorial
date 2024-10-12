const myFunction = require('./index');

test('asynchronous code test via callbacks', (done)=>{
    function callback(data){
        try {
            expect(data).toBe('Peanut and Butter');  //We are passing this function to the code in index.js to , this function will now run checks on the data in the function
            done();  //tells jest that testing is done
        } catch (error) {
            done(error);
        }
    }

    myFunction(callback);
});
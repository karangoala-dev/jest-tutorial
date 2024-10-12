const {myFunction, myFunction2, myFunction1} = require('./index');

//Callback test
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

//Promise test
test('asynchronous code test via promise-resolve', ()=>{
    return expect(myFunction2()).resolves.toBe("Peanut Butter again");
});

test('asynchronous code test via promise-reject', ()=>{
    return expect(myFunction1()).rejects.toThrow("Error");
});

//Async/Await test
test('asynchronous code test via async/await', async()=>{
    const data = await myFunction2();
    expect(data).toBe('Peanut Butter again');
});

//Mock function
test('Mock function implementation', ()=>{
    const mockFunction = jest.fn(x => 42 + x);
    expect(mockFunction(1)).toBe(43);
    expect(mockFunction).toHaveBeenCalledWith(1);
});

//Spying on method
test('spying on a method of an object', ()=>{
    const video = {
        play(){
            return true;
        }
    };

    const spy = jest.spyOn(video, 'play');//creates a spy on the method.. useful since it does not alter the behavior of the function itself
    video.play();// calls the function

    expect(spy).toHaveBeenCalled();// checks whether the function has been called atleast once
    spy.mockRestore(); //restores the original implementation of the play method. (basic clean up)
});
const { isUtf8 } = require("buffer");
const fs=require("fs");
/*
    Asynchronous function is more good for User Experience programming
    It allows the browser to continue executing other tasks while waiting for a response.
    Non-Blocking Operations
 */

    console.log("1");
    console.log("2");
    setTimeout(function() {
        console.log("4");
    }, 0);

    console.log("3");



    /*
    Blocking Operations(Synchronous operations)
    They halt the execution of the program until they are complete.
    The browser waits for the entire response before moving on.

     */

    console.log("this is a blocking operation");

    console.log("5");
    console.log("6");
    fs.readFile("non_existent_file.txt","utf-8", (err, data)=> {
        console.log(data);
    });
    console.log("8");

    
    

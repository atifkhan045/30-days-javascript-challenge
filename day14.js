// Activity 1 : Basic error handling with try-catch

// Task 1 : Write a function that intentionally throws an error and use the try-cath block to handle 
// the error and log an appropriate message to the console.

function throwError(){
    try{
        throw new Error(`Error : intentionally throws an error`)
    }
    catch(error){
        console.log(error.message)
    }
}

throwError()

// Task 2 : create a funcion that divides two numbers and throws an error if the denominator is 
// zero use a try-catch block to handle this error 

function divide(numerator , denominator){
   
    if(denominator === 0)
    {
        try{
            throw new Error(`Denominator is ${denominator}`)
        }
        catch(error){
            console.log(`Error: ${error.message}`)
        }
    }
    else{
        const result = numerator/denominator;
        console.log(result)
    }
}
const num1 = 10
const num2 = 0;
divide(num1,num2)


// Activity 2 : Finally Block
// Task 3 : Write a script that includes a try-catch block and a finally block. Log message 
// in the try , catch and finally blocks to observe the execution flow

function exampleFunction() {
    try {
        console.log("This is the try block. Let's try to execute some code.");
        
        // Intentionally throwing an error to see the catch block in action
        throw new Error("An error occurred!");

        // This line will not be executed due to the error above
        console.log("This line will not be executed because an error was thrown.");
    }
    catch (error) {
        console.log("This is the catch block. The error message is: " + error.message);
    }
    finally {
        console.log("This is the finally block. It runs regardless of whether an error occurred or not.");
    }

    console.log("The script continues after the try-catch-finally block.");
}

// Run the example function
exampleFunction();

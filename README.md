# asynchronous-functions-using-promise

here we are doing asynchronous function using promise and settimeout function(that calls 3 instances of function at specified times),,,
here the main function takes milliseconds of time as an argument and gives result of an asynchronous function using a promise
The del(ms) function is defined. It takes a time in milliseconds as an argument and returns a Promise.
inside promise we have settimeout(delays result or rjection) of promise based on value of parameter passed to main function
if ms <1000 ,promise rejected with a message..
when del(2000) called,promise will be resolved after 2000 milli sec
when del(500) called,promise will be rejected after 500 milli sec
.then function result argument holds resolved value
.catch function error argument holds rejected value
///there will be problem of callback hell when we dont use promises while using nested callbacks

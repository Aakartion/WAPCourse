/*
When will the scheduled function run?

After the loop.
Before the loop.
In the beginning of the loop.

The function will execute after the loop because setTimeout() is asynchronous API.
What is console.log going to show?
Ans => 100000000
*/

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// assume that the time to execute this function is >100ms

for (let j = 0; j < 100000000; j++) {
    console.log(i);
    i++;
}


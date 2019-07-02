// Write a loop that makes seven calls to console.log 
// to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// It may be useful to know that you can find the length of a string by writing .length after it.

// let abc = "abc";
// console.log(abc.length);
// // → 3



//1. while loop
let accumulator = "";
let counter = 0;

while (counter < 8) {
  accumulator += "#";
  counter += 1;
  console.log(accumulator);
}

//2. for loop
for (let accumulator = "#"; accumulator.length <= 8; accumulator += "#") {
    console.log(sign);
  }
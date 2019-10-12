'use strict';

var sum = 0;

for(let i=0; i<= process.argv.length; i++) {
  if(i > 1 && i != process.argv.length) {
    sum += Number(process.argv[i]);
  }
}

// console.log(process.argv);
console.log(sum);
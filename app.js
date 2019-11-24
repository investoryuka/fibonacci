'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fib(n) {
    if(memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n,value);
    return value;
}
const length = 100;
for (let i = 0; i <= length; i++) {
    Console.log(i + '番目：' + fib(i));
}

/*function fib(n) {
    if (n === 0){
        return 0;
    } else if (n === 1){
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

const length = 42;
for (let i = 0; i <= length; i++) {
   console.log( i + '番目：' + (fib(i)));
}*/
//console.log(fib(0));
//console.log(fib(1));
//console.log(fib(2));
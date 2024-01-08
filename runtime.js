const perf = require('execution-time')();

function doublerAppend(nums) {
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.push(num);
    }
}

function doublerInsert(nums) {
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
}

function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array;
}

const arraySizes = {
    'tinyArray': 10,
    'smallArray': 100,
    'mediumArray': 1000,
    'largeArray': 10000,
    'extraLargeArray': 100000
};

console.log('Results for different array sizes:');
console.log('--------------------------------');

for (const size in arraySizes) {
    const array = getSizedArray(arraySizes[size]);

    // Try it with first function
    perf.start();
    doublerAppend(array);
    let resultsAppend = perf.stop();

    console.log(`Array Size: ${size}`);
    console.log("append", resultsAppend.preciseWords);

    // Try it with second function
    perf.start();
    doublerInsert(array);
    let resultsInsert = perf.stop();

    console.log("insert", resultsInsert.preciseWords);
    console.log('--------------------------------');
}
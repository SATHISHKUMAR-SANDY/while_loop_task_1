

// TASK 1

let num = [1, 2, 3, 4, 5, 6];

i = num[0];
while (i <= num.length) {
    console.log(`number=>${i}`)
    i++
}


// TASK 2

let arr = [1, 2, 3, 4, 5, 6, 7];

max = arr.length - 1;

while (max >= 0) {
    console.log(`${arr[max]}`);
    max--
}


// TASK 3



let arr = [10, 20, 5, 345, 8, 34];
let max = arr[0];
let first_value = 0;

while (first_value < arr.length) {
    if (arr[first_value] > max) {
        max = arr[first_value]
    }
    first_value++
}

console.log(`${max}`)


// TASK 4


let arr = [10, 20, 5, 345, 8, 34];
let max = arr[0];
let first_value = 0;

while (first_value < arr.length) {
    if (arr[first_value] < max) {
        max = arr[first_value]
    }
    first_value++
}

console.log(`${max}`)


// TASK 5

let sum_arr = [1, 2, 3, 4];
let max = sum_arr[0];
let first_value = 1;
while (first_value < sum_arr.length) {
    max += sum_arr[first_value]
    first_value++
}
console.log(`${max}`)

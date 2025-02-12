console.log(`Hello world`);

function getName(x, y, i) {
    console.log('1');
    console.log(`2`);
    if (i === 6) return;
    console.log(`4`);
    console.log(`5`);
    return x + y
}

console.log('check sum : ', getName(1, 2, 5));

//arrow function - ES6
sum = (a, b) => {
    return a + b;
}

multiplication = (a, b) =>`Hello ` + a * b;

console.log(sum(2, 4));
console.log(multiplication(2, 4));
function* generator() {
    yield 'gen - 1';
    yield 'gen - 2';
    yield 'gen - 3';
}

const a = generator();

console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);

function customGenerator(breakIndex = 3) {
    let called = 0;

    return function () {
        called = called < breakIndex ? called + 1 : undefined;

        return `fn - ${called}`;
    };
}


const b = customGenerator(2);

console.log(b()); // 1
console.log(b()); // 2
console.log(b()); // 3
console.log(b()); // undefined
// merge style and blueSquare objects:

const blueSquare = {
    length: 100,
    color: 'blue'
};

const style = {
    color: 'green'
};

const greenSquare = {
    ...blueSquare,
    ...style
};

console.log(greenSquare); // { length: 100, color: 'green' }

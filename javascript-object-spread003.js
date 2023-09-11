const circle = {
    radius: 10
};

const style = {
    backgroundColor: 'red'
};

const solidCircle = {
    ...circle,
    ...style
};

console.log(solidCircle); // { radius: 10, backgroundColor: 'red' }
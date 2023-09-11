class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    set diameter(value) {
        this.radius = value / 2;
        console.log('SET ', value);
    }
    get diameter() {
        return this.radius * 2;
    }
}

let circle = new Circle(100);

let cloneCircle1 = Object.assign(circle, {
    diameter: 200
});

// SET  200

let cloneCircle2 = {
    ...circle
};

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get area() {
		return this.calcArea();
	}

	calcArea() {
		let s = ((this.a+this.b+this.c)/2);
		return Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c));
		
	}
}

const tri1 = new Triangle(4,5,6);
console.log(tri1.area)

class Equilateral extends Triangle {
	constructor(a) {
		super(a, a, a);
		this.a = a;
	}
}

const tri2 = new Equilateral(20);
console.log(tri2.area)


// a is base, b is length of one of the equal sides
class Iso extends Triangle {
	constructor(a, b) {
		super(a, b, b);
		this.a = a;
		this.b = b;
	}
}

const tri3 = new Iso(2,3);
console.log(tri3.area)
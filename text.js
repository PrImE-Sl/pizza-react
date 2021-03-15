
function Shape(w, h) {
	this.w = w;
	this.h = h
}

const sq = new Shape(10, 10)
sq.toString()

// console.log(sq.hasOwnProperty('toString'))
// console.log(Shape.prototype.__proto__.hasOwnProperty('toString'))
// console.log(sq.__proto__.__proto__.hasOwnProperty('toString'))
// console.log(sq.__proto__.hasOwnProperty('toString'))

const u = {
	n: 'lala',
	n1: 'lala',
	aaa: {
		c: 'kh'
	},
}

u.aaa.c = 'bbb'
console.log(u.aaa.c);

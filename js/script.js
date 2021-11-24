let adder = function () {
	let res = 0;
	return function (x) {
		res += x;
		return res;
	}
};
let sum = adder();
console.log(sum(4));
console.log(sum(8));
console.log(sum(54));
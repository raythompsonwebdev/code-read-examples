function funcOne(arg1, callback) {
	let result = [];
	for (let letter in arg1) {
		if (callback(arg1[letter])) {
			result.push(arg1[letter]);
		}
	}
	return result;
}

function funcTwo(arg1, callback) {
	let result = [];
	arg1.forEach((letter) => (callback(letter) ? result.push(letter) : -1));

	return result;
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const arry = [1, 2, 3, 4, 5, null];
arry[-1] = 6;
console.log(funcOne(arry, (n) => n % 2 === 0));
console.log(funcTwo(arry, (n) => n % 2 === 0));

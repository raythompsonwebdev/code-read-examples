function funcOne(obj) {
	let arryOne = [];

	for (let item in obj) {
		if (/[aeiou]/.test(obj[item])) {
			arryOne.push(obj[item]);
		}
	}
	return arryOne.sort();
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

let obj = {
	1: 'paper',
	2: 'solid',
	3: 'cysts',
	4: 'flyby',
	5: 'pepper',
	6: 'water',
	7: 'glyph',
	8: 'candy',
};
console.log(funcOne(obj));

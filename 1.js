function funcOne(arg1) {
	let newArray = [];
	for (let i = 0; i < arg1.length; i++) {
		if (arg1[i].charCodeAt(0) >= 97) {
			newArray.push(arg1[i]);
		}
	}
	return newArray.join('');
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
console.log(funcOne('A_lFGowJKer324cas12=-elDF235et897te56567rs'));

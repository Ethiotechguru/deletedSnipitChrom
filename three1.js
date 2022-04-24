let arr = [];
let count = 0;
function inception() {
	debugger;
	arr.push(count);
	if (count > 5) {
		return 6;
	}
	count++;
	let b = inception();

	return arr;
}
inception();

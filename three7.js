/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	s = s.split("");
	let arr = [];

	let j = 0;
	while (j < numRows) {
		arr.push([]);
		j++;
	}
	while (s.length !== 0) {
		let i = 0;
		while (i < numRows) {
			arr.push(...s.splice(0, 1));
			i++;
		}
		let signal = numRows - 2;
		while (signal > 0) {
			arr[signal].push(...s.splice(0, 1));
			signal--;
		}
	}
	console.log(arr);
	let Arr = [];
	arr.forEach((ele) => {
		Arr = [...Arr, ...ele];
	});
	let str = Arr.join("");
	return str;
};
convert("PAYPALISHIRING", 3);

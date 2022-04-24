const arr = ["eat", "tea", "cat", "rat", "art", "man", "amn", "nam"];
//[['eat','tea'],['cat'],['rat','art'],['nam','man','amn']]

function checkAnag(input) {
	if (input.length === 0) {
		return [];
	}
	let returnVal = [];

	for (let i = 0; i < input.length - 2; i++) {
		let innerArr = [input[i]];
		for (let j = i + 1; j < input.length; j++) {
			let s = 0;
			// let n=0;

			let first = input[i].split("");
			let second = input[j].split("");

			while (second.length > 0 && s < first.length) {
				if (first.includes(second[0])) {
					second.splice(0, 1);
					s++;
				} else {
					break;
				}
			}
			if (second.length === 0) {
				innerArr.push(input[j]);
				break;
			}
		}
		returnVal.push(innerArr);
	}
	return returnVal;
}

checkAnag(arr);

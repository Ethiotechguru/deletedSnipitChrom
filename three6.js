function isValidSubsequence(array, sequence) {
	// Write your code here.
	let i = 0;
	let j = 0;
	if (array.length < sequence.length) {
		return false;
	}
	let val = [];
	while (i < array.length) {
		if (array[i] === sequence[j]) {
			val.push(array[i]);
			if (val.length === sequence.length && j === sequence.length - 1) {
				return true;
			}
			i++;
			j++;
		} else {
			i++;
		}
	}
	return false;
}
// isValidSubsequence([5,1,22,25,6,-1,8,10],[1,6,-1,10])
isValidSubsequence(
	[5, 1, 22, 25, 6, 12, -1, 8, 10],
	[5, 1, 22, 25, 6, -1, 8, 7]
);

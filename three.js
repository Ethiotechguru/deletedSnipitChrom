function createNode(val) {
	return {
		val: val,
		next: null,
	};
}

function addTwoSum(arr1, arr2) {
	let LinedListOne = createNode(arr1[0]);
	let l1 = LinedListOne;
	let LinedListTwo = createNode(arr2[0]);
	let l2 = LinedListTwo;
	for (let i = 1; i < arr1.length; i++) {
		LinedListOne.next = createNode(arr1[i]);
		LinedListOne = LinedListOne.next;
	}
	for (let i = 1; i < arr2.length; i++) {
		LinedListTwo.next = createNode(arr2[i]);
		LinedListTwo = LinedListTwo.next;
	}
	// console.log(LinedListOne);
	console.log(l1);
	// console.log(LinedListTwo);
	console.log(l2);
}
addTwoSum([2, 4, 3], [5, 6, 4]);

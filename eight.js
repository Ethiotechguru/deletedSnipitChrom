class Node {
	constructor(val) {
		this.val = val;
	}
}
const creatLinkedCycle = (arr) => {
	let node = null;
	let dummyNode;
	for (let i = 0; i < arr.length; i++) {
		let newNode = new Node(arr[i]);
		if (!node) {
			node = newNode;
			dummyNode = newNode;
		} else {
			dummyNode.next = newNode;
			dummyNode = dummyNode.next;
		}
	}
	let temp = node.next;
	dummyNode.next = temp;
	return node;
};
let pp = creatLinkedCycle([3, 2, 0, -4]);
var detectCycle = function (head) {
	let map = {};
	let i = 0;
	let list = head;
	while (list) {
		val = list.val;
		if (map[val]) {
			return list;
		}
		map[val] = i;
		list = list.next;
		i++;
	}
	return -1;
};
detectCycle(pp);

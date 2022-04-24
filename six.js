function createLinkedList(arr) {
	let node = new NodeList(arr[0]);
	let res = node;
	for (let i = 1; i < arr.length; i++) {
		node.next = new NodeList(arr[i]);
		node = node.next;
	}
	return res;
}

class NodeList {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
	append(val) {
		let newNode = {
			val: val,
			next: null,
		};
		if (!this.head) {
			this.head = newNode;
			return this;
		}
		let temp = this.head;
		while (temp.next) {
			temp = temp.next;
		}
		temp.next = newNode;
		return this;
	}
}

const addTwoSum = (l1, l2) => {
	let listOne = createLinkedList(l1);
	let listTwo = createLinkedList(l2);
	let remainder = 0;
	let result = new NodeList();
	let node = result;
	while (listOne || listTwo || remainder) {
		let l1Val = listOne ? listOne.val : 0;
		let l2Val = listTwo ? listTwo.val : 0;
		let sum = l1Val + l2Val + remainder;
		remainder = Math.floor(sum / 10);
		result.next = new NodeList(sum % 10);
		result = result.next;
		listOne = listOne ? listOne.next : null;
		listTwo = listTwo ? listTwo.next : null;
	}
	return node.next;
};

addTwoSum([2, 4, 3], [5, 6, 4]);

// let a = createLinkedList([2,4,3])

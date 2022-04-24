/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function createLinkedList(arr) {
	let node = new NodeList();
	for (let i = 0; i < arr.length; i++) {
		node.append(arr[i]);
	}
	return node;
}
class NodeList {
	constructor() {
		this.head = null;
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
var addTwoNumbers = function (l1, l2) {
	let remender = 0;
	let sum = [];
	let arr1 = [];
	let arr2 = [];
	let i = 0;

	let Node1 = createLinkedList(l1);
	let Node2 = createLinkedList(l2);

	let nodeHead1 = Node1.head;
	let nodeHead2 = Node2.head;

	while (nodeHead1 && nodeHead1.val >= 0) {
		arr1.push(nodeHead1.val);
		nodeHead1 = nodeHead1.next;
	}
	while (nodeHead2 && nodeHead2.val >= 0) {
		arr2.push(nodeHead2.val);
		nodeHead2 = nodeHead2.next;
	}
	arr1.reverse();
	arr2.reverse();
	while (i < arr1.length && i < arr2.length) {
		let result = arr1[i] + arr2[i] + remender;
		let res = result % 10;
		let carry = Math.floor(result / 10);
		sum.push(res);
		remender = carry;
		i++;
	}
	while (i < arr1.length) {
		let result = arr1[i] + remender;
		let res = result % 10;
		let carry = Math.floor(result / 10);
		sum.push(res);
		remender = carry;
		i++;
	}
	while (i < arr2.length) {
		let result = arr2[i] + remender;
		let res = result % 10;
		let carry = Math.floor(result / 10);
		sum.push(res);
		remender = carry;
		i++;
	}
	if (remender > 0) {
		sum.push(remender);
	}
	let node = createLinkedList(sum);
	console.log(sum);
	return node.head;
};
addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);

const ListNode = (arr1, arr2) => {
	let i = 0;
	let sum = [];
	let remender = 0;
	while (i < arr1.length && i < arr2.length) {
		let res = arr1[i] + arr2[i] + remender;
		let str = res.toString();
		if (str.length !== 1) {
			sum.push(+str[1]);
			remender = +str[0];
		} else {
			sum.push(res);
		}
		i++;
	}
	while (i < arr1.length) {
		let res = arr1[i] + remender;
		let str = res.toString();
		if (str.length !== 1) {
			sum.push(+str[1]);
			remender = +str[0];
		} else {
			sum.push(res);
		}
		i++;
	}
	while (i < arr2.length) {
		let res = arr2[i] + remender;
		let str = res.toString();
		if (str.length !== 1) {
			sum.push(+str[1]);
			remender = +str[0];
		} else {
			sum.push(res);
		}
		i++;
	}
	console.log(sum.join(""));
	return sum;
};

// ListNode([2,4,3],[5,6,4]);
// ListNode([0],[0]);

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
// l1 = [2,4,3], l2 = [5,6,4]
let node1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
let node2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
var addTwoNumbers = function (l1, l2) {
	let remender = 0;
	let sum = [];
	let arr1 = [];
	let arr2 = [];
	let i = 0;
	let Node1 = l1;
	let Node2 = l2;

	while (Node1 && Node1.val >= 0) {
		arr1.push(Node1.val);
		Node1 = Node1.next;
	}
	while (Node2 && Node2.val >= 0) {
		arr2.push(Node2.val);
		Node2 = Node2.next;
	}
	while (i < arr1.length && i < arr2.length) {
		let result = arr1[i] + arr2[i] + remender;
		let str = result.toString();
		if (str.length > 1) {
			sum.push(+str[1]);
			remender = +str[0];
		} else {
			sum.push(result);
		}
		i++;
	}
	while (i < arr1.length) {
		let result = arr1[i] + remender;
		let str = result.toString();
		if (str.length > 1) {
			sum.push(+str[1]);
			remender = +str[0];
		} else {
			sum.push(result);
		}
		i++;
	}
	while (i < arr2.length) {
		let result = arr2[i] + remender;
		let str = result.toString();
		if (str.length > 1) {
			sum.push(+str[1]);
			remender = +str[0];
		} else {
			sum.push(result);
		}
		i++;
	}
	return sum;
};
// addTwoNumbers({val:0,next:null},{val:0, next:null})

// class NodeList{
//   constructor(){
//     this.head = null;
//     this.length=0;
//     return this;
//   }
//   append(val){
//     let newNode = {
//       val:val,
//       next:null,
//     }
//     if(!this.head){
//       this.head = newNode;
//       return this;
//     }
//     let temp = this.head;
//     while(temp.next){
//       temp = temp.next;
//     }
//     temp.next = newNode;
//     return this;
//   }
// }
// let a = new NodeList();
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
		return this;
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
	return sum;
};

// let b = addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]);//[8,9,9,9,0,0,0,1]
let a = addTwoNumbers([2, 4, 3], [5, 6, 4]);

class Tree {
	// count = 0;
	constructor(val) {
		this.node = val;
		this.left = null;
		this.right = null;
		return this;
	}
	add(val) {
		if (!val) {
			console.warn("value is required to add to the list");
			return;
		}
		if (!this.node) {
			this.node = val;
			return this;
		}
		let queue = [this];
		while (queue.length > 0) {
			let current = queue.shift();
			if (!current.left) {
				current.left = { node: val, left: null, right: null };
				return this;
			}
			if (!current.right) {
				current.right = { node: val, left: null, right: null };
				return this;
			}
			if (current.left) {
				queue.push(current.left);
			}
			if (current.right) {
				queue.push(current.right);
			}
		}
	}
	search(val, arr) {
		//breth first
		this.count++;
		if (!this.node) {
			console.log("the tree is empty");
			console.log(this.count);
			return -1;
		}
		if (arr.length <= 0) {
			console.log(`${val} is not found in this tree`);
			console.log(this.count);
			return -1;
		}

		let current = arr.shift();
		if (current.node === val) {
			console.log(current);
			console.log(`${val} is found!`);
			return true;
		}
		if (current.left) {
			arr.push(current.left);
		}
		if (current.right) {
			arr.push(current.right);
		}
		this.search(val, arr);
	}
}

let a = new Tree(10);
let b = new Tree(11);
let c = new Tree(12);
let d = new Tree(13);
let e = new Tree(14);
let f = new Tree(15);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
// const root = {val:10, left:{val:11, left:{val:13, left:null, right:null},right:{val:14, left:null, right:null}}, right:{val:12, left:null, right:{val:15, left:null, right:null}}}
let count = 0;
function find(root) {
	if (root === null) {
		return [];
	}

	let leftVal = find(root.left);
	let rightVal = find(root.right);
	return [root.node, ...leftVal, ...rightVal];
}
find(a);

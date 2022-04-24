class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
		return this;
	}
}
class BinaryTree {
	constructor() {
		this.root = null;
	}
	insert(val) {
		let newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (val < current.val) {
				if (!current.left) {
					current.left = newNode;
					return this;
				} else {
					current = current.left;
				}
			} else {
				if (!current.right) {
					current.right = newNode;
					return this;
				} else {
					current = current.right;
				}
			}
		}
		return this;
	}
	lookUp(val) {
		if (!this.root) {
			return null;
		}
		let currentNode = this.root;

		while (true) {
			if (val === currentNode.val) {
				return currentNode;
			} else {
				if (val < currentNode.val) {
					currentNode = currentNode.left;
				} else {
					currentNode = currentNode.right;
				}
			}
			if (!currentNode) {
				return null;
			}
		}
	}
}
let nodeTree = new BinaryTree();
nodeTree.insert(100);
nodeTree.insert(80);
nodeTree.insert(200);
nodeTree.insert(300);
nodeTree.insert(120);
nodeTree.insert(70);
nodeTree.insert(90);

let tree = JSON.stringify(nodeTree.root);

nodeTree.lookUp(85);

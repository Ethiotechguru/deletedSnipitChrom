class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.lenght = 0;
	}
	append(val) {
		if (!val) {
			return null;
		}
		let newNode = new Node(val);
		if (!this.head && !this.tail) {
			this.head = newNode;
			this.tail = newNode;
		} else if (this.head === this.tail) {
			console.log("is Equal");
			this.head.next = newNode;
			this.tail = newNode;
			this.tail.prev = this.head;
		} else {
			let node = this.head;
			let prev = this.tail;
			prev.next = newNode;
			this.tail = newNode;
			this.tail.prev = prev;
		}
		this.lenght++;
		return this;
	}
	preppend(val) {
		let newNode = new Node(val);
		if (!this.head && !this.tail) {
			this.head = newNode;
			this.tail = newNode;
		} else if (this.head === this.tail) {
			newNode.next = this.head;
			this.head = newNode;
			this.tail.prev = this.head;
		} else {
			newNode.next = this.head;
			newNode.next.prev = newNode;
			this.head = newNode;
		}
		this.lenght++;
		return this;
	}
	lookUp(idx) {
		if (idx < 0 || idx >= this.lenght) {
			return null;
		}
		let i = Math.floor(this.lenght / 2);
		if (idx <= i) {
			let j = 0;
			let node = this.head;
			while (idx !== j) {
				node = node.next;
				j++;
			}
			return node.val;
		} else if (idx > i) {
			let j = this.lenght - 1;
			let tail = this.tail;
			while (idx !== j) {
				tail = tail.prev;
				j--;
			}
			return tail.val;
		}
		return null;
	}
	remove(idx) {
		if (idx < 0 || idx >= this.lenght) {
			return null;
		}
		if (idx === 0) {
			let node = this.head;
			node.next.prev = null;
			this.head = node.next;
			this.lenght--;
			return this;
		}
		if (idx === this.lenght - 1) {
			let tail = this.tail.prev;
			tail.next = null;
			this.tail = tail;
			this.lenght--;
			return this;
		}
		let i = Math.floor(this.lenght / 2);
		if (idx <= i) {
			let j = 0;
			let node = this.head;
			while (idx !== j) {
				node = node.next;
				j++;
			}
			let temp = node;
			temp.prev.next = temp.next;
			temp.next.prev = temp.prev;
			this.lenght--;
			return this;
		} else if (idx > i) {
			let j = this.lenght - 1;
			let tail = this.tail;
			while (idx !== j) {
				tail = tail.prev;
				j--;
			}
			let temp = tail;
			temp.prev.next = temp.next;
			temp.next.prev = temp.prev;
			this.lenght--;
			return this;
		}
		return null;
	}
	insert(val, idx) {
		if (!val || idx < 0) {
			return null;
		}
		if (idx === 0) {
			return this.preppend(val);
		}
		if (idx >= this.lenght) {
			return this.append(val);
		}
		let i = Math.floor(this.lenght / 2);
		let newNode = new Node(val);
		if (idx <= i) {
			let j = 0;
			let node = this.head;
			while (j !== idx) {
				node = node.next;
				j++;
			}
			newNode.prev = node.prev;
			newNode.next = node;
			newNode.prev.next = newNode;
			newNode.next.prev = newNode;
			this.lenght++;
			return this;
		}
	}
}

let node = new LinkedList();

node.preppend("h");
node.preppend("g");
node.preppend("f");
node.preppend("e");
node.preppend("d");
// node.preppend('c');
node.preppend("b");
node.preppend("a");

node.insert("c", 2);

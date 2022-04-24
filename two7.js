class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	append(val) {
		let newNode = {
			val: val,
			next: null,
		};
		if (!this.head && !this.tail) {
			this.head = newNode;
		} else if (this.tail === this.head) {
			this.head.next = newNode;
		} else {
			let tail = this.tail;
			tail.next = newNode;
		}
		this.tail = newNode;
		this.length++;
		return this;
	}
	preppand(val) {
		let newNode = {
			val: val,
			next: null,
		};
		if (!this.head && !this.tail) {
			this.tail = newNode;
		} else if (this.head === this.tail) {
			let head = this.head;
			newNode.next = head;
		} else {
			let head = this.head;
			newNode.next = head;
		}

		this.head = newNode;
		this.length++;
		return this;
	}
	insert(indx, val) {
		if (typeof indx !== "number") null;
		if (indx < 0) null;

		if (indx === 0) {
			this.preppand(val);
			return this;
		}
		if (indx >= this.length) {
			this.append(val);
			return this;
		}
		let temp = this.head;
		let head;
		let counter = 0;
		let newNode = {
			val: val,
			next: null,
		};
		while (counter !== indx) {
			head = temp;
			temp = temp.next;
			counter++;
		}
		newNode.next = temp;
		head.next = newNode;
		this.length++;
		return this;
	}
	removeByIndex(indx) {
		if (typeof indx !== "number") {
			return null;
		}
		if (indx < 0 || indx >= this.length) {
			return null;
		}
		if (!this.head) {
			return this;
		}
		let temp = this.head;
		let head = temp;
		let counter = 0;
		if (indx === 0) {
			this.head = temp.next;
			if (!temp.next) {
				this.tail = this.head;
			}
			this.length--;
			return this;
		}
		while (counter !== indx) {
			head = temp;
			temp = temp.next;
			counter++;
		}
		if (counter === this.length - 1) {
			head.next = null;
			this.tail = head;
			this.length--;
			return this;
		}
		head.next = temp.next;
		this.length--;
		return this;
	}
	removeByVal(val) {
		let temp = this.head;
		let head;
		while (temp.val !== val) {
			if (!temp.next) {
				return null;
			}
			head = temp;
			temp = temp.next;
		}
		if (temp === this.head) {
			this.head = temp.next;
			this.length--;
			return this;
		}
		if (temp === this.tail && temp !== this.head) {
			this.tail = head;
			this.tail.next = null;
			this.length--;
			return this;
		}
		head.next = temp.next;
		this.length--;
		return this;
	}
}
let node = new LinkedList();
// node.append(1);
node.append(2);
node.append(3);
node.append(4);
node.append(5);
node.append(6);
// node.append(7);

// node.remove(7)
// node.append(4);

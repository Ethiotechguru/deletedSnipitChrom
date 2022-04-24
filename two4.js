class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}
	set(key, val) {
		let idx = this._hash(key);
		if (!this.data[idx]) {
			this.data[idx] = [];
			this.data[idx].push([key, val]);
			return this.data[idx];
		} else {
			let currentBucket = this.data[idx];
			for (let i = 0; i < this.data[idx].length; i++) {
				if (currentBucket[i][0] === key) {
					currentBucket[i][1] = val;
					return currentBucket;
				}
			}
			this.data[idx].push([key, val]);
			return this.data[idx];
		}
	}
	get(key) {
		let idx = this._hash(key);
		let currentBucket = this.data[idx];
		for (let i = 0; i < this.data[idx].length; i++) {
			if (currentBucket[i][0] === key) {
				return currentBucket[i][1];
			}
		}
	}
}
let arr = new HashTable(50000);
arr.set("grapes", 1000);

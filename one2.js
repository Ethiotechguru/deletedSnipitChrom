class Tree {
	constructor(val) {
		this.node = val;
		this.left = null;
		this.right = null;
		return this;
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
// const  tree=(node, val)=>{
//     let queue = [node];
//     let count = 0;
//     // let current = queue.pop();
//     while(queue.length>0){
//         count++;
//         let current = queue.pop();
//         // console.log(current)
//         if(current.node === val){
//             console.log(current.node);
//             console.log(current)
//             console.log(count)
//             return true;
//         }
//         if(current.right){
//             queue.push(current.right);
//         }
//         if(current.left){
//             queue.push(current.left)
//         }

//     }
// }
// tree(a, 15)

const tree = (node, val) => {
	let queue = [node];
	let count = 0;
	// let current = queue.pop();
	while (queue.length > 0) {
		count++;
		let current = queue.shift();
		// console.log(current)
		if (!current.left) {
			current.left = { node: val, left: null, right: null };
			return node;
		} else if (!current.right) {
			current.right = { node: val, left: null, right: null };
			return node;
		}
		if (current.left) {
			queue.push(current.left);
		}
		if (current.right) {
			queue.push(current.right);
		}
	}
};
tree(a, 16);
tree(a, 17);
tree(a, 18);
tree(a, 19);
tree(a, 20);

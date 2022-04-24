// class Tree{
//   constructor(){
//     this.root= null;

//   }
//   add(val){
//     if(!this.val){
//       this.root = {
//         val:val,
//         letf:null,
//         rigth:null
//       };
//       return this;
//     }else{
//       let node = this.root;
//       let newNode = {val:val,left:null,right:null}
//       while(node){
//         if(!node.left){
//           node.left = newNode;
//         }else if(!node.right){
//           node.right = newNode;
//         }
//         node = node.left;

//       }
//     }
//   }
// }

// const sort = (arr)=>{
//       if(arr.length < 2){
//         return arr;
//       }
//       let len = Math.floor(arr.length/2);
//       let left = arr.slice(0,len);
//       let right = arr.slice(len)
//       return merge(sort(left), sort(right));
// }
// const mergeSort = (arr)=>{
//       if(arr.length===1){
//         return arr;
//       }
//       let len = Math.floor(arr.length/2);
//       let left = arr.slice(0,len);
//       let right = arr.slice(len)
//       return merge(mergeSort(left), mergeSort(right));
// }
// const merge = (a, b)=>{
//   let result = [];
//   let i = 0;
//   let j= 0;
//   while(i<a.length && j<b.length){
//     if(a[i]<b[j]){
//       result.push(a[i]);
//       i++;
//     }else{
//       result.push(b[j])
//       j++;
//     }
//   }
//   while(i<a.length){
//       result.push(a[i]);
//       i++;
//   }
//   while(j<b.length){
//       result.push(b[j])
//       j++;
//   }
//   return [...result];
// }
// const mergeSort = (a, b)=>{
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while(i<a.length && j<b.length){
//     if(a[i]<b[j]){
//       result.push(a[i]);
//       i++;
//     }else{
//       result.push(b[j]);
//       j++;
//     }
//   }
//   while(i<a.length){
//       result.push(a[i]);
//       i++;
//   }
//   while(j<b.length){
//       result.push(b[j]);
//       j++;
//   }

//   return [...result];
// }
// var sortColors = function(nums) {
//     return mergeSort(nums)
// };

// sortColors([2,0,2,1,1,0]);

const mergeSort = (arr) => {
	if (arr.length === 1) {
		return arr;
	}
	let len = Math.floor(arr.length / 2);
	let left = arr.slice(0, len);
	let right = arr.slice(len);
	arr = merge(mergeSort(left), mergeSort(right));
	return arr;
};
const merge = (a, b) => {
	let result = [];
	let i = 0;
	let j = 0;
	while (i < a.length && j < b.length) {
		if (a[i] < b[j]) {
			result.push(a[i]);
			i++;
		} else {
			result.push(b[j]);
			j++;
		}
	}
	while (i < a.length) {
		result.push(a[i]);
		i++;
	}
	while (j < b.length) {
		result.push(b[j]);
		j++;
	}
	return [...result];
};
// var sortColors = function(nums) {
//     return mergeSort(nums);
// };
var sortColors = function (nums) {
	let start = 0;
	let index = 0;
	let end = nums.length - 1;
	while (index <= end && start < end) {
		if (nums[index] === 0) {
			nums[index] = nums[start];
			nums[start] = 0;
			start++;
			index++;
		} else if (nums[index] === 2) {
			nums[index] = nums[end];
			nums[end] = 2;
			end--;
		} else {
			index++;
		}
	}
	return nums;
};
// sortColors([2,0,1])
// function sort(a) {
//   let start = 0;
//   let idx = 0;
//   let end = a.length-2;
//   while(idx<=end && start<end){
//     if(nums[idx]===0){
//       nums[idx] = nums[start];
//       nums[start] = 0;
//     }
//   }
// }
// sortColors([2,0,2,1,1,0]);

//[2,0,2,1,1,0]
function reveseStri(str) {
	let strArr = str.split("");
	return strArr.reduce((a, b) => {
		return a + b;
	}, "");
}
// reveseStri('Samule')

var mySqrt = function (x) {
	let result = 1;
	if (x < 3) {
		return 1;
	}
	let prev;
	let prevSqr;
	for (let i = 0; i < x; i++) {
		if (i * i === x) {
			return i;
		} else {
			if (prev) {
				if (prev * prev < x && i * i > x) {
					return prev;
				}
			}
			prev = i;
		}
	}
};
// mySqrt(8)

const sort = (arr) => {
	if (arr.length === 1) {
		return arr;
	}
	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(m);
	return mergeSort(sort(left), sort(right));
};
var merge33 = function (nums1, m, nums2, n) {
	const mergeSort = (a, b) => {
		let result = [];
		let i = 0;
		let j = 0;
		while (a.length && b.length) {
			if (a[i] < b[i]) {
				result.push(...a.splice(0, 1));
			} else {
				result.push(...b.splice(0, 1));
			}
		}
		return [...result, ...a, ...b];
	};

	return mergeSort(nums1, nums2);
};

// merge33([1,2,3,0,0,0],3,[2,5,6],3)

let words = [
	"abc",
	"aac",
	"abbc",
	"ac",
	"ab",
	"ac",
	"a",
	"aa",
	"acc",
	"b",
	"c",
];
// console.log(words);
// words.sort()
// console.log(words);
function swapSot(arr) {
	let i = 0;
	let lasIndex = arr.length - 1;
	while (i < lasIndex) {
		let j = i + 1;
		while (j <= lasIndex) {
			if (arr[i] > arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
				j++;
			} else {
				j++;
			}
		}
		lasIndex--;
		i = 0;
		if (lasIndex <= 1) {
			break;
		}
	}
	i++;
	console.log(arr);
}
swapSot(["abc", "aac", "abbc", "ac", "ab", "ac", "a", "aa", "acc", "b", "c"]);
function selectionSort(arr) {
	let i = 0;
	while (i < arr.length) {
		let j = i + 1;
		let minIdex = i;
		while (j < arr.length) {
			if (arr[i] > arr[j]) {
				if (arr[j] < arr[minIdex]) {
					minIdex = j;
				}
			}
			j++;
		}
		let temp = arr[i];
		if (minIdex) {
			arr[i] = arr[minIdex];
			arr[minIdex] = temp;
		}
		i++;
	}
	console.log(arr);
}

// selectionSort(['abc','aac','abbc','ac','ab','ac','a','aa','acc','b','c'])
// selectionSort([6,2,39,18,3,5,1,27,10,47,38,97,22])
// swapSot([6,2,39,18,3,5,1,27,10,47,38,97,22])
function mergSortX(arr) {
	if (arr.length === 1) {
		return arr;
	}
	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);
	return sortX(mergSortX(left), mergSortX(right));
}
function sortX(a, b) {
	let result = [];
	while (a.length && b.length) {
		if (a[0] < b[0]) {
			result.push(...a.splice(0, 1));
		} else {
			result.push(...b.splice(0, 1));
		}
	}
	return [...result, ...a, ...b];
}
mergSortX([6, 2, 39, 18, 3, 5, 1, 27, 10, 47, 38, 97, 22]);

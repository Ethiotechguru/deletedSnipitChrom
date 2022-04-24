const arr = ["eat", "tea", "cat", "rat", "art", "man", "amn", "nam"];

const anagramChecker = (input) => {
	let returnValue = [];
	let i = 0;
	let j = i + 1;
	let obj = {};
	while (input.length > 1) {
		let first = input[i].split("");
		let second = input[j].split("");

		if (
			first.length !== second.length &&
			new Set(first).size !== new Set(second).size
		) {
			j++;
			continue;
		} else {
			for (let f_index = 0; f_index < first.length; f_index++) {
				if (second.inclueds(first[f_index])) {
					second.splice(0, 1);
				} else {
					j++;
					break;
				}
			}
			if (second.length > 0) {
				j++;
			} else {
			}
		}
	}
};

let a = ["a", "e", "t", "e"];
let b = ["e", "t", "a", "e"];

// function helper(obj, val ,sum) {
//     if (obj[val]){
//         console.log(obj[val])
//         return true;
//     }
// 	let n = sum - val;
//     console.log(n, val)
// 	obj[n] = n;
// }

// let arr2 = [3,7,2,4,6,1]

// function sumPair(arr, sum) {
//       let obj ={};
//     for(let i = 0; i<arr.length; i++){
//        let h = helper(obj,arr[i], sum);
// 		if(h){
// 			return true;
// 		}
//         // if (obj[arr[i]]){
//         //     console.log(obj[arr[i]])
//         //     return true;
//         // }
//         // let n = sum - arr[i];
//         // console.log(n, arr[i])
//         // obj[n] = n;
//     }
//     console.log(obj)
//     return false;
// }

// sumPair(arr2,4)

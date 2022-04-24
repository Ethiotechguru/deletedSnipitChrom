const myOutput = [
	[1, 10, -11],
	[1, 13, -14],
	[28, 1, -29],
	[48, 1, -49],
	[65, 1, -66],
	[1, 69, -70],
	[2, 12, -14],
	[2, 47, -49],
	[33, 10, -43],
	[56, 10, -66],
	[12, 17, -29],
	[31, 12, -43],
	[13, 36, -49],
	[57, 13, -70],
	[13, 69, -82],
	[28, 15, -43],
	[34, 15, -49],
	[55, 15, -70],
	[26, 17, -43],
	[65, 17, -82],
	[28, 21, -49],
	[21, 61, -82],
	[56, 26, -82],
	[34, 36, -70],
	[34, 48, -82],
	[46, 36, -82],
	[55, -6, -49],
	[46, -3, -43],
	[33, -82, 49],
	[-3, 52, -49],
	[-3, -14, 17],
	[-3, -66, 69],
	[84, -14, -70],
	[93, -11, -82],
	[21, -70, 49],
	[-43, 57, -14],
	[-43, -6, 49],
	[-6, -11, 17],
	[-6, 76, -70],
	[-14, 43, -29],
	[-66, -11, 77],
	[-66, 17, 49],
];
const expected = [
	[-82, -11, 93],
	[-82, 13, 69],
	[-82, 17, 65],
	[-82, 21, 61],
	[-82, 26, 56],
	[-82, 33, 49],
	[-82, 34, 48],
	[-82, 36, 46],
	[-70, -14, 84],
	[-70, -6, 76],
	[-70, 1, 69],
	[-70, 13, 57],
	[-70, 15, 55],
	[-70, 21, 49],
	[-70, 34, 36],
	[-66, -11, 77],
	[-66, -3, 69],
	[-66, 1, 65],
	[-66, 10, 56],
	[-66, 17, 49],
	[-49, -6, 55],
	[-49, -3, 52],
	[-49, 1, 48],
	[-49, 2, 47],
	[-49, 13, 36],
	[-49, 15, 34],
	[-49, 21, 28],
	[-43, -14, 57],
	[-43, -6, 49],
	[-43, -3, 46],
	[-43, 10, 33],
	[-43, 12, 31],
	[-43, 15, 28],
	[-43, 17, 26],
	[-29, -14, 43],
	[-29, 1, 28],
	[-29, 12, 17],
	[-14, -3, 17],
	[-14, 1, 13],
	[-14, 2, 12],
	[-11, -6, 17],
	[-11, 1, 10],
	[-3, 1, 2],
];
const input = [
	34, 55, 79, 28, 46, 33, 2, 48, 31, -3, 84, 71, 52, -3, 93, 15, 21, -43, 57,
	-6, 86, 56, 94, 74, 83, -14, 28, -66, 46, -49, 62, -11, 43, 65, 77, 12, 47,
	61, 26, 1, 13, 29, 55, -82, 76, 26, 15, -29, 36, -29, 10, -70, 69, 17, 49,
];
function concatArr(arr) {
	let temp = [];
	arr.forEach((ele) => {
		temp.push(...ele);
	});
	return temp;
}

// let myArr = concatArr(myOutput);
// let expArr = concatArr(expected);
// console.log(new Set(myArr).size);
// console.log(new Set(expArr).size);
// console.log(new Set(input).size);
// console.log(myArr.length);
// console.log(expArr.length);
// console.log(input.length)
// let count = 0;
// let zeros = [];
// for(let i =0; i<expected.length;i++){
//     if(expected[i][0] === 0 && xpected[i][1] === 0  && xpected[i][2] ===0){
//         zeros.push([expected[i][0],xpected[i][1],xpected[i][2]]);
//         count++;
//     }
// }
// var threeSum = function(nums) {
//     if(nums.length<3){
//       return []
//     }
//     if(nums.filter(ele=>ele!==0).length ===0){
//       return [[0,0,0]]
//     }
//     let map ={}
//     let obj = {}
//     let arr = [];
//     for(let i = 0; i<nums.length-2; i++){
//       for(let j = i+1; j<nums.length-1;j++){
//         let temp = [nums[i], nums[j]];
//         if(temp[0]>temp[1]){
//           let t = temp[0];
//           temp[0] = temp[1];
//           temp[1] = t;
//         }
//         temp = temp.join(',');
//         if(!obj[temp]){
//           obj[temp] = [nums[i], nums[j], i, j];
//         }
//       }
//     }
//     for(let key in obj){
//       for(let i = 2; i<nums.length; i++){
//         let tracker = [obj[key][0], obj[key][1],nums[i]];
//         tracker = tracker.sort((a,b)=>a-b).join('');
//         if(obj[key][0] + obj[key][1] + nums[i] === 0 && !obj[tracker]){
//           if(obj[key][2] !== i && obj[key][3] !== i){
//             arr.push([obj[key][0],obj[key][1],nums[i]]);
//             obj[tracker] = true;
//           }
//         }
//       }
//     }

//     return arr;
// };
var threeSum = function (nums) {
	if (nums.length < 3) {
		return [];
	}
	if (nums.filter((ele) => ele !== 0).length === 0) {
		return [[0, 0, 0]];
	}
	let map = {};
	let obj = {};
	let arr = [];
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length - 2; i++) {
		let j = i + 1;
		let k = nums.length - 1;
		let target = -(1 * nums[i]);
		while (i < k && j < k) {
			if (nums[j] + nums[k] === target) {
				let tracker = [nums[i], nums[j], nums[k]];
				tracker.sort((a, b) => a - b);
				tracker = tracker.join(",");
				if (!obj[tracker]) {
					arr.push([nums[i], nums[j], nums[k]]);
					obj[tracker] = true;
				}
				j++;
			} else if (target > nums[j] + nums[k]) {
				j++;
			} else {
				k--;
			}
		}
	}

	return arr;
};
threeSum([-1, 0, 1, 2, -1, -4]);

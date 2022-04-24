// var threeSum = function(nums) {
//     let i = 0;
//     let map = {}
//     let arr = [];
//     while(i<nums.length){
//       let j = i+1;
//       while(j<nums.length){
//         let sum = nums[i] + nums[j] + nums[j+1];
//           console.log(nums[i],nums[j],nums[j+1])
//           // console.log(nums[j+1])
//         if(sum === 0){
//           let dup = [nums[i],nums[j],nums[j+1]].join('').split('').sort().join('');
//             console.log(dup)
//           if(!map[dup]){
//             arr.push([nums[i],nums[j],nums[j+1]]);
//             map[dup] = dup;
//           }
//         }
//         j++;
//       }
//       i++
//     }
//     return arr;
// };
var threeSum = function (nums) {
	let i = 0;
	let map = {};
	let arr = [];
	while (i < nums.length - 2) {
		let j = i + 1;
		while (j < nums.length - 1) {
			let k = j + 1;
			while (k < nums.length) {
				let sum = nums[i] + nums[j] + nums[k];
				if (sum === 0) {
					let dup = [nums[i], nums[j], nums[k]]
						.join("")
						.split("")
						.sort()
						.join("");
					if (!map[dup]) {
						arr.push([nums[i], nums[j], nums[k]]);
						map[dup] = dup;
					}
				}
				k++;
			}
			j++;
		}
		i++;
	}
	return arr;
};
let q = threeSum([]);

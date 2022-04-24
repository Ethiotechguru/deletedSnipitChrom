// var removeDuplicates = function(nums) {
//     //[1,1,1,2,2,2,3,4,4,5,5]
//     //[1,1,2,2,3,4,4,5,5]
//     let tracker;
//     let freq;
//     let i = 0;
//     while(i<nums.length){
//         if(tracker === nums[i]){
//             if(freq>=2){
//                 nums.splice(i,1);
//             }else{
//                 freq++;
//                 i++;
//             }

//         }else{
//             tracker=nums[i];
//             freq = 1;
//             i++;
//         }
//     }
//     return nums
// };
// removeDuplicates([1,1,1,2,2,3]);
// var removeDuplicates = function(nums) {
//     let n,i=0;
//     while(i<nums.length){
//         if(n === nums[i]){
//             nums.splice(i,1);
//         }
//         else{
//             n = nums[i];
//             i++;
//         }
//     }
//     return nums.length;
// };
var removeDuplicates = function (nums) {
	let i = 0;
	// let j = nums.length-1;
	while (i < nums.length) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1);
		} else {
			i++;
		}
	}
	return nums.length;
};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

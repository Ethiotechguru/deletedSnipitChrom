var firstMissingPositive = function (nums) {
	nums.sort((a, b) => a - b);
	while (nums[0] <= 0) {
		nums.splice(0, 1);
	}
	console.log(nums);
	if (nums[0] !== 1) {
		return 1;
	}
	let i = 0;
	while (i < nums.length) {
		if (nums[i + 1] - nums[i] > 1) {
			return nums[i] + 1;
		}
		i++;
	}
	return nums[nums.length - 1] + 1;
};
firstMissingPositive([3, 4, -1, 1]);

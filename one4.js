var threeSum = function (nums) {
	if (nums.length < 3) {
		return [];
	}
	let i = 0;
	let map = {};
	let obj = {};
	let arr = [];
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			let temp = [nums[i], nums[j]];
			temp = temp.sort().join();
			if (!map[temp]) {
				map[temp] = [nums[i], nums[j], i, j];
			}
		}
	}
	for (let i = 0; i < nums.length; i++) {
		for (let j in map) {
			if (map[j][0] + map[j][1] + nums[i] === 0) {
				let dup = [map[j][0], map[j][1], nums[i]];
				dup = dup.sort().join("");
				if (!obj[dup]) {
					let myarr = [map[j][0], map[j][1], nums[i]];
					// myarr.sort((a,b)=>a-b)
					arr.push(myarr);
					obj[dup] = true;
				}
			}
		}
	}
	return arr;
};
threeSum([
	34, 55, 79, 28, 46, 33, 2, 48, 31, -3, 84, 71, 52, -3, 93, 15, 21, -43, 57,
	-6, 86, 56, 94, 74, 83, -14, 28, -66, 46, -49, 62, -11, 43, 65, 77, 12, 47,
	61, 26, 1, 13, 29, 55, -82, 76, 26, 15, -29, 36, -29, 10, -70, 69, 17, 49,
]);
const threeSumClon = (nums) => {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			let temp = nums[i] + "" + nums[j];
			temp = temp.split("").sort().join("");
			if (!map[temp]) {
				map[temp] = [nums[i], nums[j], i, j];
			}
		}
	}
	for (let i = 0; i < nums.length; i++) {
		for (let j in map) {
			if (
				nums[i] !== map[j][0] &&
				nums[i] !== map[j][1] &&
				map[j][0] + map[j][1] + nums[i] === 0
			) {
				let dup = map[j][0] + "" + map[j][1] + "" + nums[i];
				dup = dup.split("").sort().join(",");
				if (!obj[dup]) {
					let myarr = [map[j][0], map[j][1], nums[i]];
					// myarr.sort((a,b)=>a-b)
					arr.push(myarr);
					obj[dup] = true;
				}
			}
		}
	}
	return arr;
};

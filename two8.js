var lengthOfLongestSubstring = function (s) {
	let map = {};
	let currentLen = 0;
	let currentSubStr = "";
	let len = 0;
	s = s.split("");
	let subStr = "";
	let j = 0;
	while (j < s.length) {
		if (!map[s[j]]) {
			map[s[j]] = s[j];
			subStr = subStr + s[j];
			len++;
			j++;
		} else {
			let idx = s.indexOf(s[j]);
			console.log(idx);
			// j=idx+1;
			// s.splice(idx,1);
			// console.log(s)
			len = 0;
			subStr = "";
			map = {};
			map[s[j]] = s[j];
			subStr = subStr + s[j];
			len++;
			j++;
		}
		if (len > currentLen) {
			currentLen = len;
			currentSubStr = subStr;
		}
	}
	console.log(currentSubStr);
	return currentLen;
};

//tst "dvdf" expectedOutput 3 expectedWord "vdf";
lengthOfLongestSubstring("qwnfenpglqdq"); //"aab"
//lengthOfLongestSubstring("aab")
//qwnfenpglqdq

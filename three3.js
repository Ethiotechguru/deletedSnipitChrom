var reverseStr = function (s, k) {
	s = s.split("");
	let i = 0;
	while (i < s.length) {
		if (i % (2 * k) === 0) {
			let temp = s[i];
			if (s[i + 1]) {
				s[i] = s[i + 1];
				s[i + 1] = temp;
			}
		}
		i++;
	}
	return s.join("");
};

reverseStr("abcdef", 3);
//"cbadef"
//"bacdef"

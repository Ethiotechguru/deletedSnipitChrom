var lengthOfLastWord = function (s) {
	if (s.length === 0) {
		return "";
	}
	let i = s.length - 1;
	let word = "";
	while (i >= 0 && s[i] === " ") {
		i--;
	}
	while (i >= 0 && s[i] !== " ") {
		word = word + s[i];
		i--;
	}
	return word.length;
};
lengthOfLastWord("H ");

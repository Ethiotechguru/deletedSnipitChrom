var rotate = function (matrix) {
	let flag = true;

	let map = {};
	let i = 0;
	let counter = 0;
	len = matrix.length;
	let lastdata = matrix[len - 1];
	while (true) {
		console.log(matrix[i].length);
		let j = matrix[i].length - 1;
		while (true) {
			if (!map[i]) {
				map[i] = [matrix[j][i]];
			} else {
				map[i].push(matrix[j][i]);
			}
			j--;
			counter++;
			if (j < 0) {
				break;
			}
		}
		i++;
		if (counter >= len * matrix[len - 1].length) {
			break;
		}
	}
	for (let key in map) {
		let idx = +key;
		matrix[idx] = map[key];
	}
	return matrix;
};
// rotate([[1,2,3],[4,5,6],[7,8,9]])
let str =
	"civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";

var longestPalindrome = function (s) {
	if (s.length === 1) {
		return s;
	}
	let pal = "";
	let map = {};
	for (let i = 0; i < s.length; i++) {
		for (let j = i; j < s.length; j++) {
			let comp = s.slice(i, j + 1);
			if (!map[comp]) {
				map[comp] = comp;
			}
		}
	}
	for (let key in map) {
		if (
			map[key].split("").reverse().join("") == map[key] &&
			map[key].length > pal.length
		) {
			pal = map[key];
		}
	}
	return pal;
};
longestPalindrome(str);

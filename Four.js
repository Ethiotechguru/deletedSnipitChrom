let str =
	"civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
function findAnagram(s, p) {
	let sArr = new Array(26).fill(0);
	let pArr = new Array(26).fill(0);

	let rusult = [];
	for (let i = 0; i < p.length; i++) {
		let idx = (p.charCodeAt(i) - 19) % 26;
		pArr[idx]++;
	}
	for (let i = 0; i < s.length; i++) {
		let idx = (s.charCodeAt(i) - 19) % 26;
		sArr[idx]++;
		if (i > p.length - 1) {
			let headIdx = (s.charCodeAt(i - p.length) % 26) - 19;
			sArr[headIdx]--;
		}
		if (i >= p.length - 1) {
			if (hellper(sArr, pArr)) {
				rusult.push(i - p.length - 1);
				// rusult[1].push(s[i-p.length-1]);
			}
		}
	}
	console.log(rusult);
	// return pArr;
}
function hellper(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
		return true;
	}
}
// findAnagram('cbaebabacdqthmbca', "abc");

function twoSum(arr, target) {
	let map = {};
	for (let i = 0; i < arr.length; i++) {}
}

var plusOne = function (digits) {
	let rem = 0;
	let sum;
	for (let i = digits.length - 1; i >= 0; i--) {
		if (i === digits.length - 1) {
			sum = digits[i] + 1;
		}
		sum = digits[i] + rem;
		if (sum <= 9) {
			digits[i] = sum;
			return digits;
		}

		let val = sum % 10;
		rem = Math.floor(sum / 10);
		digits[i] = val;
	}
	return [rem].concat(digits);
};

var addBinary = function (a, b) {
	let result = "";
	let i = a.length - 1;
	let j = b.length - 1;
	let rem = 0;
	while (i >= 0 || j >= 0) {
		console.log(b[j] + rem);
		let sum = +a[i] + +b[j] + rem;
		if (sum === 1 || sum === 0) {
			result = sum + result;
			rem = 0;
		} else if (sum === 2) {
			result = "0" + result;
			rem = 1;
		} else {
			result = "1" + result;
			rem = 1;
		}
		j--;
		i--;
	}
	// while(i>=0){
	//     let sum = +a[i] + rem;
	//      if(sum === 1){
	//          result = sum+result;
	//         rem = 0;
	//      }
	//     else if(sum === 2){
	//         result = "0"+result;
	//         rem = 1;
	//     }
	//     else{
	//         result = '1'+result;
	//         rem=1;
	//     }
	//     i--;
	// }
	//  while(j>=0){
	//     let sum = +b[j] + rem;
	//      if(sum === 1){
	//          result = sum+result;
	//         rem = 0;
	//      }
	//     else if(sum === 2){
	//         result = "0"+result;
	//         rem = 1;
	//     }
	//     else{
	//         result = '1'+result;
	//         rem=1;
	//     }
	//     j--;
	// }
	if (rem) {
		result = rem + result;
	}
	return rem + result;
};
addBinary("11111111", "1111");

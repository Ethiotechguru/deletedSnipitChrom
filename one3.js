// const lengthOfSubstr = (s) =>{
//     let j = 0;
//     let len = 0;
//     let currentLen = 0;
//     let str = '';
//     let currentStr = '';
//     let map = {}
//     s = s.split('');
//     while(j<s.length){
//         if(!map[s[j]]){
//             map[s[j]] = s[j];
// 			str = str + s[j];
// 			len++;
// 			j++;
//         }else{
// 			// console.log(currentStr);
// 			// console.log(str)
// 			// console.log(currentLen);
// 			// console.log(len)
// 			if (len > currentLen) {
// 				currentLen = len;
// 				currentStr = str;
// 			}
// 			map = {};
// 			str = "";
// 			len = 0;
// 			let idx = s.indexOf(s[j]);
// 			if(s[j] === s[j-1]){
// 				// console.log(s[j], 'and', s[j-1], 'are equal')
// 				j = j;
// 			}else{
// 				// console.log(idx)
// 				s.splice(0,idx+1)
// 				// console.log(idx)
// 				j = 0;
// 			}
//             map[s[j]] = s[j];
// 			str = str + s[j];
// 			len++;
// 			j++;
//         }
// 		// console.log(currentStr,'current');
// 		// console.log(str,'str')
//     }
// 	if (len > currentLen) {
// 		currentLen = len;
// 		currentStr = str;
// 	}
//     console.log(currentStr);
// 	console.log(str)
// 	console.log(currentLen);
// 	console.log(len)
// }
var lengthOfLongestSubstring = function (s) {
	if (s.length < 2) {
		return s.length;
	}
	let j = 0;
	let len = 0;
	let currentLen = 0;
	let str = "";
	let currentStr = "";
	let map = {};
	while (j < s.length) {
		if (!map[s[j]]) {
			map[s[j]] = [s[j], j];
			str = str + s[j];
			len++;
			j++;
		} else {
			// if (len > currentLen) {
			//   currentLen = len;
			//   currentStr = str;
			// }
			let idx = map[s[j]][1];
			map = {};
			str = "";
			len = 0;
			s = s.substr(idx + 1);
			j = 0;
			// if(s[j] === s[j-1]){
			//   j = j;
			// }else{
			//   s= s.substr(idx+1)
			//   j = 0;
			// }
			map[s[j]] = [s[j], j];
			str = str + s[j];
			len++;
			j++;
		}
	}

	currentLen = len > currentLen ? len : currentLen;
	// currentStr = str.length > currentStr.length ? str : currentStr;
	return currentLen;
};
lengthOfLongestSubstring("ohvhjdml"); //"qwnfenpglqdq"

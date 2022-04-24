// var groupAnagrams = function(strs) {
//     let newArr = strs.map(ele=>{
//       let str =  ele.split('').sort().join('');
//       return str;
//     });
//     console.log(newArr)
//     const areEqula = (s1,s2)=>{
//       let aa = s1.split('').sort().join('');
//       let bb = s2.split('').sort().join('');
//       return aa === bb;
//     }
//     let group = [];
//     let i = 0;
//     while(i<strs.length){
//       j= i+1;
//       let temp = [strs[i]]
//       while(j<strs.length){
//         if(areEqula(strs[i],newArr[j])){
//           temp.push(...strs.splice(j,1));
//           newArr.splice(j,1);
//         }else{
//           j++
//         }
//       }
//       group.push(temp);
//       i++;
//     }
//   return group;
// };

// var groupAnagrams = function(strs) {
//     let group = [];
//     let i = 0;
//     let obj = {}
//     while(i<strs.length){
//       let j=i+1;
//       let temp = [strs[i]]
//       let target = strs[i].split('').sort().join('');
//       while(j<strs.length){
//         let mid = Math.floor(strs.length-1/2);
//         let compare = strs[j].split('').sort().join('');
//         if(compare===target){
//           temp.push(...strs.splice(j,1));
//         }
//         else{
//           j++
//         }
//       }
//       group.push(temp);
//       i++;
//     }
//   return group;
// };

// groupAnagrams(["eat","tea","tan","ate","nat","bat"]);

var findAnagrams = function (s, p) {
	if (s.length < p.length) {
		return [];
	}

	let arr = [];
	let len = p.length;
	let i = 0;
	while (i < s.length) {
		let word = s.slice(i, i + len);
		word = word.split("").sort().join("");
		let wordp = p.split("").sort().join("");
		console.log(word);
		console.log(wordp);
		if (word === wordp) {
			arr.push(i);
		}
		i++;
	}
	return arr;
};
findAnagrams("cbaebabacd", "abc");

// var findAnagrams = function(s, p) {
//     if(s.length<p.length){
//       return [];
//     }
//     let map = {}
//     let arr =[];
//     let len = p.length;
//     let i = 0;
//     while(i<s.length){
//       let word = s.slice(i,i+len);
//       word = word.split('').sort().join('');
//       let wordp = p.split('').sort().join('');
//       if(word === wordp){
//         arr.push(i);
//       }
//       i++;
//     }
//   return arr
// };

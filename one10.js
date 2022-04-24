let val = "hell";
const div = document.createElement("input");
div.setAttribute("tyep", "text");
div.setAttribute("value", val);
div.textContent = "hello";

document.body.append(div);
const getData = async (url) => {
	const data = await fetch(url);
	const res = await data.json();
	console.log("making requst....");
	console.log(res);
};
let timer;
let flag = true;
function magic() {
	// console.log(timer);
	// clearTimeout(timer)
	// timer = setTimeout(()=>{
	//     getData('https://jsonplaceholder.typicode.com/users');
	// },1000)
	setTimeout(() => {
		if (flag) {
			getData("https://jsonplaceholder.typicode.com/users");
		}
		flag = false;
	}, 400);
}

// let btn = document.querySelector('input');
document.body.addEventListener("keypress", magic);

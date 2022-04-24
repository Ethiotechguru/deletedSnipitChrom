function scopeCheck(params) {
	console.log(i);
	if (true) {
		var count = 20;
	}
	let i = 10;
	for (let i = 0; i <= 5; i++) {
		(function (num) {
			setTimeout(() => {
				console.log(count + num);
			}, 0);
		})(i);
	}
}
scopeCheck();

function modArr() {
	let orgiArr = [];
	orgiArr["len"] = orgiArr.length;
	return (key, val) => {
		console.log(arguments);
		if (typeof key !== "number" && typeof key !== "string") {
			return -1;
		}
		if (typeof key === "number" && key >= 0) {
			if (!orgiArr[key]) {
				let prevLen = orgiArr.length;
				orgiArr[key] = val;
				let diff = 0;
				if (orgiArr.length - prevLen > 0) {
					diff = orgiArr.length - prevLen;
					orgiArr["len"] = orgiArr["len"] + diff;
					for (let key in orgiArr) {
						if (isNaN(+key) || +key < 0) {
							orgiArr[key].index = orgiArr[key].index + diff;
						}
					}
				}
			} else {
				orgiArr[key] = val;
			}
		} else if (typeof key === "string" || key < 0) {
			if (orgiArr[key]) {
				orgiArr[key] = { val: val, index: orgiArr[key].index };
			} else {
				let index = orgiArr["len"];
				orgiArr[key] = { val: val, index: index };
				orgiArr["len"]++;
			}
		}
		return orgiArr;
	};
}

const arreyModifierFunc = modArr();
arreyModifierFunc(0, 10);
arreyModifierFunc(1, 11);
arreyModifierFunc(2, 12);
arreyModifierFunc(3, 13);
arreyModifierFunc(-3, 15);
arreyModifierFunc("p", "pamila");
arreyModifierFunc("r", "Ramila");
arreyModifierFunc(4, "Alex");
let c = arreyModifierFunc(5, "Rolex");

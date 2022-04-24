const myShow = [];
function getShow() {
	let count = 1;
	function recurs() {
		return fetch(`https://api.tvmaze.com/shows/${count}`)
			.then((data) => {
				return data.json();
			})
			.then((result) => {
				if (result) {
					myShow.push(result);
					count++;
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
	while (count <= 100) {
		recurs();
	}
}
getShow();

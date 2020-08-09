let arr = [
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
];

let arrMatch = [
	[1, 1, 1],
	[0, 0, 1],
	[0, 0, 1],
];

for (let i = 0; i < arrMatch.length; i++) {
	console.log(arr[i]);
	for (let j = 1; j < arr[i].length - 1; j++) {
		console.log(arr[i][j]);
		console.log(arrMatch[i][j - 1]);
		if (arr[i][j] !== arrMatch[i][j - 1]) {
			console.log("true");
			arr[i][j] = arrMatch[i][j - 1];
		}
	}
}

console.log(arr);

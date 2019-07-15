

function fibCount() {
	let fibs = [1, 1];
	let newNum;
	let evenArray = [];
	let sum;

//adding onto fibs array while the condition is at the limit. could replace
//4,000,000 with an argument to fibCount. I then check if the number passed to
//the array is even, then send that even number to a new array
//to be summed after the while loop terminates

	while (fibs[fibs.length - 1] < 4000000) {
		newNum = fibs[fibs.length - 1] + fibs[fibs.length - 2];
		fibs.push(newNum);
		if (newNum % 2 == 0) {
			evenArray.push(newNum);

		}
	}
	console.log(fibs[fibs.length - 1]);
	console.log(fibs[fibs.length - 2]);
	console.log(evenArray);

	sum = evenArray.reduce((x, y) => x + y, 0);
	console.log(sum);
}

fibCount();
//project euler #2: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
function fibCount() {
	let fibs = [1, 1];
	let newNum;
	let evenArray = [];
	let sum;
//generating Fibbonaci numbers
	while (fibs[fibs.length - 1] < 4000000) {
		newNum = fibs[fibs.length - 1] + fibs[fibs.length - 2];
		fibs.push(newNum);
		//checking if Fibonacci number i is even, then pushing to a seperate array
		if (newNum % 2 == 0) {
			evenArray.push(newNum);

		}
	}
	console.log(fibs[fibs.length - 1]);
	console.log(fibs[fibs.length - 2]);
	console.log(evenArray);
//summing array of even Fibbonaci numbers
	sum = evenArray.reduce((x, y) => x + y, 0);
	console.log(sum);

	return sum;
}


//project euler #3: What is the largest prime factor of the number 600851475143 ?
function primeFactors(arg) {
	let num = arg;
	//let num = 600851475143;
	let marker = false;
	let array = [];
	let n = 2;

	while (!marker) {
		//look for divisor n of num
		if (num % n == 0) {
			num = num / n;
			//store the divisor n in array
			array.push(n);
			//and then restart the search with a new num
			n = 2;
		} else {
			//or continue looking for divisor
			n++;
		}

		//if current divisor n is bigger than num, the loop should stop
		if (n > num) {
			marker = true;
		}
	}

    /* chaning the code to return the prime factorization instead of 
	only the solution to problem #2 so I can continue using this function in other places */
	console.log(array);
	return (array); 
	//return Math.max(...array);
}


//Project euler #4:
//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.
function palindrome_3() {
	let x1 = 9801; //beginning of range; 99x99
	let x2 = 998001; //end of range; 999x999
	let selected_array; //used to parse numbers
	let reversed_array;
	let container = [];

	//checking every number...
	//todo: explore more efficient approach
	for(let i = x2; i > x1; i--) {
		reversed_array = [];
		selected_array = Array.from(String(i), Number);

		//creating reversed array
		for (let j = selected_array.length - 1; j > -1; j--) {
			reversed_array.push(selected_array[j]);
		}

		if (selected_array.join("") == reversed_array.join("")) {
			console.log("found a palindrome!");
			console.log(selected_array);
			container.push(selected_array.join(""));
			return;
			//temporary return to stop looping
		}

		console.log("looking...");
	}
}
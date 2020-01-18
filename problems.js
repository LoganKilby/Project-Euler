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
	let container;

	//checking every number...
	//todo: explore a more efficient approach than stepping through entire range of numbers
	for(let i = x2; i > x1; i--) {
		container = [];
		reversed_array = [];
		selected_array = Array.from(String(i), Number);

		//creating reversed array
		for (let j = selected_array.length - 1; j > -1; j--) {
			reversed_array.push(selected_array[j]);
		}

		//logic when a palindrome is found
		if (selected_array.join("") == reversed_array.join("")) {
			console.log("Found a palindrome!");
			console.log(selected_array.join(""));
			//getting prime factors from problem #3 function
			container = primeFactors(parseInt(selected_array.join(""), 10));

			//palindrome is prime
			if (container.length == 1) {
				console.log("Palindrome is prime") //continue search
			}

			//checking case when palindrome has only two prime factors that are both three digits
			if (container.length < 3 && container.length > 1) {
				if (container[0] < 999 & container[0] > 99) {
					if (container[1] < 999 & container[i] > 99) {
						console.log("*** Solution found ***");
						console.log(selected_array.join(""));
						return;
					}
				}
			}
			//checking all other cases

			/* Using the last two elements in the array
			to multiply out the rest because in the end
			I need tow remaining numbers to check the answer */

			if (container.length >= 3) { 
				for (let k = 0; k < container.length - 2; k++) {
					if (container[container.length - 1] * container[k] > 1000) {
						container[container.length - 2] = container[container.length - 2] * container[k];	
					} else {
						container[container.length - 1] = container[container.length - 1] * container[k];
					}
				}

				if (container[container.length - 1] < 1000 && container[container.length - 2] < 1000) {
					console.log("*** Solution found ***");
					console.log(selected_array.join(""));
					return;
				}
			}
		}
	}

	console.log("Looking...");
}


//Problem #5:
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
function LCM(x) {
	//Using four seperate arrays seems ghetto, but maybe not... idk

	let primes = [];
	let container = [];
	let container_check = [];
	let input = [];
	let counter;
	
	//need to pass primeFactors() an array
	if (!Array.isArray(x)) {
		for (let i of arguments) {
			input.push(i);
		}
	} else {
		input = x;
	}

	for (let i of input) {
		primes.push(primeFactors(i));
	}

//1. using container array to keep track of which prime factors are included
	for (let i = 0; i < primes.length; i++) {
		for (let j = 0; j < primes[i].length; j++) {
			if(!container.includes(primes[i][j])) {
				container.push(primes[i][j]);
				//initialize array to be mapped to
				container_check.push(0);
			}
		}
	}

//2. looping through all the prime factor arrays to determine the max number of each included factor
	for (let i = 0; i < container.length; i++) {
		for (let j = 0; j < primes.length; j++) {
			counter = 0;
			for (let k = 0; k < primes[j].length; k++) {
				//container[i] is a prime... check primes[j] for match; keep track and update
				if (primes[j][k] == container[i]) {
					counter++;
				}
			}
			if (counter > container_check[i]) {
				container_check[i] = counter;
			}
		}
	}

	for (let i = 0; i < container.length; i++) {
		container_check[i] = container[i] ** container_check[i];
	}

	console.log(container_check.reduce((x, y) => x * y));
	return container_check.reduce((x, y) => x * y);
}

//Problem #6
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
function difference_of_squares() {
	// let input = [];
	// if (!Array.isArray(x)) {
	// 	for (let i of arguments) {
	// 	input.push(i);
	// 	}
	// } else {
	// 	input = x;
	// }
	let input = [];
	for (let i = 1; i < 101; i++) {
		input.push(i);
	}

	let sum_of_squares = input.reduce((x, y) => x + y ** 2);
	
	let sum = input.reduce((x, y) => x + y);
	let square_of_sum = sum ** 2;

	let difference = square_of_sum - sum_of_squares;

	console.log(sum_of_squares, "sum of squares");
	console.log(square_of_sum, "square of sum");
	console.log(difference, "difference of squares");
}

//Problem #7
function generate_primes(x) {
	//stepping through numbers
	//todo: redesign?
	let range = x;
	let marker = false;
	let array = [];
	let primes = [];

	//initialize array
	for (let i = 1; i < x; i++) {
		array.push(i);
	}

	//removing 1 from the array
	array.shift();

	//while (array.length < x) {
	for (let i = array[0]; i < array.length; i++) {
		console.log("looping");
		array = array.filter(function(x) {
			if (x % i !== 0 || x == i) {
				return x;
			}
		});
	}

	//adding new batch of numbers to array?
	if (array.length < x) {

	} else {
		console.log(array);
		return array[x - 1];
	}
	console.log(array);			
	//}
	
	
}
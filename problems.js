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
	//todo: explore a more efficient approach than stepping through range of numbers
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

			//start doing math to see if can be multiplied by two three digit integers

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
	//todo: Need to handle array and single integer arguments
	//Using prime factor method because I have a function to factor primes:
	let container = [];
	let primes;
	let counter;
	let container2 = [];

	if (Array.isArray(x)) {
		console.log("Array received");
	} else {
		console.log("Error, please pass LCM an array");
		return;
	}
	for (let i = 0; i < x.length; i++) {
		primes = primeFactors(x[i]);
		for (let j = 0; j < primes.length; j++) {
			/*for each prime number, try to find it
			in some storage... if it's not there, include it.
			After this, count how many times this prime number
			is found in 'primes' with a counter, then add that
			number to the storage... need a key/value pair? */
			if (!container.includes(primes[j])) {
				container.push(primes[j]);
			}

			if (primes[j] == primes[j-1]) {
				counter += 1;
			} else {
				counter = 1;
			}
			//HELP
		}
	}


	console.log(container);
}

function problem4() {

}

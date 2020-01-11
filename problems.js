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
function gPrimeFactor() {
	let num = 600851475143;
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

	//the current array happens to be the prime factorization of num, but in a general case we would need to do more work with array to find the prime factorization

	return Math.max(...array);


	//If we knew the number of divisors beforehand, the process would be shorter, but I leanred that we would need the prime factorization to know that:
	// "In general, if you have the prime factorization of the number n, then to calculate how many divisors it has, you take all the exponents in the factorization, add 1 to each, and then multiply these "exponents + 1"s together."
	//144 = (2^4)(3^2), so 5 x 3 = 15 divisors of 144.


	console.log(marker);
	console.log(num);
	console.log(n);
	console.log(array);
}


//Project euler #4:
//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.


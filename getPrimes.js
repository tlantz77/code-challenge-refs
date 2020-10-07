const isPrime = (n) => {
	let result = false;
	if (n <= 3) {
		result = true;
	}

	if (n % 2 !== 0 && n % 3 !== 0) {
		let k = 5;
		let step = 2;
		while (k * k <= n && n % k !== 0) {
			k = k + step;
			step = 6 - step;
		}
		if (n === k || n % k !== 0) {
			result = true;
		}
	}

	return result;
};

const getPrimes = (n) => {
	let primes = [];
	for (let i = 0; i <= n; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}
	return primes;
};

console.log(getPrimes(100));

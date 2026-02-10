function calculateFibonacci(n) {
  if (n < 0) {
    throw new Error('Fibonacci number must be non-negative');
  }

  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series;
}

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

function filterPrimes(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Input must be a non-empty array');
  }

  for (const num of arr) {
    if (!Number.isInteger(num) || num < 0) {
      throw new Error('All elements must be non-negative integers');
    }
  }

  return arr.filter(isPrime);
}

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function calculateLCM(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Input must be a non-empty array');
  }

  for (const num of arr) {
    if (!Number.isInteger(num) || num <= 0) {
      throw new Error('All elements must be positive integers');
    }
  }

  return arr.reduce((acc, num) => lcm(acc, num));
}

function calculateHCF(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Input must be a non-empty array');
  }

  for (const num of arr) {
    if (!Number.isInteger(num) || num <= 0) {
      throw new Error('All elements must be positive integers');
    }
  }

  return arr.reduce((acc, num) => gcd(acc, num));
}

module.exports = {
  calculateFibonacci,
  filterPrimes,
  calculateLCM,
  calculateHCF
};

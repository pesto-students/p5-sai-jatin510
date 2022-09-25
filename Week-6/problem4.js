const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7, 6, 4, 3, 1];

function bruteForce(prices) {
  let maxProfit = 0;
  let n = prices.length;

  for (let i = 0; i < n; i++) {
    let price = prices[i];
    for (let j = i + 1; j < n; j++) {
      if (prices[j] - price > maxProfit) {
        maxProfit = prices[j] - price;
      }
    }
  }

  return maxProfit;
}

function optimized(prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);

    const diff = price - minPrice;

    if (diff > maxProfit) maxProfit = diff;
  }

  return maxProfit;
}

console.log('result with brute force approach : ', bruteForce(prices));
console.log('result with optimized approach : ', optimized(prices));

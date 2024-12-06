let dp: number[][] = Array.from({ length: 6 }, () => new Array(5).fill(0));

dp[0][0] = 1;

console.log(dp);
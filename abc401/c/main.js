process.stdin.setEncoding("utf8");

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
});

reader.on("line", (line) => {
  lines = lines.concat(line.split(" "));
});
reader.on("close", () => {
  const N = lines[0];
  const K = lines[1];

  const values = [];

  for (let i = K + 1; i <= N; i++) {
    let currentValue = 0;
    if (i - K > 0) {
      currentValue += i - K;
      for (let j = i - K; 0 < j; j--) {
        currentValue += valueMap[i - j];
      }
    } else {
      for (let k = i - K; 0 < k; k--) {
        currentValue += valueMap[i - j];
      }
    }
    valueMap[i] = currentValue % 1e9;
    delete valueMap[i - K];
  }

  console.log(valueMap);
});

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

  const values = Array.from({ length: K }, (_) => 1);

  for (let i = K; i <= N; i++) {
    currentValue = 2 * values[i - 1] - (values[i - K - 1] ?? 0);
    values.push(currentValue % 1e9);
  }
  console.log(values[values.length - 1]);
});

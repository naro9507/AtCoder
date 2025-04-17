process.stdin.setEncoding("utf8");

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
});

reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  let count = 0;
  const N = lines[0];
  const S = lines[1];
  const T = lines[2];

  for (let i = 0; i < N; i++) {
    if (S[i] !== T[i]) {
      count++;
    }
  }

  console.log(count);
});

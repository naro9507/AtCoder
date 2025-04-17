process.stdin.setEncoding("utf8");

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
});

reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const N = lines[0];
  const P = lines[1].split(" ");
  for (let i = 0; i < N; i++) {
    let rank = 1;
    for (let j = 0; j < N; j++) {
      if (Number(P[j]) > Number(P[i])) {
        rank += 1;
      }
    }
    console.log(rank);
  }
});

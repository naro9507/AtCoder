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
  const M = lines[1];

  let res = 0;
  for (let i = 0; i <= M; i++) {
    res += N ** i;
  }

  if (res <= 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10) {
    console.log(res);
    return;
  }

  console.log("inf");
});

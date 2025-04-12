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

  let ret = 0;

  let a = 1;
  while (true) {
    const left = 2 ** a;
    if (left > N) {
      break;
    }
    const b = Math.trunc(Math.sqrt(N / left));
    ret += Math.trunc((b + 1) / 2);
    a += 1;
  }
  console.log(ret);
});

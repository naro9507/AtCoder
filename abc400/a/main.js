process.stdin.setEncoding("utf8");

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
});

reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  if (lines.length === 0) {
    console.error("No Input");
    return;
  }
  const rows = lines[0];
  const res = 400 % rows === 0 ? 400 / rows : -1;
  console.log(res);
});

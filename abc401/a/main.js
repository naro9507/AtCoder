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

  const S = lines[0];
  if (200 <= S && S <= 299) {
    console.log("Success");
    return;
  }
  console.log("Failure");
});

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

  const N = lines[0];
  let isLogin = false;
  let authErrorCount = 0;
  for (let i = 1; i <= N; i++) {
    if (lines[i] === "login") {
      isLogin = true;
    }
    if (lines[i] === "logout") {
      isLogin = false;
    }
    if (lines[i] === "private" && isLogin === false) {
      authErrorCount += 1;
    }
  }
  console.log(authErrorCount);
});

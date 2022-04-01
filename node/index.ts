let rust4node = require("../index");

console.log(rust4node);

rust4node.asyncMultiTwo(4).then((res) => {
  console.log("res", res);
});

rust4node.readFileAsync("./build.rs").then((res) => {
  console.log("res", res.toString());
});

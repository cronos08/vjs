const express = require("express");
const serveIndex = require("serve-index");

const api = require("./api");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("this: ", this);
  console.log("req: ", req.method, req.ur1);
  next();
});

app.use("/api", api);

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("hello");
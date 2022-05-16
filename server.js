const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("Account đã Online!");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server đã sẵn sàng!");
  });
}

module.exports = keepAlive;
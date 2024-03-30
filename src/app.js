import http from "node:http";

const server = http.createServer(async (req, res) => {
  return res.end(JSON.stringify({ message: "Início API" }));
});

server.listen(3000);

import http from "node:http";
import { routes } from "./routes.js";
import { json } from "./middlewares/json.js";

const server = http.createServer(async (req, res) => {
  const route = routes.find((r) => r.method == req.method && req.url == r.path);

  await json(req, res);

  if (route) {
    return route.handler(req, res);
  }
  return res.end(JSON.stringify({ message: "Início API" }));
});

server.listen(3000);

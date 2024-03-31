import http from "node:http";
import { routes } from "./routes.js";
import { json } from "./middlewares/json.js";
import { extractQueryParams } from "./utils/extractQueryParams.js";

const server = http.createServer(async (req, res) => {
  const route = routes.find((r) => r.method == req.method && r.path.test(req.url));

  await json(req, res);

  if (route) {
    return route.handler(req, res);
  }
  return res.end(JSON.stringify({ message: "Início API" }));
});

server.listen(3000);

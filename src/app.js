import http from "node:http";
import { routes } from "./routes.js";
import { json } from "./middlewares/json.js";
import { extractQueryParams } from "./utils/extractQueryParams.js";

const server = http.createServer(async (req, res) => {
  const route = routes.find((r) => r.method == req.method && r.path.test(req.url));

  await json(req, res);

  if (route) {
    const routeParams = req.url.match(route.path);
    const { query, ...params } = routeParams.groups;
    req.params = params;
    console.log(req.params);
    req.query = query ? extractQueryParams(query) : {};

    return route.handler(req, res);
  }
  return res.writeHead(404).end(JSON.stringify({ message: "Página não encontrada" }));
});

server.listen(3000);

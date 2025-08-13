
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // your data file
const middlewares = jsonServer.defaults();

// Apply middlewares
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Mount API at /api
server.use(router);

// Use PORT from hosting or fallback to 3000
const port = process.env.PORT || 3000;
server.listen(port, "0.0.0.0", () => {
  console.log(`JSON Server running on port ${port}`);
});

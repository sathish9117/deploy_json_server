const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

// Use CORS middleware
server.use(cors());

// Set default middlewares (logger, static, cors, no-cache)
server.use(middlewares);

// Add your custom routes before JSON Server router
server.use(router);

server.listen(3000, () => {
  try {
    console.log("JSON Server is running");
  } catch (error) {
    console.log(error);
  }
});

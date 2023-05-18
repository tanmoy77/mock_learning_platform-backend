const auth = require("json-server-auth");
const cors = require('cors');
const jsonServer = require("json-server");
const express = require("express");
const http = require("http");

const app = express();
app.use(cors());
const server = http.createServer(app);

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

// Bind the router db to the app
app.db = router.db;

app.use(middlewares);

app.use(auth);
app.use(router);

server.listen(port);
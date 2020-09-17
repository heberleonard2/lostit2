const express = require("express");
const SessionController = require("./controllers/SessionController");
const LostItemController = require("./controllers/LostItemController");
const DashboardController = require("./controllers/DashboardController");

const routes = express.Router();

routes.post("/sessions", SessionController.store);

routes.get("/lostitems", LostItemController.index);

routes.get("/lostitems/:id", LostItemController.show);

routes.post("/lostitems", LostItemController.store);

routes.put("/lostitems/:id", LostItemController.update);

routes.get("/dashboard", DashboardController.index);

module.exports = routes;

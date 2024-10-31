const { Router } = require("express");
const usersController = require("../controllers/userController");
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);
usersRouter.get("/new", usersController.usersCreateGet);
usersRouter.get("/delete", usersController.usersDeleteGet);
usersRouter.post("/new", usersController.usersCreatePost);

module.exports = usersRouter;

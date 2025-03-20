import express from "express";
import { UsersController } from "../controllers/UsersController";

export const usersRouter = express.Router();
const usersController = new UsersController();

usersRouter.post("/", usersController.create);

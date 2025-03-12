import express from "express";
import { PostsController } from "../controllers/postController";

export const postsRouter = express.Router();
const postsController = new PostsController();

postsRouter.post("/", postsController.create);
postsRouter.get("/", postsController.index);

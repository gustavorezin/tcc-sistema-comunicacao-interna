import { Router } from "express";
import { postsRouter } from "../../../../modules/posts/infra/http/routes/postRoutes";

export const routes = Router();

routes.use("/posts", postsRouter);

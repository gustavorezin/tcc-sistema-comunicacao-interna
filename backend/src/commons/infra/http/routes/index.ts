import { Router } from "express";
import { postsRouter } from "@modules/posts/infra/http/routes/postRoutes";
import { usersRouter } from "@modules/users/infra/http/routes/userRoutes";

export const routes = Router();

routes.use("/posts", postsRouter);
routes.use("/users", usersRouter);

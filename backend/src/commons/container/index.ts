import { IPostsRepository } from "@modules/posts/domain/repositories/IPostsRepository";
import { PostsRepository } from "@modules/posts/infra/prisma/repositories/PostsRepository";
import { container } from "tsyringe";

container.registerSingleton<IPostsRepository>(
  "PostsRepository",
  PostsRepository
);

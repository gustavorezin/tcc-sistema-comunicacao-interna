import { IPostsRepository } from "@modules/posts/domain/repositories/IPostsRepository";
import { PostsRepository } from "@modules/posts/infra/prisma/repositories/PostsRepository";
import { IUsersRepository } from "@modules/users/domain/repositories/IUsersRepository";
import { UsersRepository } from "@modules/users/infra/prisma/repositories/UsersRepository";
import { container } from "tsyringe";

import "@modules/users/providers";

container.registerSingleton<IPostsRepository>(
  "PostsRepository",
  PostsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

import { prisma } from "@commons/infra/prisma/prismaClient";
import { ICreatePost } from "@modules/posts/domain/models/ICreatePost";
import { IPost } from "@modules/posts/domain/models/IPost";
import { IPostsRepository } from "@modules/posts/domain/repositories/IPostsRepository";
import { injectable } from "tsyringe";

@injectable()
export class PostsRepository implements IPostsRepository {
  async create(dataCreatePost: ICreatePost): Promise<IPost> {
    const post = await prisma.post.create({
      data: dataCreatePost,
    });
    return post;
  }

  async findAll(): Promise<IPost[]> {
    const posts = await prisma.post.findMany();
    return posts;
  }
}

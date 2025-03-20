import { prisma } from "@commons/infra/prisma/prismaClient";
import { ICreatePost } from "@modules/posts/domain/models/ICreatePost";
import { IPost } from "@modules/posts/domain/models/IPost";
import { IPostsRepository } from "@modules/posts/domain/repositories/IPostsRepository";

export class PostsRepository implements IPostsRepository {
  private readonly repository = prisma.post;

  async create(dataCreatePost: ICreatePost): Promise<IPost> {
    const post = await this.repository.create({
      data: {
        content: dataCreatePost.content,
        author: { connect: { id: dataCreatePost.authorId } },
      },
    });
    return post;
  }

  async findAll(): Promise<IPost[]> {
    const posts = await this.repository.findMany();
    return posts;
  }
}

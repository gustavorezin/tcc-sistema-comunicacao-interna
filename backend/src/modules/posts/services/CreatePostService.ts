import { injectable, inject } from "tsyringe";
import { IPostsRepository } from "../domain/repositories/IPostsRepository";
import { ICreatePost } from "../domain/models/ICreatePost";
import { IPost } from "../domain/models/IPost";

@injectable()
export class CreatePostService {
  constructor(
    @inject("PostsRepository")
    private postsRepository: IPostsRepository
  ) {}

  public async execute({ content, authorId }: ICreatePost): Promise<IPost> {
    const post = await this.postsRepository.create({ content, authorId });
    return post;
  }
}

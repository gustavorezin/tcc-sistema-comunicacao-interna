import { injectable, inject } from "tsyringe";
import { IPostsRepository } from "../domain/repositories/IPostsRepository";
import { ICreatePost } from "../domain/models/ICreatePost";

@injectable()
export class CreatePostService {
  constructor(
    @inject("PostsRepository")
    private postsRepository: IPostsRepository
  ) {}

  public async execute({ title, content }: ICreatePost) {
    const post = await this.postsRepository.create({ title, content });
    return post;
  }
}

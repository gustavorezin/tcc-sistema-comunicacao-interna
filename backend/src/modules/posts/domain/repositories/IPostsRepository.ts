import { ICreatePost } from "../models/ICreatePost";
import { IPost } from "../models/IPost";

export interface IPostsRepository {
  findAll(): Promise<IPost[]>;
  create(data: ICreatePost): Promise<IPost>;
}

import { IUser } from "@modules/users/domain/models/IUser";

export interface IPost {
  id: string;
  content: string;
  authorId: string;
  //author: IUser;
  createdAt: Date;
  updatedAt: Date;
}

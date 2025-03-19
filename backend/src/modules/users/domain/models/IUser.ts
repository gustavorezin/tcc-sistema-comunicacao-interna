import { IGroup } from "@modules/groups/domain/models/IGroup";
import { IPost } from "@modules/posts/domain/models/IPost";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  groupId?: string;
  group?: IGroup;
  posts?: IPost[];
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = "ADMIN",
  COLLABORATOR = "COLLABORATOR",
}

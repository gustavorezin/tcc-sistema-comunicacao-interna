import { IUser } from "@modules/users/domain/models/IUser";

export interface IGroup {
  id: string;
  name: string;
  users: IUser[];
  createdAt: Date;
  updatedAt: Date;
}

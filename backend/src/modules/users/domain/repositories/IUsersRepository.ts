import { ICreateUser } from "../models/ICreateUser";
import { IUser } from "../models/IUser";

export interface IUsersRepository {
  create(data: ICreateUser): Promise<IUser>;
  findByEmail(email: string): Promise<IUser | null>;
  // update(data: IUser): Promise<IUser>;
  // delete(id: string): Promise<void>;
}

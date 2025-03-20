import { prisma } from "@commons/infra/prisma/prismaClient";
import { ICreateUser } from "@modules/users/domain/models/ICreateUser";
import { IUser } from "@modules/users/domain/models/IUser";
import { IUsersRepository } from "@modules/users/domain/repositories/IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private readonly repository = prisma.user;

  create(dataCreateUser: ICreateUser): Promise<IUser> {
    const user = this.repository.create({
      data: {
        name: dataCreateUser.name,
        email: dataCreateUser.email,
        password: dataCreateUser.password,
        role: "COLLABORATOR",
      },
    });
    return user;
  }

  findByEmail(email: string): Promise<IUser | null> {
    const user = this.repository.findUnique({
      where: {
        email,
      },
    });
    return user;
  }
}

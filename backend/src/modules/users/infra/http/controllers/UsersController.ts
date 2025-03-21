import { CreateUserService } from "@modules/users/services/CreateUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UsersController {
  public async create(request: Request, response: Response): Promise<any> {
    const { name, email, password } = request.body;
    const createUser = container.resolve(CreateUserService);
    const user = await createUser.execute({ name, email, password });
    return response.status(201).json(user);
  }
}

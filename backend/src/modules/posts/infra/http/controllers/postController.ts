import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePostService } from "@modules/posts/services/CreatePostService";
import { prisma } from "@commons/infra/prisma/prismaClient";

export class PostsController {
  public async index(req: Request, res: Response) {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  }

  public async create(req: Request, res: Response) {
    const { title, content } = req.body;
    console.log("caiu aqui");
    const createPost = container.resolve(CreatePostService);
    const post = await createPost.execute({ title, content });
    res.status(201).json(post);
  }
}

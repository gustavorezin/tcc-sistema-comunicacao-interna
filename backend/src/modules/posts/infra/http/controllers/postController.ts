import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PostsController {
  public async index(req: Request, res: Response) {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  }

  public async create(req: Request, res: Response) {
    const { title, content } = req.body;
    const post = await prisma.post.create({
      data: { title, content },
    });
    res.status(201).json(post);
  }
}

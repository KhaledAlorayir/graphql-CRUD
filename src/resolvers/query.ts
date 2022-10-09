import { Context } from "../shared/Interfaces";
import prisma from "../shared/PrismaClient";

export default {
  Posts: async () => {
    const posts = await prisma.post.findMany();
    return posts;
  },
  Post: async (_: any, { id }: { id: String }) => {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });
    return post;
  },
  Comment: async (_: any, { id }: { id: String }) => {
    const post = await prisma.comment.findUnique({
      where: {
        id: Number(id),
      },
    });
    return post;
  },
};

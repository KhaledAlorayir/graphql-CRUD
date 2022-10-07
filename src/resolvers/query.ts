import prisma from "../PrismaClient";

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
};

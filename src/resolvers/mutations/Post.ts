/* import { UserInputError } from "apollo-server";
import { newPostInput, updatePostInput } from "../../shared/Interfaces";
import prisma from "../../shared/PrismaClient";

export default {
  addPost: async (_: any, args: newPostInput) => {
    const post = await prisma.post.create({
      data: {
        content: args.input.content,
      },
    });
    return post;
  },
  updatePost: async (_: any, args: updatePostInput) => {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(args.id),
      },
    });

    if (!post) throw new UserInputError("resource doesn't exist");

    const updated = await prisma.post.update({
      where: {
        id: post.id,
      },
      data: {
        content: args.input.content,
      },
    });
    return updated;
  },
  deletePost: async (_: any, args: { id: number }) => {
    await prisma.post.delete({
      where: {
        id: Number(args.id),
      },
    });
    return true;
  },
};
 */

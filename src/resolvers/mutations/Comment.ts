/* import { UserInputError } from "apollo-server";
import { updatePostInput } from "../../shared/Interfaces";
import prisma from "../../shared/PrismaClient";

export default {
  addComment: async (_: any, args: updatePostInput) => {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(args.id),
      },
    });

    if (!post) throw new UserInputError("resource doesn't exist");

    const comment = await prisma.comment.create({
      data: {
        content: args.input.content,
        postId: Number(args.id),
      },
    });

    return comment;
  },
};
 */

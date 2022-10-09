import {
  AuthenticationError,
  ForbiddenError,
  UserInputError,
} from "apollo-server";
import {
  Context,
  newPostInput,
  updatePostInput,
} from "../../shared/Interfaces";

export default {
  addPost: async (_: any, args: newPostInput, { auth, prisma }: Context) => {
    if (!auth) {
      throw new AuthenticationError("you must be logged in!");
    }

    return await prisma.post.create({
      data: {
        content: args.input.content,
        userId: auth,
      },
    });
  },
  updatePost: async (
    _: any,
    args: updatePostInput,
    { auth, prisma }: Context
  ) => {
    if (!auth) {
      throw new AuthenticationError("you must be logged in!");
    }
    const post = await prisma.post.findUnique({
      where: {
        id: Number(args.id),
      },
    });

    if (!post) throw new UserInputError("resource doesn't exist");
    if (post.userId !== auth) throw new ForbiddenError("unathorized");

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
  deletePost: async (
    _: any,
    args: { id: number },
    { auth, prisma }: Context
  ) => {
    if (!auth) {
      throw new AuthenticationError("you must be logged in!");
    }
    const post = await prisma.post.findUnique({
      where: {
        id: Number(args.id),
      },
    });

    if (!post) throw new UserInputError("resource doesn't exist");
    if (post.userId !== auth) throw new ForbiddenError("unathorized");

    await prisma.post.delete({
      where: {
        id: Number(args.id),
      },
    });

    return true;
  },
};

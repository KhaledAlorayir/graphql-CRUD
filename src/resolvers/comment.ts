import { Comment } from "@prisma/client";
import prisma from "../shared/PrismaClient";

export default {
  post: async (parent: Comment) => {
    return await prisma.comment
      .findUnique({
        where: {
          id: parent.id,
        },
      })
      .post();
  },
};

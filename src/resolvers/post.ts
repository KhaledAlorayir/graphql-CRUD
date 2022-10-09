import { Post } from "@prisma/client";
import prisma from "../shared/PrismaClient";

/*
prisma has a built in soultion to solve n+1 problem 

https://www.prisma.io/docs/guides/performance-and-optimization/query-optimization-performance

we query the parent by findunique, this will batch all request togather

*/
export default {
  comments: async (parent: Post) => {
    const comments = await prisma.post
      .findUnique({
        where: {
          id: parent.id,
        },
      })
      .comments();
    return comments;
  },
};

import prisma from "../PrismaClient";

export default {
  test: () => {
    prisma.post
      .create({
        data: {
          content: "hello",
        },
      })
      .then();
    return "ss";
  },
};

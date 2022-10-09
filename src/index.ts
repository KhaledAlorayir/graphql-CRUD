import { ApolloServer } from "apollo-server";
import schema from "./Schema";
import resolvers from "./resolvers";
import jwt from "jsonwebtoken";
import { Context } from "./shared/Interfaces";
import prisma from "./shared/PrismaClient";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ req }): Context => {
    let auth: null | number = null;
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "SECRET");
      auth = (<any>decoded).uid;
    }

    return {
      auth,
      prisma,
    };
  },
});

server.listen().then(({ url }: { url: string }) => {
  console.log("running " + url);
});

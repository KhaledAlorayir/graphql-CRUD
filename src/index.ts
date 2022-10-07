import { ApolloServer } from "apollo-server";
import schema from "./Schema";
import resolvers from "./resolvers";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.listen().then(({ url }: { url: string }) => {
  console.log("running " + url);
});

import { gql } from "apollo-server";

export default gql`
  type Query {
    Posts: [Post!]!
    Post(id: ID!): Post
  }

  type Mutation {
    addPost(input: PostInput!): Post
    updatePost(id: ID!, input: PostInput!): Post
    deletePost(id: ID!): Boolean
  }

  type Post {
    id: ID!
    content: String!
    created_at: String!
  }

  input PostInput {
    content: String!
  }
`;

/*
  id Int @id @default(autoincrement())
  content String
  created_at DateTime @default(now())
  comments Comment[]
*/

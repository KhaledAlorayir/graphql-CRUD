import { gql } from "apollo-server";

export default gql`
  type Query {
    Posts: [Post!]!
    Post(id: ID!): Post
    Comment(id: ID!): Comment
    test: String
  }

  type Mutation {
    addPost(input: PostInput!): Post
    updatePost(id: ID!, input: PostInput!): Post
    deletePost(id: ID!): Boolean
    addComment(id: ID!, input: PostInput!): Comment
    signup(input: AuthInput): User
    signin(input: AuthInput): Token
  }

  type Post {
    id: ID!
    content: String!
    created_at: String!
    comments: [Comment!]!
    user: User!
  }

  type Comment {
    id: ID!
    content: String!
    created_at: String!
    post: Post!
  }

  type User {
    id: ID!
    email: String!
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Token {
    token: String!
  }

  input PostInput {
    content: String!
  }
  input AuthInput {
    email: String!
    password: String!
  }
`;

/*
model User {
  id Int @id @default(autoincrement())
  email String @unique
  password String
  posts Post[]
  comments Comment[]
}
*/

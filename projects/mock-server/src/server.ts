import * as ApolloServerExpress from "apollo-server-express";
import boxen from "boxen";
import express from "express";
import * as Fs from "fs";
import * as VoyagerMiddleware from "graphql-voyager/middleware";
import * as Path from "path";

import * as Resolvers from "./resolvers";

const ENDPOINT_VOYAGER = "/voyager" as const;

const typeDefs = ApolloServerExpress.gql(
  Fs.readFileSync(Path.resolve("schema/schema.graphql"), "utf8")
);

const server = new ApolloServerExpress.ApolloServer({
  resolvers: Resolvers.resolvers,
  typeDefs,
});
const ENDPOINT_GRAPHQL = server.graphqlPath;

const app = express();
app.use(
  ENDPOINT_VOYAGER,
  VoyagerMiddleware.express({ endpointUrl: ENDPOINT_GRAPHQL })
);

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(
    boxen(
      `
🚀 Server ready at http://localhost:4000${server.graphqlPath}

🚀 Voyager ready at http://localhost:4000${ENDPOINT_VOYAGER}
    `,
      {
        borderColor: "greenBright",
        borderStyle: "round",
        padding: 1,
      }
    )
  );
});

import express, { RequestHandler } from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

interface Options {
  port: number;
}

export async function createServer({ port }: Options) {
  const app = express();
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  // Especifica explícitamente el tipo de RequestHandler
  const middleware: RequestHandler = expressMiddleware(server);

  app.use(cors());
  app.use(express.json()); // Para parsear el cuerpo de las peticiones
  app.use("/graphql", middleware);

  // Usamos app.listen directamente para evitar la promesa de resolver el servidor
  const serverListener = app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
    console.log(`Apolo server http://localhost:${port}/graphql`);
  });

  return {
    close: () => serverListener.close(),
  };
}

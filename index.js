const { ApolloServer } = require('apollo-server');
const typeDefs = require('./models/typeDefs');
const resolvers = require('./models/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  },
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Servidor GraphQL corriendo en ${url}`);
});

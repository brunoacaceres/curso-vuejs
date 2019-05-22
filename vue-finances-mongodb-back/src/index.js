const { GraphQLServer } = require('graphql-yoga')
const Binding = require('prisma-binding')
const { prisma } = require('./generated/prisma-client')

const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: `${__dirname}/schema.graphql`,
  resolvers,
  context: request => ({
      ...request,
      db: new Binding.Prisma({
        typeDefs: `${__dirname}/generated/graphql-schema/schema.graphql`,
        endpoint: process.env.PRISMA_ENDPOINT
      }),
      prisma
  })
})

server.start().then(() => console.log('Server runnning on http://localhost:4000'))
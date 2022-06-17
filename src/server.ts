import {ApolloServer} from 'apollo-server';
import {schemas} from './schemas';
import {resolvers} from './resolvers';
import {setHttpPlugin} from './utils/error-http-plugin';


export const createServer = () => {
    const server = new ApolloServer({
        typeDefs: schemas,
        resolvers,
        plugins: [setHttpPlugin]
    });
    return server;
}

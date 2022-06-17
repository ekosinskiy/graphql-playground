import { ApolloServer } from 'apollo-server';
import {resolvers} from './resolvers';
import {schemas} from './schemas';
import {initMongoDbConnection} from './utils/mongodb.service';
import {setHttpPlugin} from './utils/error-http-plugin';

const server = new ApolloServer({
    typeDefs: schemas,
    resolvers,
    plugins: [setHttpPlugin]
});


initMongoDbConnection(process.env, () => {
    const port = 3000;
    server.listen(port).then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });
});

import {initMongoDbConnection} from './utils/mongodb.service';
import {createServer} from './server';

const server = createServer();

initMongoDbConnection(process.env, () => {
    const port = 3000;
    server.listen(port).then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });
});

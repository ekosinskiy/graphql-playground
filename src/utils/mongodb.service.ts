import mongoose from 'mongoose';

function getMongoDbURI(protocol: string, login: string, password: string, dbname: string, host: string, port: string): string {
    if (!protocol) {
        protocol = 'mongodb';
    }

    const connectionSettings = [
        `${protocol}://`,
        login,
        ':',
        password,
        '@',
        host
    ];

    if (protocol === 'mongodb') {
        connectionSettings.push(`:${port}`);
    }

    connectionSettings.push('/');
    connectionSettings.push(dbname);

    return connectionSettings.join('');
}

function initMongoDbConnection(env: any, callback: any = null) {
    let dbConnection = getMongoDbURI(
        env.MONGODB_PROTOCOL,
        env.MONGODB_USERNAME,
        env.MONGODB_PASSWORD,
        env.MONGODB_DATABASE,
        env.MONGODB_HOST,
        env.MONGODB_PORT
    );

    if (!!env.MONGODB_REPLICA_SET) {
        dbConnection = `${dbConnection}?replicaSet=${env.MONGODB_REPLICA_SET}`;
    }

    console.log("DB connection:",dbConnection);
    mongoose.connect(
        dbConnection,
        {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        },
        (err) => {
            console.log('Connected to MongoDB! Errors:' + err);

            if (callback!==null) {
                callback();
            }
        }
    );
}

export { initMongoDbConnection };

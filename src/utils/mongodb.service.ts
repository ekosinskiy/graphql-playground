import mongoose from 'mongoose';

export const getMongoDbURI = (protocol: string, login: string, password: string, dbname: string, host: string, port: string): string => {
    const connectionSettings = [
        `${protocol}://`,
        login,
        ':',
        password,
        '@',
        host,
        ':',
        port,
        '/',
        dbname
    ];

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

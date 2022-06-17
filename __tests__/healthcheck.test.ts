import {gql} from 'apollo-server';
import {createServer} from '../src/server';
import {getMongoDbURI} from '../src/utils/mongodb.service';
import mongoose from 'mongoose';

const env = process.env;
const dbConnection = getMongoDbURI(
    env.MONGODB_PROTOCOL,
    env.MONGODB_USERNAME,
    env.MONGODB_PASSWORD,
    env.MONGODB_DATABASE,
    env.MONGODB_HOST,
    env.MONGODB_PORT
);

it('Success query', async () => {

    await mongoose.connect(dbConnection);
    const result = await createServer().executeOperation({
        query: gql`
        query GetZip {
            searchZip(zipCode: "20607") {
                zip
                city
                county
            }
        }
        `
    });
    expect(result).toBeTruthy();
    expect(result).toHaveProperty("data");
    expect(result.data?.searchZip?.county).toEqual("Prince George's County")
    expect(result.errors).toBeFalsy();
    await mongoose.connection.close();
});

it("Incorrect query", async () => {
    await mongoose.connect(dbConnection);
    const result = await createServer().executeOperation({
        query: gql`
        query GetZip {
            searchZip(zipCode: "WRONG_ZIP") {
                zip
                city
                county
            }
        }
        `
    });
    expect(result.errors).toBeTruthy();
    await mongoose.connection.close();
});


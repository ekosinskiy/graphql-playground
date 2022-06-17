import * as fs from 'fs';
import {IncomingMessage} from 'http';
import * as http from 'https';
import mongoose from 'mongoose';
import * as csv from 'fast-csv';
import {initMongoDbConnection} from './utils/mongodb.service';
import {ZipModel, ZipModelInterface} from './models/zip.model';

const getItemValue = (key: string, item: any): string => {
    if (!item) {
        return '';
    }
    return key in item ? item[key] : '';
}

const mapData = (inputData: any): ZipModelInterface => {
    return {
        zip: getItemValue('Zip Code', inputData),
        city: getItemValue('City', inputData),
        county: getItemValue('County', inputData)
    }
}

const downloadLink = 'https://opendata.maryland.gov/api/views/ryxx-aeaf/rows.csv?accessType=DOWNLOAD';
console.log('Start download file');
const storedFilePath = `/tmp/zip_${Date.now()}.csv`;
const zipFile = fs.createWriteStream(storedFilePath);
http.get(downloadLink, (response: IncomingMessage) => {
    response.pipe(zipFile);
    zipFile.on('finish', () => {
        zipFile.close();
        console.log('File downloaded');
        initMongoDbConnection(process.env, async () => {
            let items: ZipModelInterface[] = [];
            fs.createReadStream(storedFilePath)
                .pipe(csv.parse({ headers: true }))
                .on('error', error => console.error(error))
                .on('data', async (row: any) => {
                    await ZipModel.create(mapData(row));
                })
                .on('end', async (rowCount: number) => {
                    console.log(`Parsed ${rowCount} rows`);
                    fs.rmSync(storedFilePath);
                    // TODO refactoring this place to close connection
                    // TODO use generator for refactoring
                    // await mongoose.connection.close();
                    const used = process.memoryUsage().heapUsed / 1024 / 1024;
                    console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
                    console.log('Task was executed');
                });
        });
    });
});


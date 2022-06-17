import {model, Schema} from 'mongoose';

export interface ZipModelInterface {
    zip: string;
    city: string;
    county: string;
}

const zipModelSchema = new Schema({
    zip: String,
    city: String,
    county: String
}, {versionKey: false});

export const ZipModel = model<ZipModelInterface>('zip-codes', zipModelSchema);
